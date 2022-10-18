// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmet4CrhFvG-2A9GyTspuNAjKQNwdRVr8",
  authDomain: "reactjscoder-e11d7.firebaseapp.com",
  projectId: "reactjscoder-e11d7",
  storageBucket: "reactjscoder-e11d7.appspot.com",
  messagingSenderId: "876806401078",
  appId: "1:876806401078:web:3bc200fb7dd04699747c97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)