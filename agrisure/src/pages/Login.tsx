import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log("Login:", email, password);
  }

  return (
    <main className="page">

      <section className="page-header">
        <h1>Login</h1>

        <p>
          Login to your Agrisure account.
        </p>
      </section>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Email</label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <br />

        <div>
          <label>Password</label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        <br />

        <button type="submit">
          Login
        </button>

      </form>

      <br />

      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          Sign up
        </Link>
      </p>

    </main>
  );
}

export default Login;