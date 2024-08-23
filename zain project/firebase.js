// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged ,
  signOut ,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
  sendEmailVerification 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";


// firestore

import { doc, setDoc,getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyCSZbyCsgYNFhIogmfh4OKjm6TgQ2FnKFg",
    authDomain: "login-page-a6bd9.firebaseapp.com",
    projectId: "login-page-a6bd9",
    storageBucket: "login-page-a6bd9.appspot.com",
    messagingSenderId: "948800827323",
    appId: "1:948800827323:web:a0ee3bfdacb3969e41de9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  onAuthStateChanged ,
  signOut ,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword ,
  sendEmailVerification ,
  doc, 
  setDoc,
  db
};