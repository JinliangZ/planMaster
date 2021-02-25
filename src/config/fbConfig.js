import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkSfs6M8yVaOM3j7x265I_0w5RxVOVoME",
    authDomain: "planmaster-cc1aa.firebaseapp.com",
    projectId: "planmaster-cc1aa",
    storageBucket: "planmaster-cc1aa.appspot.com",
    messagingSenderId: "306240510705",
    appId: "1:306240510705:web:b97176b0c948c4e1352750",
    measurementId: "G-Z2B37XW11B"
  };

firebase.initializeApp(firebaseConfig);
firebase.firestore();


export default firebase;