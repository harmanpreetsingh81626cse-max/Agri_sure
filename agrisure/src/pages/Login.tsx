import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    console.log(
      "Login:",
      email,
      password
    );
  }

  return (
    <main className="auth-page">

      <section className="auth-card">

        <div className="auth-icon">
          🌿
        </div>

        <span>
          WELCOME BACK
        </span>

        <h1>
          Login to Agrisure
        </h1>

        <p>
          Continue exploring smarter farming information.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="email">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              placeholder="Enter your email"
              required
            />

          </div>

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              placeholder="Enter your password"
              required
            />

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Login →
          </button>

        </form>

        <p className="auth-footer">

          Don't have an account?{" "}

          <Link to="/signup">
            Create one
          </Link>

        </p>

      </section>

    </main>
  );
}

export default Login;