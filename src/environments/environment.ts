// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

const apiUrl = 'http://localhost:8080';

export const environment = {
  production: false,
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
    race: {
      getAll: `${apiUrl}/races`,
    },
  },
  socket: {
    fightsUrl: `${apiUrl}/fights`,
  },
};
