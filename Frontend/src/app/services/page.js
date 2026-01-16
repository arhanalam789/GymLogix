'use client';

import { useAuth } from '@/app/context/AuthContext';
import LoggedInPage from './LoggedInPage';
import GuestPage from './GuestPage';
import Navbar from '../../../Home/Navbar';
import Footer from './Footer';

export default function ServicesPage() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main className="pt-24 min-h-screen bg-black">
        {user ? <LoggedInPage /> : <GuestPage />}
      </main>
      <Footer />
    </>
  );
}
