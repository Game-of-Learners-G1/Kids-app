// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5bXYIYsCMexrfKewSsGpmbOKDSpe2FVY",
  authDomain: "kidsapp-80619.firebaseapp.com",
  projectId: "kidsapp-80619",
  storageBucket: "kidsapp-80619.appspot.com",
  messagingSenderId: "240962143358",
  appId: "1:240962143358:web:6c8cbc35c9d1dd07d9842f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);