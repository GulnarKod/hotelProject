// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore";
// Required for side-effects
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoRm2-QqGX1O9jnofSvWb33ETA1bQseuo",
  authDomain: "crmanagementsystemproject.firebaseapp.com",
  projectId: "crmanagementsystemproject",
  storageBucket: "crmanagementsystemproject.appspot.com",
  messagingSenderId: "239107684597",
  appId: "1:239107684597:web:cd26f63470311f94e9adbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
