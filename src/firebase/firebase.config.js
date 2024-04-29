// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyBgKF51JlWwi4WNHPYmwmZl8Nw7ZCVrhQo",
  // authDomain: "assign-10-83881.firebaseapp.com",
  // projectId: "assign-10-83881",
  // storageBucket: "assign-10-83881.appspot.com",
  // messagingSenderId: "97875084370",
  // appId: "1:97875084370:web:38cc8b3d76e164f8090b8b"

  apiKey:import.meta.env.VITE_APIKEY,
  authDomain:import.meta.env.VITE_AUTHDOMAIN,
  projectId:import.meta.env.VITE_PROJECTID,
  storageBucket:import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
  appId:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;