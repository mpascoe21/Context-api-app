// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCX5w17Ocz9pbwSHK10ViCdDhgFDEh429E",
  authDomain: "fir-test-d760f.firebaseapp.com",
  projectId: "fir-test-d760f",
  storageBucket: "fir-test-d760f.appspot.com",
  messagingSenderId: "759111781402",
  appId: "1:759111781402:web:24832b15d780aaa2c115a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);