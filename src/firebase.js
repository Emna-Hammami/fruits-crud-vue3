import firebase from "firebase/app";
import "firebase/firestore";


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8p2sVb702DGS2cyPDQTWZBKFZktT30jc",
  authDomain: "fruits-crud-app-5492e.firebaseapp.com",
  projectId: "fruits-crud-app-5492e",
  storageBucket: "fruits-crud-app-5492e.appspot.com",
  messagingSenderId: "573066910154",
  appId: "1:573066910154:web:f51e595d8d86ac3531d733",
  measurementId: "G-VX7HZ5M645"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;