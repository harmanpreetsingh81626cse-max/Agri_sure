import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log(
      "Signup:",
      name,
      email,
      password
    );
  }

  return (
    <main className="auth-page">

      <section className="auth-card">

        <div className="auth-icon">
          🌱
        </div>

        <span>
          JOIN AGRISURE
        </span>

        <h1>
          Create an Account
        </h1>

        <p>
          Create your Agrisure account and explore smarter farming information.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter your name"
              required
            />

          </div>

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
              placeholder="Create a password"
              required
            />

          </div>

          <button
            type="submit"
            className="auth-button"
          >
            Create Account →
          </button>

        </form>

        <p className="auth-footer">

          Already have an account?{" "}

          <Link to="/login">
            Login
          </Link>

        </p>

      </section>

    </main>
  );
}

export default Signup;