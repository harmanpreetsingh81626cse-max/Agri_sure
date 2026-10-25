import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters.");
      return;
    }
    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setBusy(true);
      await signup(name, email, password);
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not create account.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-icon">
          <UserPlus size={26} />
        </div>
        <h1>Create an account</h1>
        <p className="auth-sub">Your profile and bookmarks will be remembered.</p>

        <form onSubmit={handleSubmit} noValidate>
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <Input
            label="Confirm password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            autoComplete="new-password"
          />

          {error && <p className="form-error" role="alert">{error}</p>}

          <Button type="submit" disabled={busy}>
            {busy ? "Creating account..." : "Create account"}
          </Button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </section>
    </main>
  );
}

export default Signup;