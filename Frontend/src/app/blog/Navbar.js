'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      <AceternityNavbar className="top-4">
        <NavBody>
          <div className="hidden lg:flex w-full justify-between items-center gap-4">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2 mr-4">
              <span className="text-white dark:text-black">GymLogix</span>
            </Link>

            <NavItems items={menuItems} />

            <div className="flex gap-2 items-center ml-auto">
              {user ? (
                <>
                  <span className="text-sm font-medium text-neutral-700 dark:text-white hidden lg:block">
                    {displayName}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="px-5 py-2.5 text-base font-medium text-white hover:text-neutral-300 transition-colors">
                    Login
                  </Link>
                  <Link href="/signup" className="px-5 py-2.5 text-base font-medium text-white bg-black dark:bg-black dark:text-white dark:border-white border border-transparent rounded-full hover:opacity-90 transition-opacity">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </NavBody>

        <MobileNav visible={true} className="lg:hidden">
          <MobileNavHeader>
            <Link href="/" className="text-2xl font-bold text-white dark:text-black">
              GymLogix
            </Link>
            <MobileNavToggle isOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)} />
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
                  <Link href="/login" onClick={() => setMenuOpen(false)} className="w-full">
                    <button className="w-full px-4 py-2 text-sm font-medium text-center text-neutral-700 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors">
                      Login
                    </button>
                  </Link>
                  <Link href="/signup" onClick={() => setMenuOpen(false)} className="w-full">
                    <button className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-black dark:bg-white dark:text-black rounded-full hover:opacity-90 transition-opacity">
                      Signup
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
