"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

// Throttle function to limit how often the scroll handler fires
const throttle = <T extends (...args: any[]) => void>(func: T, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    const isScrollingUp = prevScrollPos > currentScrollPos;
    const isAtTop = currentScrollPos < 10;
    
    // Remove the scroll delta check to make it more responsive
    requestAnimationFrame(() => {
      setVisible(isScrollingUp || isAtTop);
    });
    
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos, setVisible, setPrevScrollPos]);

  useEffect(() => {
    const throttledHandleScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  const menuItems = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Features',
      url: '/features'
    },
    {
      text: 'Learn',
      url: '/learn'
    },
    {
      text: 'Dashboard',
      url: '/dashboard'
    }
  ];

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        backdrop-blur-sm bg-black/30 border-b border-gray-800/50
        transform transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${visible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-full opacity-0 scale-95'}
      `}
      style={{
        transitionProperty: 'transform, opacity, scale',
        willChange: 'transform, opacity, scale',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        transformOrigin: 'top center'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-white relative">
              {/* Special styling for C and P */}
              <span className="font-black" style={{ fontFamily: 'Arial Black' }}>C</span>
              ommit
              <div className="relative inline-block">
                <div className="absolute -top-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400"></div>
                <span className="font-black" style={{ fontFamily: 'Arial Black' }}>P</span>
                ilot
              </div>
            </span>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.url}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Sign in Button - Right aligned */}
          <div className="hidden md:block">
            <button 
              className="bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5] text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer hover:cursor-pointer focus:cursor-pointer"
            >
              Sign in with GitHub
              <FaGithub className="w-5 h-5 ml-2" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden ml-auto text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.text}
                  href={item.url}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                >
                  {item.text}
                </Link>
              ))}
              <button 
                className="w-full mt-4 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5] text-white px-6 py-2 rounded-lg font-medium flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer hover:cursor-pointer focus:cursor-pointer"
              >
                Sign in with GitHub
                <FaGithub className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 