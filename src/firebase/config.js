
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMCszc8G-jq1VC-SMGftYNpGIG14PdEA4",
  authDomain: "gymlogix-1010.firebaseapp.com",
  projectId: "gymlogix-1010",
  storageBucket: "gymlogix-1010.firebasestorage.app",
  messagingSenderId: "651656070759",
  appId: "1:651656070759:web:442400bcabab65d180b6c2",
  measurementId: "G-9EGCYF0SSE"
};


const app = initializeApp(firebaseConfig);

export const googleProvider = new GoogleAuthProvider();

export const auth = getAuth(app);
