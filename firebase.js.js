import { initializeApp } from "https://gstatic.com";
import { getAuth } from "https://gstatic.com";
import { getFirestore } from "https://gstatic.com";

const firebaseConfig = {
  apiKey: "AIzaSyBReL-Qo-rEhV_0743ATEOczUTq46QHP2o",
  authDomain: "://firebaseapp.com",
  projectId: "classroom-studio-33a73",
  storageBucket: "classroom-studio-33a73.firebasestorage.app",
  messagingSenderId: "602024328058",
  appId: "1:602024328058:web:9e4afb526705be725434c3",
  measurementId: "G-Y0631S0X43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
