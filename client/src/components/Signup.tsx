import React from "react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  const signupUrl = "https://dev-maddy.au.auth0.com/u/signup?" +
    "state=hKFo2SBvNXZ5NWtKMGRZcHRqbHdMNWJkMlFGUE1BZklrOGlCYqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIENpYWNUOUhkczJVdnM0T3NyaEd1RUw3anFlNDhhZFpKo2NpZNkgaDE3T0szMm05VDlCdFhkUXNIak9VTzdUZGZuZmdlY0I";

  return (
    <button className="sign-up-button">
      <Link to={signupUrl}>Sign up</Link>
    </button>
  );
}

export default SignupButton;
