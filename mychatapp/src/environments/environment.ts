// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCLeGMkjwWVVAzQOT89CgLBNdN9MIcJWK8',
    authDomain: 'mychatapp-18e8b.firebaseapp.com',
    databaseURL: 'https://mychatapp-18e8b.firebaseio.com',
    projectId: 'mychatapp-18e8b',
    storageBucket: 'mychatapp-18e8b.appspot.com',
    messagingSenderId: '328911024070'
  }
};
