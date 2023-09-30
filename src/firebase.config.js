// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB5AAUj3QsDflcbbFCYVIXFj0iiZDX3IJQ",
    authDomain: "auth-mohamilon-8bbd7.firebaseapp.com",
    projectId: "auth-mohamilon-8bbd7",
    storageBucket: "auth-mohamilon-8bbd7.appspot.com",
    messagingSenderId: "950184862761",
    appId: "1:950184862761:web:3930a029b561566b5aa838"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth