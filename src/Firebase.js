import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyDM3csSfqAV_P4Z_fV4ff7s5mnqvufPiac",
    authDomain: "trabajofinalreactale.firebaseapp.com",
    projectId: "trabajofinalreactale",
    storageBucket: "trabajofinalreactale.appspot.com",
    messagingSenderId: "896268583852",
    appId: "1:896268583852:web:98f79efc98ffa8a4e6b009"
};

// app.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db }

