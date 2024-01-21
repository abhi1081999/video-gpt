// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDrioyxTBBasiNnPAxDw6LseJ8L-ZFre9Q",
  authDomain: "netflixgpt-af56e.firebaseapp.com",
  projectId: "netflixgpt-af56e",
  storageBucket: "netflixgpt-af56e.appspot.com",
  messagingSenderId: "613767122248",
  appId: "1:613767122248:web:ce8882e459d5eda733b77d",
  measurementId: "G-4EKJJH6S5S"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




