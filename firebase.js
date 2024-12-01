// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAY8sGX-z9XUYWrttcfmyuSIawLqMrZeJc",
  authDomain: "chatapp-f9d43.firebaseapp.com",
  projectId: "chatapp-f9d43",
  storageBucket: "chatapp-f9d43.appspot.com",  // corrected to use .appspot.com as the domain
  messagingSenderId: "420886958429",
  appId: "1:420886958429:web:17dee55ad7bc664fb698b4",
  measurementId: "G-6WN71T8X4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Optional: Initialize Firebase Analytics
const analytics = getAnalytics(app);

export { app, auth, db, analytics };
