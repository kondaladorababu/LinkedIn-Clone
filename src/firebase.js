// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC20MLlfgFosA7bJZcDBxMtEuY5w92jw5U",
    authDomain: "linkedin-clone-7316a.firebaseapp.com",
    projectId: "linkedin-clone-7316a",
    storageBucket: "linkedin-clone-7316a.appspot.com",
    messagingSenderId: "718011466082",
    appId: "1:718011466082:web:19e2190abd94c11fdaec3b"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const auth = getAuth(fireBaseApp);
const db = getFirestore(fireBaseApp);
export { auth, db };