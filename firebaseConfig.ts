// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk6Y1Q3_7MFAH6ApZQ8aLclNHgl2WhkjM",
  authDomain: "echofashion-cfb94.firebaseapp.com",
  projectId: "echofashion-cfb94",
  storageBucket: "echofashion-cfb94.firebasestorage.app",
  messagingSenderId: "239553105153",
  appId: "1:239553105153:web:86aa6fb049ba8541211f00",
  measurementId: "G-N2Y8ZS92T0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);