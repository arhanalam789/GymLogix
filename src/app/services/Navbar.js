'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/config';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
  ];

  // Extract username from email and capitalize first letter
  const username = user?.email?.split('@')[0];
  const displayName = username ? username.charAt(0).toUpperCase() + username.slice(1) : 'User';

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className="bg-black text-white px-4 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">

        <Link href="/" className="text-2xl font-bold">
          GymLogix
        </Link>

        <div className="hidden sm:flex items-center gap-10">
          <ul className="flex space-x-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`hover:text-[#FF4F5A] ${
                    pathname === link.path ? 'text-[#FF4F5A] font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-3 items-center">
            {user ? (
              <>
                <span className="text-sm">Welcome, {displayName}</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 border border-white rounded-md text-center"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-6 py-2 border border-white rounded-md text-center"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2 bg-[#FF4F5A] text-white rounded-md text-center"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>

        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 px-2">
          <ul className="flex flex-col items-center space-y-4 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`hover:text-[#FF4F5A] ${
                    pathname === link.path ? 'text-[#FF4F5A] font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 items-center mt-4">
            {user ? (
              <>
                <span className="text-sm">Welcome, {displayName}</span>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 border border-white rounded-md text-center w-full"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-6 py-2 border border-white rounded-md text-center w-full"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="px-6 py-2 bg-[#FF4F5A] text-white rounded-md text-center w-full"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
