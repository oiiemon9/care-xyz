'use client';
import React, { useEffect, useState } from 'react';

import NavButtons from '../Buttons/NavButtons';
import Link from 'next/link';
import Logo from '../Logo/Logo';

export default function NavBar() {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'about', 'services', 'testimonials'];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="bg-primary sticky top-0 z-50">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-secondary lg:hidden mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {sections.map((sec) => (
                <li key={sec}>
                  <Link
                    href={`/#${sec}`}
                    className={` capitalize transition-colors  ${
                      activeSection === sec
                        ? ' font-bold border-b-2 border-blue-600'
                        : ' hover:text-blue-500'
                    }`}
                  >
                    {sec}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            {sections.map((sec) => (
              <li key={sec}>
                <Link
                  href={`/#${sec}`}
                  className={` capitalize transition-colors ${
                    activeSection === sec ? ' bg-secondary' : ' '
                  }`}
                >
                  {sec}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <NavButtons></NavButtons>
      </div>
    </div>
  );
}
