// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdUpKEvC41SsTP3wBcO38bkTtCz8hLnIE",
  authDomain: "tiendaflash-10559.firebaseapp.com",
  projectId: "tiendaflash-10559",
  storageBucket: "tiendaflash-10559.appspot.com",
  messagingSenderId: "390496687507",
  appId: "1:390496687507:web:ea8cbf17cc71fffe480466"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);