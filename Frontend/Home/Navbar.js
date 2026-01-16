'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '@/components/ui/resizable-navbar';
import { IconHome, IconInfoCircle, IconSettings, IconArticle, IconKey, IconUser } from '@tabler/icons-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const navLinks = [
    { name: 'Home', link: '/', icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'About', link: '/about', icon: <IconInfoCircle className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'Services', link: '/services', icon: <IconSettings className="h-4 w-4 text-neutral-500 dark:text-white" /> },
    { name: 'Blog', link: '/blog', icon: <IconArticle className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  ];

  const username = user?.email?.split('@')[0];
  const displayName = username ? username.charAt(0).toUpperCase() + username.slice(1) : 'User';

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  const menuItems = navLinks.map(link => ({
    name: link.name,
    link: link.link
  }));

  return (
    <div className="relative w-full">
      <AceternityNavbar>
        <NavBody>
          <div className="hidden lg:flex w-full justify-between items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="text-2xl font-black flex items-center gap-2 mr-4 tracking-tighter">
                <span className="text-white">GYM</span>
                <span className="text-[#FF4F5A]">LOGIX</span>
              </Link>
            </motion.div>


            <div className="absolute left-1/2 transform -translate-x-1/2">
              <NavItems items={menuItems} />
            </div>

            <div className="flex gap-4 items-center ml-auto">
              {user ? (
                <>
                  <span className="text-sm font-medium text-white hidden lg:block">
                    {displayName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-5 py-2 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/login')}
                    className="px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white border border-white/20 hover:border-[#FF4F5A]/50 rounded-full transition-all"
                  >
                    Login
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push('/signup')}
                    className="px-6 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-[#FF4F5A] rounded-full shadow-lg shadow-red-900/20 active:scale-95 transition-all"
                  >
                    Signup
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </NavBody>

        <MobileNav visible={true} className="lg:hidden">
          <MobileNavHeader>
            <Link href="/" className="text-2xl font-bold text-[#FF4F5A]">
              GymLogix
            </Link>
            <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="text-white" />
          </MobileNavHeader>
          <MobileNavMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)}>
            <div className="flex flex-col gap-4 w-full">
              {navLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.link}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-medium hover:text-[#FF4F5A] transition-colors ${pathname === link.link ? 'text-[#FF4F5A]' : 'text-neutral-600 dark:text-neutral-300'}`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-2"></div>
              {user ? (
                <>
                  <span className="text-sm font-medium text-neutral-700 dark:text-white mb-2">
                    Welcome, {displayName}
                  </span>
                  <button
                    onClick={() => { handleLogout(); setMenuOpen(false); }}
                    className="w-full px-4 py-2 text-sm font-medium text-center text-black bg-white border border-neutral-200 rounded-full hover:bg-neutral-100 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-2 w-full">
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="w-full px-4 py-2 text-sm font-medium text-center text-neutral-700 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                    Login
                  </Link>
                  <Link href="/signup" onClick={() => setMenuOpen(false)} className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity">
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div >
  );
}
