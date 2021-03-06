import React from "react";
import "../auth.css";

export default function SignUp({ handleSignUp, handleSignInClick }) {
  return (
    <div className="form">
      <div className="header">Sign Up</div>
      <label>First name:</label>
      <input type="text" placeholder="John" />
      <br />
      <label>Last name:</label>
      <input type="text" placeholder="Doe" />
      <br />
      <label>Email:</label>
      <input type="text" placeholder="Doe" />
      <br />
      <label>Type:</label>
      <select>
        <option value="customer">Customer</option>
        <option value="trader">Trader</option>
      </select>
      <br />
      <br />
      <button onClick={handleSignUp}>Sign Up</button>
      <div className="auth-link" onClick={handleSignInClick}>
        Sign In
      </div>
    </div>
  );
}
