"use client";
import React from "react";
import signUp from "../../firebase/auth/signup";
import { useRouter } from "next/navigation";
import "./signup.css";

function Page() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  const handleForm = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(""); // Reset error sebelum mencoba signup

    const { result, error } = await signUp(email, password);

    setLoading(false); // Stop loading setelah proses selesai

    if (error) {
      setError(error); // Set error jika ada
      return;
    }

    // Jika berhasil, redirect ke halaman admin
    console.log(result);
    router.push("/admin");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">
          Start Your Journey! <br /> Sign up now
        </h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          {error && <p style={{ color: "red" }}>{error}</p>}{" "}
          {/* Tampilkan error jika ada */}
          <button type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
