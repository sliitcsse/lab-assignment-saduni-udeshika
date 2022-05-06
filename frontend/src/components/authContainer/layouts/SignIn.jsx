import React from "react";

export default function SignIn({ handleSignIn, HandleSignUpClick }) {
  return (
    <div className="form">
      <div className="header">Sign In</div>
      <label>Email:</label>
      <input type="email" />
      <br />
      <label>Password:</label>
      <input type="password" />
      <br />
      <br />
      <button onClick={handleSignIn}>Sign In</button>
      <div className="auth-link" onClick={HandleSignUpClick}>
        Sign In
      </div>
    </div>
  );
}
