export const environment = {
  production: true,
  api: {
    character: {
      put: 'https://dolrath-api.herokuapp.com/characters/%s',
      get: 'https://dolrath-api.herokuapp.com/characters/%s',
    },
    player: {
      put: 'https://dolrath-api.herokuapp.com/players/%s',
      get: 'https://dolrath-api.herokuapp.com/players/%s',
      getAll: 'https://dolrath-api.herokuapp.com/players',
    },
  },
  socket: {
    fightsUrl: 'https://dolrath-api.herokuapp.com/fights',
  },
};
