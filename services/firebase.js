import firebase from "firebase/app";
import "firebase/auth"

const config= {
    apiKey: "AIzaSyBVdGWk4QVEqexFiZ92Zr4i01MBTYUngj4",
    authDomain: "nuxt-auth-1f5a1.firebaseapp.com",
    databaseURL: "https://nuxt-auth-1f5a1.firebaseio.com",
    projectId: "nuxt-auth-1f5a1",
    storageBucket: "nuxt-auth-1f5a1.appspot.com",
    messagingSenderId: "749525528772",
    appId: "1:749525528772:web:83fe158fb6b2eca09d9991"
  }

  !firebase.apps.length ? firebase.initializeApp(config) : "";

  export const auth= firebase.auth();