"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaGithub, FaArrowRight, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from 'react';

const Footer = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const footerLinks = {
    Products: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Contact", href: "/contact" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Blog", href: "/blog" },
    ],
  };

  const socialLinks = [
    { Icon: FaTwitter, href: "https://x.com/Aryankit_9CR?t=Ef2_cHkIoJbkrHw9Wity4Q&s=08" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/aryankit" },
    { Icon: FaGithub, href: "https://github.com/aryankit-Block" },
    { Icon: FaInstagram, href: "https://instagram.com/Aryankit.block" },
  ];

  if (!isMounted) {
    return null; // or a simple loading state
  }

  return (
    <footer className="relative bg-[#1a1c2e] text-gray-100 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-[#312e81]/20 via-transparent to-[#312e81]/20" />
        <motion.div
          initial={{ opacity: 0.1 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -inset-[10px] backdrop-blur-3xl"
        >
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#8b5cf6] rounded-full mix-blend-multiply filter blur-xl opacity-30" />
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-[#6366f1] rounded-full mix-blend-multiply filter blur-xl opacity-30" />
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] bg-clip-text text-transparent">
              CommitPilot
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Manage your commits seamlessly and take control of your development workflow with AI-powered assistance.
            </p>
            <motion.a
              href="/get-started"
              className="inline-flex items-center gap-2 text-[#818cf8] hover:text-[#c4b5fd] transition-colors duration-300 group text-sm"
              whileHover={{ x: 4 }}
            >
              Start your journey
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-[#c4b5fd]">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-[#818cf8] transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="h-[1px] w-0 bg-[#818cf8] group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-[#c4b5fd]">Connect With Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(139, 92, 246, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 hover:text-[#818cf8] transition-all duration-300 p-2 rounded-lg"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative mt-12 pt-8 border-t border-[#312e81]/30 text-center"
        >
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} CommitPilot. All rights reserved.
            <span className="block sm:inline sm:ml-2">Built with ❤️ for developers</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 