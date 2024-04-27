
import axios from 'axios';

const auth0Client = axios.create({
  baseURL: 'https://dev-maddy.au.auth0.com/api/v2',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_AUTH0_TOKEN}`,
  },
});

export default auth0Client;