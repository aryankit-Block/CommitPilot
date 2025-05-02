"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaRocket, FaGithub } from "react-icons/fa";
import { useEffect, useState } from 'react';

const PreFooterCTA = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // or a simple loading state
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1c2e] via-[#2d1b69] to-gray-900 py-16">
      {/* Animated Background Circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0"
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#8b5cf6] rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#6366f1] rounded-full blur-3xl opacity-40" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-white leading-tight"
            >
              Transform Your GitHub <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] font-extrabold">
                Contributions Today
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg"
            >
              Join thousands of developers who are leveraging AI to enhance their GitHub contributions and streamline their workflow.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/get-started"
                className="group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] rounded-lg overflow-hidden transition-all duration-300 hover:from-[#9333ea] hover:to-[#4f46e5] shadow-lg hover:shadow-purple-500/25"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -4 }}
                  className="relative z-10 flex items-center gap-2"
                >
                  Get Started
                  <FaRocket className="text-lg" />
                </motion.span>
              </Link>
              
              <Link 
                href="https://github.com/yourusername/commitpilot"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 font-medium text-white border-2 border-[#8b5cf6]/50 rounded-lg hover:bg-[#8b5cf6]/20 transition-all duration-300 hover:border-[#8b5cf6]/70"
              >
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: -4 }}
                  className="flex items-center gap-2"
                >
                  View on GitHub
                  <FaGithub className="text-lg" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "10K+", label: "Active Users" },
              { number: "1M+", label: "Commits Enhanced" },
              { number: "98%", label: "Satisfaction Rate" },
              { number: "24/7", label: "AI Support" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#312e81]/30 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-[#312e81]/40 transition-colors duration-300 border border-[#8b5cf6]/30 shadow-lg hover:shadow-purple-500/10"
              >
                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PreFooterCTA; 