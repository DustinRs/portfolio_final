import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),importProvidersFrom(
    provideFirebaseApp(() =>
      initializeApp({
        apiKey: "AIzaSyA_vBp-eFxKbgcImdw7-hf2BUjymYNGExA",
  authDomain: "portfolio-56e59.firebaseapp.com",
  projectId: "portfolio-56e59",
  storageBucket: "portfolio-56e59.appspot.com",
  messagingSenderId: "1070337356847",
  appId: "1:1070337356847:web:6085efb75f75be70ecc2da"
      })
    )

  ),importProvidersFrom(provideFirestore(() => getFirestore())),]
};
