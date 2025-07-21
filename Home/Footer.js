import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p>Email: <a href="arhan@GymLogix..com" className="hover:underline">arhan@GymLogix.com</a></p>
          <p>Phone: 9685793878</p>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-400">
        © 2025 GymLogix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
