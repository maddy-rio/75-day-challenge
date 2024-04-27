import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
      <button className="sign-up-button"><Link to="https://dev-maddy.au.auth0.com/u/signup?state=hKFo2SA0ODc4ejBjV0h5Y05sZERQOFlsc3JXZTFUeHZvZV9DQaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE5yOVBfa2wxWXZuSFJsRjZtWFB3UnRHdXlBeGxzYTRto2NpZNkgaDE3T0szMm05VDlCdFhkUXNIak9VTzdUZGZuZmdlY0I">Sign up</Link></button>
    </>
  );
}

export default LoginButton;