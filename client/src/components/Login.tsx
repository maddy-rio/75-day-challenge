import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <button className="login-button" onClick={() => loginWithRedirect()}>Login</button>
      <button className="sign-up-button"><Link to="https://dev-maddy.au.auth0.com/u/signup?state=hKFo2SBxcnZKc3NEQkNrX05LT1dPZW1iUFF5Y3VvbTFfMUJmSaFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIDUwUHJPNWg3X1c5dElXaVpPaXB4LWZiMXR5eS1aQ1F4o2NpZNkgaDE3T0szMm05VDlCdFhkUXNIak9VTzdUZGZuZmdlY0I">Sign up</Link></button>
    </>
  );
}

export default LoginButton;