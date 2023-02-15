import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


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
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
