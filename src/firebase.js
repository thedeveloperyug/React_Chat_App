// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRQhIWPVluVlA4rbCgNDmB0WFrN7tLrEY",
  authDomain: "chatsys-54518.firebaseapp.com",
  projectId: "chatsys-54518",
  storageBucket: "chatsys-54518.appspot.com",
  messagingSenderId: "345506326849",
  appId: "1:345506326849:web:debfcfe7e34c092e8519c0",
  measurementId: "G-S96Q72BWMT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
export  const storage = getStorage(app)
export  const db = getFirestore(app)


