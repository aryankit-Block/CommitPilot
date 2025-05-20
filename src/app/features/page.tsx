"use client";

import { motion } from "framer-motion";
import { SparklesIcon, RocketLaunchIcon, CodeBracketIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { VideoAnimation } from "@/components/ui/video-animation";
import { CrystalBackground } from "@/components/ui/crystal-background";
import React from "react";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0d1117] py-20 px-4 md:px-8 overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto text-center mb-24"
      >
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-block"
        >
          <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 inline-block">
            Features
          </span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Everything you need to
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text"> boost productivity</span>
        </h1>
        <p className="text-neutral-300 text-lg md:text-xl max-w-3xl mx-auto">
          Discover how CommitPilot revolutionizes your development workflow with AI-powered features and smart automation.
        </p>
      </motion.div>

      {/* Main Features Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Video Feature */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <VideoAnimation
              videoSrc="/videos/original-f701b76a3cd24793f95df3a4628098f9.mp4"
              title="AI-Powered Development"
              description="Watch how our AI analyzes your code and suggests improvements in real-time."
              className="h-full"
            />
          </motion.div>

          {/* Right Column - Two Features */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FeatureCard
                icon={<RocketLaunchIcon className="w-6 h-6" />}
                title="Automated Workflows"
                description="Streamline your development process with automated commits and pull request handling."
                color="green"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FeatureCard
                icon={<CodeBracketIcon className="w-6 h-6" />}
                title="Code Quality"
                description="Ensure high-quality code with automated testing and best practices enforcement."
                color="purple"
              />
            </motion.div>
          </div>

          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2"
          >
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ChartBarIcon className="w-6 h-6" />}
                title="Analytics Dashboard"
                description="Get detailed insights into your development patterns and productivity."
                color="blue"
              />
              <FeatureCard
                icon={<SparklesIcon className="w-6 h-6" />}
                title="Smart Suggestions"
                description="Receive intelligent recommendations to improve your code quality."
                color="green"
              />
              <FeatureCard
                icon={<RocketLaunchIcon className="w-6 h-6" />}
                title="Quick Actions"
                description="Execute common development tasks with a single click."
                color="purple"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  color 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  color: 'blue' | 'green' | 'purple' 
}) => {
  const colorClasses = {
    blue: 'bg-blue-500/10 text-blue-400',
    green: 'bg-green-500/10 text-green-400',
    purple: 'bg-purple-500/10 text-purple-400',
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative p-6 rounded-xl bg-[#1a2433] border border-neutral-800 overflow-hidden"
    >
      {/* Crystal Background */}
      <CrystalBackground color={color} isHovered={isHovered} />

      {/* Content */}
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${colorClasses[color]}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-300">{description}</p>
      </div>
    </motion.div>
  );
}; 