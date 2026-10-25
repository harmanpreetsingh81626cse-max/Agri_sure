import { useEffect } from "react";
import { Bookmark, LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";
import CropCard from "../components/CropCard";
import Loading from "../components/Loading";
import Button from "../components/Button";

function Profile() {
  const { user, logout } = useAuth();
  const dispatch = useAppDispatch();
  const { items: crops, status } = useAppSelector((state) => state.crops);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  if (!user) {
    return (
      <main className="auth-page">
        <section className="auth-card">
          <div className="auth-icon">
            <User size={26} />
          </div>
          <h1>Your profile</h1>
          <p className="auth-sub">
            Login or create an account to bookmark crops.
          </p>
          <div className="button-row">
            <Link to="/login" className="btn btn-green">Login</Link>
            <Link to="/signup" className="btn btn-light">Sign up</Link>
          </div>
        </section>
      </main>
    );
  }

  const savedCrops = crops.filter((crop) =>
    user.favoriteCropIds.includes(crop.id)
  );

  return (
    <main className="page">
      <section className="profile-header">
        <div className="avatar">{user.name.charAt(0).toUpperCase()}</div>
        <div className="profile-info">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
        <Button variant="secondary" onClick={logout}>
          <LogOut size={16} /> Log out
        </Button>
      </section>

      <section>
        <h2 className="section-title">
          <Bookmark size={20} /> Saved crops ({user.favoriteCropIds.length})
        </h2>

        {status === "loading" && <Loading />}

        {user.favoriteCropIds.length === 0 && (
          <div className="empty-state">
            <h2>No saved crops yet</h2>
            <p>Click the bookmark icon on any crop to save it here.</p>
            <Link to="/crops" className="btn btn-green">Explore crops</Link>
          </div>
        )}

        {savedCrops.length > 0 && (
          <div className="crop-grid">
            {savedCrops.map((crop) => (
              <CropCard
                key={crop.id}
                id={crop.id}
                name={crop.name}
                description={crop.description}
                image={crop.image}
                varietyCount={crop.varieties.length}
                diseaseCount={crop.diseases.length}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default Profile;