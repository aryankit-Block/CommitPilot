'use client';

import { motion } from "motion/react";
import Navbar from '@/components/Navbar';
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ArrowRightIcon, BeakerIcon, CommandLineIcon, CpuChipIcon, LightBulbIcon } from '@heroicons/react/24/outline';

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center w-full flex-col px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text relative z-20">
                Revolutionize Your GitHub Contributions
              </h1>
              <p className="text-xl text-gray-400 mb-8 relative z-20">
                Discover how CommitPilot enhances your development workflow with AI-powered insights and automated improvements.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <CardSpotlight className="p-8 bg-[#0d1117]" color="#1a2433">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <LightBulbIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Smart AI Analysis</h3>
                <p className="text-gray-400">
                  Our advanced AI analyzes your coding patterns and repository history to provide personalized suggestions for improvements and optimizations.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="p-8 bg-[#0d1117]" color="#1a2433">
            <div className="flex items-start space-x-4">
              <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Automated Workflow</h3>
                <p className="text-gray-400">
                  Streamline your development process with automated commits, pull requests, and code quality checks that maintain high standards.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="p-8 bg-[#0d1117]" color="#1a2433">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <CommandLineIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Developer-First</h3>
                <p className="text-gray-400">
                  Built by developers for developers, with powerful CLI tools and integrations that fit seamlessly into your workflow.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="p-8 bg-[#0d1117]" color="#1a2433">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                <BeakerIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
                <p className="text-gray-400">
                  Maintain high code quality with automated testing, linting, and best practice enforcement across your projects.
                </p>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How CommitPilot Works
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">1. Connect Your GitHub</h3>
                <p className="text-gray-400">
                  Simply connect your GitHub account and select the repositories you want to enhance. CommitPilot securely analyzes your codebase and contribution patterns.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-800 rounded-lg p-6">
                {/* Placeholder for illustration/screenshot */}
                <div className="aspect-video bg-gray-700 rounded-md"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">2. Receive Smart Suggestions</h3>
                <p className="text-gray-400">
                  Our AI analyzes your code and provides intelligent suggestions for improvements, optimizations, and best practices tailored to your projects.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-800 rounded-lg p-6">
                {/* Placeholder for illustration/screenshot */}
                <div className="aspect-video bg-gray-700 rounded-md"></div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4">3. Automated Improvements</h3>
                <p className="text-gray-400">
                  With one click, apply suggested changes and let CommitPilot handle the commits, pull requests, and quality checks automatically.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gray-800 rounded-lg p-6">
                {/* Placeholder for illustration/screenshot */}
                <div className="aspect-video bg-gray-700 rounded-md"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your GitHub Activity?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join thousands of developers who are already using CommitPilot to enhance their GitHub contributions.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium inline-flex items-center">
            Get Started Now
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </main>
  );
} 