import React, { useState } from "react";
import SignUp from "./layouts/SignUp";
import SignIn from "./layouts/SignIn";

export default function AuthContainer(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authState, setAuthState] = useState("signup");
  const dummyUserData = {
    firstName: "Dinura",
    lastName: "Imesh",
    type: "trader",
  };
  return (
    <div>
      {isLoggedIn ? (
        props.children
      ) : authState === "signup" ? (
        <SignUp
          handleSignUp={() => {
            props.onAuth(dummyUserData);
            setIsLoggedIn(true);
          }}
          handleSignInClick={() => setAuthState("signin")}
        />
      ) : (
        <SignIn
          handleSignIn={() => {
            props.onAuth(dummyUserData);
            setIsLoggedIn(true);
          }}
          HandleSignUpClick={() => setAuthState("signup")}
        />
      )}
    </div>
  );
}
