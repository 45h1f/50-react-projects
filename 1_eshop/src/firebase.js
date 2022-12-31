// import firebase from "firebase";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCRGPFDp5ueb7h8snoFwxhTIvaNZA39s80",
    authDomain: "eshop-react-e7b08.firebaseapp.com",
    projectId: "eshop-react-e7b08",
    storageBucket: "eshop-react-e7b08.appspot.com",
    messagingSenderId: "373276666656",
    appId: "1:373276666656:web:5e796b70b3a2d64e250545",
    measurementId: "G-H0TFS9Y0N3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };

