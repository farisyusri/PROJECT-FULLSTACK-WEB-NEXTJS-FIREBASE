import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebase_app } from "../config";

const auth = getAuth(firebase_app);

export default async function signUp(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return { result: user, error: null }; // Kembalikan user jika berhasil
  } catch (error) {
    return { result: null, error: error.message }; // Kembalikan error jika gagal
  }
}
