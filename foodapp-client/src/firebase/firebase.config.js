// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    // apiKey: "AIzaSyBuhQl0N2b4xHuhpiUb1VYU3-fTXeermxE",
    // authDomain: "foodapp-4a349.firebaseapp.com",
    // projectId: "foodapp-4a349",
    // storageBucket: "foodapp-4a349.firebasestorage.app",
    // messagingSenderId: "53356017809",
    // appId: "1:53356017809:web:a6acd288ad9a7d90d7e730"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;