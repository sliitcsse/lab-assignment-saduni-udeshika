import React, { useState } from "react";
import SignUp from "./layouts/SignUp";
import SignIn from "./layouts/SignIn";

export default function AuthContainer(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authState, setAuthState] = useState("signup");
  return (
    <div>
      {isLoggedIn ? (
        props.children
      ) : authState === "signup" ? (
        <SignUp
          handleSignUp={() => setIsLoggedIn(true)}
          handleSignInClick={() => setAuthState("signin")}
        />
      ) : (
        <SignIn
          handleSignIn={() => setIsLoggedIn(true)}
          HandleSignUpClick={() => setAuthState("signup")}
        />
      )}
    </div>
  );
}
