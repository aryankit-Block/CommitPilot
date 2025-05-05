'use client';

import { FeatureCards } from '@/components/ui/feature-cards';
import { CounterAnimation } from '@/components/ui/counter-animation';
import { Cover } from '@/components/ui/cover';
import { Button } from '@/components/ui/moving-border';
import { useRouter } from 'next/navigation';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-28">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4 md:mb-6">
                <span className="bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] text-transparent bg-clip-text">
                  Let AI Power Your <Cover className="bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] text-transparent bg-clip-text">GitHub Contributions</Cover>
                </span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-xl text-gray-300 mb-4 md:mb-8">
                CommitPilot helps you maintain consistent GitHub activity with AI-powered suggestions and automated improvements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 md:gap-10 justify-center"
            >
              <button className="bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] hover:from-[#9333ea] hover:to-[#4f46e5] text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-purple-500/25 cursor-pointer hover:cursor-pointer focus:cursor-pointer">
                Sign in with GitHub
                <FaGithub className="w-5 h-5 ml-2" />
              </button>
              <Button
                borderRadius="0.5rem"
                className="border-[#8b5cf6]/50 hover:border-[#8b5cf6]/70 px-8 py-3 font-medium bg-[#0d1117] hover:bg-[#8b5cf6]/10 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
                containerClassName="w-auto h-[50px]"
                duration={4000}
                onClick={() => router.push('/learn')}
              >
                Learn more
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#312e81]/20 via-transparent to-transparent" 
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
