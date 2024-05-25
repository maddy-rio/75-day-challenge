import React from "react";
import { Link } from "react-router-dom";

const SignupButton = () => {
  const signupUrl = "https://dev-maddy.au.auth0.com/authorize?" +
    "response_type=code&" +
    "client_id=h17OK32m9T9BtXdQsHjOUO7TdfnfgecB" +
    "redirect_uri=https://75daychallenge.netlify.app&" +
    "state=STATE&" +
    "screen_hint=signup";

  return (
    <button className="sign-up-button">
      <Link to={signupUrl}>Sign up</Link>
    </button>
  );
}

export default SignupButton;
