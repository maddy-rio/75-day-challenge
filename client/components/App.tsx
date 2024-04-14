import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

import Main from './Main';
import Footer from './Footer';

const domain = 'dev-maddy.au.auth0.com';
const clientId = 'h17OK32m9T9BtXdQsHjOUO7TdfnfgecB';
const redirectUri = window.location.origin;

function App() {
  return (
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: redirectUri
    }}
  >
    <div className="app">
      <Main />
      <Footer />
    </div>
  </Auth0Provider>
);
}

export default App;