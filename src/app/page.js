"use client";

import addData from "../firebase/firestore/addData";
import "./page.css";

export default function Home() {
  const handleForm = async () => {
    const data = {
      name: "Faris Rahman",
      house: "Somewhere",
    };

    const { result, error } = await addData("users", "user-id", data);

    if (error) {
      console.log("Error:", error);
      return;
    }

    console.log("Data berhasil ditambahkan:", result);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleForm}>Add Data</button>
    </div>
  );
}
