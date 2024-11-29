// src/firebase/auth/signin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { firebase_app } from "../config";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
  let result = null;
  let error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
