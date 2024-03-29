import {initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsRBO4p_LIrGv4ePaMpM92T_E3smpOibw",
  authDomain: "digibinn-20537.firebaseapp.com",
  projectId: "digibinn-20537",
  storageBucket: "digibinn-20537.appspot.com",
  messagingSenderId: "764805872612",
  appId: "1:764805872612:web:6a4e09da407cc3db6b25f1",
  measurementId: "G-EHNBQ4KS9Z",
  databaseURL: "https://digibinn-20537-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


export const auth = getAuth(app);
export default {app, database}

