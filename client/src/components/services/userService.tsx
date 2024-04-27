import auth0Client from './auth0client';

export const createUser = async (user: { email: string, password: string, name: string }) => {
  const response = await auth0Client.post('/users', {
    email: user.email,
    password: user.password,
    name: user.name,
    connection: 'Username-Password-Authentication',
  });

  return response.data;
};

export const getUser = async (userId: string) => {
  const response = await auth0Client.get(`/users/${userId}`);
  return response.data;
};

export const updateUser = async (userId: string, user: { name: string, tickedGridItems: number }) => {
  const response = await auth0Client.patch(`/users/${userId}`, {
    name: user.name,
    tickedGridItems: user.tickedGridItems,
  });

  return response.data;
};