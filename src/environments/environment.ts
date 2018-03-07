// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serviceWorkerEnabled: false,
  mobile: false,
  firebase: {
    apiKey: 'AIzaSyC3Dz8bU4xud7vVOKDLW3wMNq2viRQV9-k',
    authDomain: 'shopping-list-eeac2.firebaseapp.com',
    databaseURL: 'https://shopping-list-eeac2.firebaseio.com',
    projectId: 'shopping-list-eeac2',
    storageBucket: '',
    messagingSenderId: '790263687372'
  }
};
