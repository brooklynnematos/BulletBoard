import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbqvGSfnwUTvSKAztCUEypKJSFAsS4H_g",
  authDomain: "bulletboard-409f3.firebaseapp.com",
  projectId: "bulletboard-409f3",
  storageBucket: "bulletboard-409f3.firebasestorage.app",
  messagingSenderId: "1039491018490",
  appId: "1:1039491018490:web:8db0134da06d888f6f6343",
  measurementId: "G-EVHD4NX87D"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

