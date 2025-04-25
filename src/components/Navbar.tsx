'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#0d1117] text-white border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold flex items-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"/>
              </svg>
              CommitPilot
            </Link>
            <div className="hidden md:flex ml-8 space-x-6">
              <Link href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2">
                Dashboard
              </Link>
              <Link href="/repositories" className="text-gray-300 hover:text-white px-3 py-2">
                Repositories
              </Link>
              <Link href="/suggestions" className="text-gray-300 hover:text-white px-3 py-2">
                Suggestions
              </Link>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:block bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
              Sign in with GitHub
            </button>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              <Link href="/dashboard" className="text-gray-300 hover:text-white px-3 py-2">
                Dashboard
              </Link>
              <Link href="/repositories" className="text-gray-300 hover:text-white px-3 py-2">
                Repositories
              </Link>
              <Link href="/suggestions" className="text-gray-300 hover:text-white px-3 py-2">
                Suggestions
              </Link>
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium mt-4">
                Sign in with GitHub
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 