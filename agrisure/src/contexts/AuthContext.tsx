import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

interface StoredProfile {
  id: string;
  name: string;
  email: string;
  salt: string;
  passwordHash: string;
  favoriteCropIds: string[];
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
  favoriteCropIds: string[];
}

interface AuthContextValue {
  user: AuthUser | null;
  signup: (name: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  toggleFavorite: (cropId: string) => void;
  isFavorite: (cropId: string) => boolean;
}

const PROFILES_KEY = "agrisure-profiles";
const CURRENT_USER_KEY = "agrisure-current-user";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

function readProfiles(): StoredProfile[] {
  try {
    const value = localStorage.getItem(PROFILES_KEY);
    return value ? (JSON.parse(value) as StoredProfile[]) : [];
  } catch {
    return [];
  }
}

function toHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function makeSalt(): string {
  return toHex(crypto.getRandomValues(new Uint8Array(16)));
}

async function hashPassword(password: string, salt: string): Promise<string> {
  const encoder = new TextEncoder();

  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: encoder.encode(salt),
      iterations: 100000,
      hash: "SHA-256",
    },
    key,
    256
  );

  return toHex(new Uint8Array(bits));
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [profiles, setProfiles] = useState<StoredProfile[]>(readProfiles);
  const [currentUserId, setCurrentUserId] = useState<string | null>(() =>
    localStorage.getItem(CURRENT_USER_KEY)
  );

  // save all profiles (and their bookmarks) whenever they change
  useEffect(() => {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  }, [profiles]);

  const storedUser =
    profiles.find((profile) => profile.id === currentUserId) ?? null;

  const user: AuthUser | null = storedUser
    ? {
        id: storedUser.id,
        name: storedUser.name,
        email: storedUser.email,
        favoriteCropIds: storedUser.favoriteCropIds,
      }
    : null;

  async function signup(name: string, email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();

    if (profiles.some((profile) => profile.email === normalizedEmail)) {
      throw new Error("An account with this email already exists.");
    }

    const salt = makeSalt();
    const passwordHash = await hashPassword(password, salt);
    const id = crypto.randomUUID();

    const newProfile: StoredProfile = {
      id,
      name: name.trim(),
      email: normalizedEmail,
      salt,
      passwordHash,
      favoriteCropIds: [],
    };

    setProfiles((current) => [...current, newProfile]);
    setCurrentUserId(id);
    localStorage.setItem(CURRENT_USER_KEY, id);
  }

  async function login(email: string, password: string) {
    const normalizedEmail = email.trim().toLowerCase();
    const profile = profiles.find((item) => item.email === normalizedEmail);

    if (!profile) {
      throw new Error("No account was found for that email.");
    }

    const passwordHash = await hashPassword(password, profile.salt);

    if (passwordHash !== profile.passwordHash) {
      throw new Error("Incorrect password. Please try again.");
    }

    setCurrentUserId(profile.id);
    localStorage.setItem(CURRENT_USER_KEY, profile.id);
  }

  function logout() {
    setCurrentUserId(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  }

  function toggleFavorite(cropId: string) {
    if (!currentUserId) return;

    setProfiles((current) =>
      current.map((profile) => {
        if (profile.id !== currentUserId) return profile;

        const alreadySaved = profile.favoriteCropIds.includes(cropId);

        return {
          ...profile,
          favoriteCropIds: alreadySaved
            ? profile.favoriteCropIds.filter((id) => id !== cropId)
            : [...profile.favoriteCropIds, cropId],
        };
      })
    );
  }

  function isFavorite(cropId: string) {
    return user ? user.favoriteCropIds.includes(cropId) : false;
  }

  const value: AuthContextValue = {
    user,
    signup,
    login,
    logout,
    toggleFavorite,
    isFavorite,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}