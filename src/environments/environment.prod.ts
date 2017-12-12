const apiUrl = 'https://dolrath-api.herokuapp.com';

export const environment = {
  production: true,
  api: {
    character: {
      put: `${apiUrl}/characters/%s`,
      delete: `${apiUrl}/characters/%s`,
      get: `${apiUrl}/characters/%s`,
      getByEmail: `${apiUrl}/players/%s/characters`,
    },
    player: {
      put: `${apiUrl}/players/%s`,
      delete: `${apiUrl}/players/%s`,
      get: `${apiUrl}/players/%s`,
      getAll: `${apiUrl}/players`,
    },
  },
  socket: {
    fightsUrl: `${apiUrl}/fights`,
  },
};
