import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import SignupButton from "./Signup";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
<SignupButton />
    </>
  );
}

export default LoginButton;