import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter mb-6">
              GYM<span className="text-[#FF4F5A]">LOGIX</span>
            </h2>
            <p className="text-neutral-500 font-medium leading-relaxed">
              The ultimate destination for those who demand excellence in their training, nutrition, and mindset.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FF4F5A] mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="text-neutral-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-neutral-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/blog" className="text-neutral-400 hover:text-white transition-colors">Expert Articles</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FF4F5A] mb-6">Connect</h3>
            <ul className="space-y-4 font-medium">
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-neutral-600 uppercase">Email</span>
                <a href="mailto:arhan@GymLogix.com" className="text-neutral-400 hover:text-white transition-colors">arhan@GymLogix.com</a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-[10px] text-neutral-600 uppercase">Direct</span>
                <span className="text-neutral-400">+91 96857 93878</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-[#FF4F5A] mb-6">Social</h3>
            <div className="flex space-x-4">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaLinkedinIn />, href: "#" },
                { icon: <FaInstagram />, href: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#FF4F5A] hover:text-white hover:border-[#FF4F5A] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600">
          <p>© 2026 GYMLOGIX. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
