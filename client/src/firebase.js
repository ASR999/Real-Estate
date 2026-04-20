// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estatecity.firebaseapp.com",
  projectId: "estatecity",
  storageBucket: "estatecity.firebasestorage.app",
  messagingSenderId: "746980469684",
  appId: "1:746980469684:web:d7e35de4e83c2c54bc20e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);