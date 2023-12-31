// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbXi8AYe75kSQ94-zywxkhZZoWT7ztVC4",
  authDomain: "holisticscience-955a2.firebaseapp.com",
  projectId: "holisticscience-955a2",
  storageBucket: "holisticscience-955a2.appspot.com",
  messagingSenderId: "213130334303",
  appId: "1:213130334303:web:9a0cf7aae7345584454bea",
  measurementId: "G-SQG17GGFRW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
const analytics = getAnalytics(app);