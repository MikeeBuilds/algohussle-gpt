import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqmAX5bTa4Wwt8yFPA4GBluWDpSWFosxY",
  authDomain: "algogpt-messenger.firebaseapp.com",
  projectId: "algogpt-messenger",
  storageBucket: "algogpt-messenger.appspot.com",
  messagingSenderId: "448786111746",
  appId: "1:448786111746:web:979181196753f49c2c361b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);