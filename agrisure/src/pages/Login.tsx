import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setBusy(true);
      await login(email, password);
      navigate("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not log in.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="auth-page">
      <section className="auth-card">
        <div className="auth-icon">
          <LogIn size={26} />
        </div>
        <h1>Welcome back</h1>
        <p className="auth-sub">Login to see your profile and saved crops.</p>

        <form onSubmit={handleSubmit} noValidate>
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
            autoComplete="current-password"
          />

          {error && <p className="form-error" role="alert">{error}</p>}

          <Button type="submit" disabled={busy}>
            {busy ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Create one</Link>
        </p>
      </section>
    </main>
  );
}

export default Login;