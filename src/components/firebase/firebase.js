// first of all - npm install firebase -
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// FireBase Configration that we get from Firebase itself
const firebaseConfig = {
    apiKey: "AIzaSyDiWfHthttan0oseel4CcONdsEs2mz9ONg",
    authDomain: "crwndb-c39c9.firebaseapp.com",
    projectId: "crwndb-c39c9",
    storageBucket: "crwndb-c39c9.appspot.com",
    messagingSenderId: "971450378078",
    appId: "1:971450378078:web:4c6c2394344f10c72091cf",
    measurementId: "G-PKM5ZWG3V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// -----------------------------------------------

// Starting Authentication
export const auth = getAuth();
// FireStore is like Database
export const firestore = getFirestore();
// This is google Service to handle the google account with firebase
const provider = new GoogleAuthProvider();
// To popup the google account that logged in the browser
provider.getCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });