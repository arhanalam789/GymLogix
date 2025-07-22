'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebase/config";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/lg.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 bg-white/10 dark:bg-gray-900/10 p-8 rounded-2xl shadow-2xl w-full max-w-md backdrop-blur-md">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-8 tracking-wide">
          Log In
        </h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-800 dark:text-gray-200 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-800 dark:text-gray-200 mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="mt-4 text-center text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Log In
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 px-4 mt-4 bg-white text-gray-800 font-semibold border border-gray-300 rounded-lg hover:bg-gray-100 flex items-center justify-center"
        >
          <img src="/google.jpeg" alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        <p className="mt-4 text-center text-gray-800 dark:text-gray-300 text-sm">
          Don’t have an account?
          <a href="/signup" className="text-blue-700 hover:underline dark:text-blue-400 ml-1">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
