import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './components/App';

const root = createRoot(document.getElementById('root')!);

root.render(
<Auth0Provider
    domain="dev-maddy.au.auth0.com"
    clientId="h17OK32m9T9BtXdQsHjOUO7TdfnfgecB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);