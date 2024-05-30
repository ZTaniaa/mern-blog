// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-712d5.firebaseapp.com",
  projectId: "mern-blog-712d5",
  storageBucket: "mern-blog-712d5.appspot.com",
  messagingSenderId: "652951342932",
  appId: "1:652951342932:web:af70409eb863d899c302c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

