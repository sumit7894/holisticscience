// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADTX7m8-aFA0lgftmTteL9mAlZ_fUgISQ",
  authDomain: "holistic-science.firebaseapp.com",
  projectId: "holistic-science",
  storageBucket: "holistic-science.appspot.com",
  messagingSenderId: "249823038146",
  appId: "1:249823038146:web:fb5a1200b865d42a70095b",
  measurementId: "G-X77TJWCEP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);