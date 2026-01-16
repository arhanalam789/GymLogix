'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SignIn() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-full flex bg-black overflow-hidden select-none">
      {/* Left Side - Image Background */}
      <div className="hidden lg:flex w-1/2 relative items-center justify-center overflow-hidden border-r border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{ backgroundImage: "url('/login_page.jpeg')" }}
        />
        <div className="absolute bottom-10 left-10 z-20 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h2 className="text-5xl font-bold text-white mb-3 leading-tight tracking-tighter">
              Elevate Your <span className="text-[#FF4F5A]">Game.</span>
            </h2>
            <p className="text-neutral-400 text-lg font-medium leading-relaxed">
              Log in to track your progress and smash your goals with GymLogix.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black px-6 md:px-12 lg:px-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,79,90,0.05),transparent_70%)] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[400px] z-10"
        >
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">Sign In</h2>
            <p className="text-neutral-500 text-lg">
              Welcome back to GymLogix
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-neutral-300 uppercase tracking-wider" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#FF4F5A] focus:border-transparent text-white transition-all shadow-inner"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-neutral-300 uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="flex h-12 w-full rounded-lg border border-neutral-800 bg-neutral-900/40 px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#FF4F5A] focus:border-transparent text-white transition-all shadow-inner"
                required
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-3 text-xs font-semibold text-red-500 bg-red-500/5 border border-red-500/10 rounded-lg text-center"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF4F5A] hover:bg-[#ff6b74] text-white font-bold h-12 rounded-lg transform active:scale-[0.98] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-2 shadow-lg shadow-red-900/20"
            >
              {loading ? "Signing in..." : "Sign In →"}
            </button>

            <div className="text-center mt-10">
              <p className="text-sm text-neutral-500">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push('/signup')}
                  className="font-bold text-white hover:text-[#FF4F5A] transition-colors focus:outline-none"
                >
                  Join Us
                </button>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
