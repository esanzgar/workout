// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { FirebaseAppConfig } from "@angular/fire";

export const firebaseAppConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyDl8Jo49hAkhIdPG70bKxLS2ZTgR_Rcnmg",
  authDomain: "ng-workout-6cce0.firebaseapp.com",
  databaseURL: "https://ng-workout-6cce0.firebaseio.com",
  projectId: "ng-workout-6cce0",
  storageBucket: "ng-workout-6cce0.appspot.com",
  messagingSenderId: "706188657430"
};

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
