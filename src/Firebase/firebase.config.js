// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCfOYIgA0SlujwkSPkzLnVsQO10Nc4-HsM",
    authDomain: "the-kitchen-8da82.firebaseapp.com",
    projectId: "the-kitchen-8da82",
    storageBucket: "the-kitchen-8da82.appspot.com",
    messagingSenderId: "455722376325",
    appId: "1:455722376325:web:0a08636c80746086239dec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;