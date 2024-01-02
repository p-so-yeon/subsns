import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDMh0wjrfapZxMYIF5ScHWrRF5xH8BAHtw",
  authDomain: "subsns-9305e.firebaseapp.com",
  projectId: "subsns-9305e",
  storageBucket: "subsns-9305e.appspot.com",
  messagingSenderId: "255762467710",
  appId: "1:255762467710:web:f469b9eb9bfdade874412f",
  measurementId: "G-X9YBYH0K27",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
