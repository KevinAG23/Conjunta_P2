import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCJ9JHp6ll15hiczQp-J2s35d2sr0hqwSM",
  authDomain: "deber-f1fbb.firebaseapp.com",
  projectId: "deber-f1fbb",
  storageBucket: "deber-f1fbb.appspot.com",
  messagingSenderId: "748683996644",
  appId: "1:748683996644:web:d2a2765c770fc760b0ebf1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
