'use client';

import { FeatureCards } from '@/components/ui/feature-cards';
import { CounterAnimation } from '@/components/ui/counter-animation';
import { Cover } from '@/components/ui/cover';
import { Button } from '@/components/ui/moving-border';
import { useRouter } from 'next/navigation';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d1117] to-[#1a2433] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-transparent bg-clip-text relative z-20">
                Revolutionize Your GitHub Contributions
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-gray-300 mb-8 relative z-20">
                Discover how CommitPilot enhances your development workflow with AI-powered insights and automated improvements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center space-x-6 mb-8"
            >
              <a href="https://www.linkedin.com/in/aryankit" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/aryankit-Block" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" />
              </a>
              <a href="https://x.com/Aryankit_9CR?t=Ef2_cHkIoJbkrHw9Wity4Q&s=08" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/Aryankit.block" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/20 via-blue-500/10 to-transparent" 
        />
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="container mx-auto px-4 py-24 md:py-32"
      >
        <FeatureCards />
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="border-t border-[#312e81]/30"
      >
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-3 gap-10 md:gap-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <CounterAnimation 
                end={1000} 
                duration={2000} 
                suffix="+" 
                className="text-4xl font-bold text-[#818cf8] mb-2"
              />
              <p className="text-gray-300">Daily Commits Generated</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CounterAnimation 
                end={500} 
                duration={2000} 
                suffix="+" 
                className="text-4xl font-bold text-[#c4b5fd] mb-2"
              />
              <p className="text-gray-300">Active Users</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <CounterAnimation 
                end={98} 
                duration={1000} 
                suffix="%" 
                className="text-4xl font-bold text-[#8b5cf6] mb-2"
              />
              <p className="text-gray-300">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
