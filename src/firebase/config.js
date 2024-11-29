// firebase/config.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import auth from "../firebase/config";

// Konfigurasi Firebase
export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inisialisasi Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Inisialisasi Firestore menggunakan firebase_app
const db = getFirestore(firebase_app);

// Mengekspor objek default yang berisi db dan firebase_app
export { db, firebase_app, auth };
