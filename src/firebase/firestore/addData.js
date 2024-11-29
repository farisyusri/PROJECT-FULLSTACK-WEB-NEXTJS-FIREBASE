// firebase/firestore/addData.js
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config"; // Mengimpor db yang sudah diinisialisasi

export default async function addData(collection, id, data) {
  let result = null;
  let error = null;

  try {
    // Menambahkan atau memperbarui dokumen di Firestore
    result = await setDoc(doc(db, collection, id), data, { merge: true });
  } catch (e) {
    error = e.message; // Menangani error jika ada
  }

  return { result, error };
}
