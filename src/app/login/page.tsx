"use client";
import { useState, FormEvent } from "react";
import "../../styles/global.css"

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">P</div>
        <h2>Sign in to your account</h2>

        <button className="google-btn">Sign in with Google</button>
        <p className="or-text">or continue with email</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="forgot-password">Forgot password?</p>
          <button type="submit" className="login-btn" ><a href="./dashboard">SIGN IN</a></button>
        </form>

        <p className="signup-text">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
