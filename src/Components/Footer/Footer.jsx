import Link from 'next/link';
import React from 'react';
import Logo from '../Logo/Logo';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <Logo></Logo>
            <p className="text-blue-100 text-sm leading-relaxed mt-5">
              Reliable and trusted care services for children, elderly, and
              family members. Making caregiving easy, secure, and accessible for
              everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="/" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link
                  href="/service/6949407e44e837dfdca8f0cc"
                  className="hover:text-white transition"
                >
                  Baby Care
                </Link>
              </li>
              <li>
                <Link
                  href="/service/6949407e44e837dfdca8f0cd"
                  className="hover:text-white transition"
                >
                  Elderly Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/6949407e44e837dfdca8f0ce"
                  className="hover:text-white transition"
                >
                  Sick People Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-blue-100 text-sm">
              <li>Email: support@Care.io</li>
              <li>Phone: +880 1234 567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-blue-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Care.io. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
