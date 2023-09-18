// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGPQK3fVd22kV3PcvlPRiScSn0v8vDAjA",
  authDomain: "amazom-clone-c214a.firebaseapp.com",
  projectId: "amazom-clone-c214a",
  storageBucket: "amazom-clone-c214a.appspot.com",
  messagingSenderId: "130824732858",
  appId: "1:130824732858:web:61bfc747a3b4ea2605c283",
  measurementId: "G-R272WJHHWJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);