import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration

const firebaseConfig = {
  apiKey: "AIzaSyD6uhoTd38y_eOPKtG3N1ubCJ84iKy3-mg",
  authDomain: "todo-app-v9.firebaseapp.com",
  projectId: "todo-app-v9",
  storageBucket: "todo-app-v9.appspot.com",
  messagingSenderId: "596496997026",
  appId: "1:596496997026:web:644c43841ede1776c115fb",
  measurementId: "G-3T89S7NRKE",
};

const app = initializeApp(firebaseConfig);
//dor connecting to the firrestore database
const db = getFirestore();

export { db, app };
