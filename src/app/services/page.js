'use client';

import { useAuth } from '@/app/context/AuthContext';
import LoggedInPage from './LoggedInPage';
import GuestPage from './GuestPage';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ServicesPage() {
  const { user } = useAuth();

  return (
    <>
        <Navbar />
        {user ? <LoggedInPage /> : <GuestPage />}
        <Footer />
    </>
  );
}
