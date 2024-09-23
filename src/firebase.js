// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2NKD-41uMSHADaaALoBdcM0H11vLntgc",
  authDomain: "free-fire-4c5cc.firebaseapp.com",
  projectId: "free-fire-4c5cc",
  storageBucket: "free-fire-4c5cc.appspot.com",
  messagingSenderId: "1053074396239",
  appId: "1:1053074396239:web:8868aa4d3c16a0b4a9063a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
    db
}