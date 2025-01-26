// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb8iPorwgdgu7Xh3XBxpDJ0jDMbbWSWd0",
  authDomain: "abueva-net102-project.firebaseapp.com",
  projectId: "abueva-net102-project",
  storageBucket: "abueva-net102-project.firebasestorage.app",
  messagingSenderId: "454043282684",
  appId: "1:454043282684:web:5e2b4af9461154486ffb79",
  measurementId: "G-6TPFP4VRR6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};