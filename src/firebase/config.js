// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAieBncKh-ZD0kneK6cs6rZjERibe11pIc",
    authDomain: "proyecto-reactjs-9e48d.firebaseapp.com",
    projectId: "proyecto-reactjs-9e48d",
    storageBucket: "proyecto-reactjs-9e48d.appspot.com",
    messagingSenderId: "868955694153",
    appId: "1:868955694153:web:bc7040890fc85d51054b98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)