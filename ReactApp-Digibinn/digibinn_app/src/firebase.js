// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsRBO4p_LIrGv4ePaMpM92T_E3smpOibw",
  authDomain: "digibinn-20537.firebaseapp.com",
  projectId: "digibinn-20537",
  storageBucket: "digibinn-20537.appspot.com",
  messagingSenderId: "764805872612",
  appId: "1:764805872612:web:6a4e09da407cc3db6b25f1",
  measurementId: "G-EHNBQ4KS9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {app, db} 