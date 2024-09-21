// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6Gyz4Sja-Fbc4Ws4GR-YzanCzjJ39U9w",
  authDomain: "vite-contact-f4fbc.firebaseapp.com",
  projectId: "vite-contact-f4fbc",
  storageBucket: "vite-contact-f4fbc.appspot.com",
  messagingSenderId: "264556818772",
  appId: "1:264556818772:web:cee6577090b099dc03d8c1"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getFirestore(app);