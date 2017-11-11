// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  api: {
    character: {
      put: 'http://localhost:8080/characters/%s',
      get: 'http://localhost:8080/characters/%s',
    },
    player: {
      put: 'http://localhost:8080/players/%s',
      get: 'http://localhost:8080/players/%s',
      getAll: 'http://localhost:8080/players',
    },
  },
  socket: {
    fightsUrl: 'http://localhost:8080/fights',
  },
};
