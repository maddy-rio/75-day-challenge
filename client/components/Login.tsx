import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button className="login" onClick={() => loginWithRedirect()}>Login</button>
      <button className="sign-up"><Link to="https://dev-maddy.au.auth0.com/u/signup?state=hKFo2SBXdHF5ZlhGcl9qaUVfc0h2dVRNeXdNT3QyMURnNHUycqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIG82UWRjQ3MtLVBna0drR1F3TU5DOVB1Q2szLWZobnZTo2NpZNkgaDE3T0szMm05VDlCdFhkUXNIak9VTzdUZGZuZmdlY0I">Sign up</Link></button>
    </>
  );
}

export default LoginButton;