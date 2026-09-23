import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATYZfVxHsEj012k2jHJnrF2whkS4MxQto",
  authDomain: "ecofashion-a2c13.firebaseapp.com",
  projectId: "ecofashion-a2c13",
  storageBucket: "ecofashion-a2c13.firebasestorage.app",
  messagingSenderId: "396102663692",
  appId: "1:396102663692:web:ac9df563b7883d1741f829",
  measurementId: "G-ETJT71JQXV"
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);