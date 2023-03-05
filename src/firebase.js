// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIzULl6XKPQByhLQXr4eKkzCgHPmzIOuA",
  authDomain: "recipe-book-88940.firebaseapp.com",
  projectId: "recipe-book-88940",
  storageBucket: "recipe-book-88940.appspot.com",
  messagingSenderId: "506568049701",
  appId: "1:506568049701:web:cb3dd48dd7c3ebc7f8ebcc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
