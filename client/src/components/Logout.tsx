import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="logout-container">
    <p className="logout-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      ➤ Logout  
    </p>
    </div>
  );
};

export default LogoutButton;