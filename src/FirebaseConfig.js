import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCsXuFB_9U7UELSatVmhXz3s8MjLI4sCPw",
    authDomain: "shetkari-fdfe9.firebaseapp.com",
    projectId: "shetkari-fdfe9",
    storageBucket: "shetkari-fdfe9.appspot.com",
    messagingSenderId: "143521460315",
    appId: "1:143521460315:web:22d1b47ba4565f4b9e4f7e"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const database = getFirestore(app)