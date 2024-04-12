// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-19b0c.firebaseapp.com",
  projectId: "mern-estate-19b0c",
  storageBucket: "mern-estate-19b0c.appspot.com",
  messagingSenderId: "972582238420",
  appId: "1:972582238420:web:b534525ac95dd3f034a341"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);