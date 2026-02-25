'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white shadow-sm'}`} role="navigation" aria-label="Main">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          aria-label="Al Gharb Home"
        >
          <Image src="/algharbLogo.jpeg" className="h-20 w-auto" alt="Al Gharb Logo" width={80} height={80} sizes="80px" priority />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-600 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        {isOpen && <div className="fixed inset-0 bg-black/30 z-40 md:hidden" onClick={toggleNavbar} aria-hidden="true" />}
        <div className="hidden md:flex items-center gap-4" id="navbar-default">
          <ul className="font-bold flex flex-row text-lg items-center space-x-8 mx-4 lg:mx-8">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 rounded ${isActive('/') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 px-3 rounded ${isActive('/services') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
                aria-current={isActive('/services') ? 'page' : undefined}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 rounded ${isActive('/about') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 rounded ${isActive('/contact') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`md:hidden absolute top-20 left-0 right-0 origin-top transform transition-transform duration-200 bg-white border-b border-gray-100 shadow-lg z-50 ${isOpen ? 'scale-y-100' : 'scale-y-0 pointer-events-none'}`}
      >
        <ul className="font-bold flex flex-col text-lg p-4 space-y-2">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 rounded ${isActive('/') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
              aria-current={isActive('/') ? 'page' : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 rounded ${isActive('/services') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
              aria-current={isActive('/services') ? 'page' : undefined}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 rounded ${isActive('/about') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
              aria-current={isActive('/about') ? 'page' : undefined}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-3 rounded ${isActive('/contact') ? 'text-customBlue' : 'text-gray-900'} hover:text-customBlue`}
              aria-current={isActive('/contact') ? 'page' : undefined}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
