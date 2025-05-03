'use client';

import { motion } from "framer-motion";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { ArrowRightIcon, BeakerIcon, CommandLineIcon, CpuChipIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/moving-border';

export default function LearnMore() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0d1117] to-[#1a2433] text-white">
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 text-transparent bg-clip-text relative z-20">
                Revolutionize Your GitHub Contributions
              </h1>
              <p className="text-xl text-gray-300 mb-8 relative z-20">
                Discover how CommitPilot enhances your development workflow with AI-powered insights and automated improvements.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/20 via-blue-500/10 to-transparent" />
      </div>

      {/* Features Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8">
          <CardSpotlight className="p-8 bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#2a3444">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <LightBulbIcon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">Smart AI Analysis</h3>
                <p className="text-gray-300">
                  Our advanced AI analyzes your coding patterns and repository history to provide personalized suggestions for improvements and optimizations.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="p-8 bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#2a3444">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <CpuChipIcon className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">Automated Workflow</h3>
                <p className="text-gray-300">
                  Streamline your development process with automated commits, pull requests, and code quality checks that maintain high standards.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="p-8 bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#2a3444">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <CommandLineIcon className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Developer-First</h3>
                <p className="text-gray-300">
                  Built by developers for developers, with powerful CLI tools and integrations that fit seamlessly into your workflow.
                </p>
              </div>
            </div>
          </CardSpotlight>

          <CardSpotlight className="p-8 bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#2a3444">
            <div className="flex items-start space-x-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 w-12 h-12 rounded-lg flex items-center justify-center">
                <BeakerIcon className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-orange-400">Quality Assurance</h3>
                <p className="text-gray-300">
                  Maintain high code quality with automated testing, linting, and best practice enforcement across your projects.
                </p>
              </div>
            </div>
          </CardSpotlight>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="container mx-auto px-4 py-20 border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            How CommitPilot Works
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-blue-400">1. Connect Your GitHub</h3>
                <p className="text-gray-300">
                  Simply connect your GitHub account and select the repositories you want to enhance. CommitPilot securely analyzes your codebase and contribution patterns.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700/50 overflow-hidden">
                <div className="aspect-video w-full h-full relative">
                  <video 
                    className="absolute inset-0 w-full h-full rounded-md object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source 
                      src="/videos/original-f701b76a3cd24793f95df3a4628098f9.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-purple-400">2. Receive Smart Suggestions</h3>
                <p className="text-gray-300">
                  Our AI analyzes your code and provides intelligent suggestions for improvements, optimizations, and best practices tailored to your projects.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700/50 overflow-hidden">
                <div className="aspect-video w-full h-full relative">
                  <video 
                    className="absolute inset-0 w-full h-full rounded-md object-cover"
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  >
                    <source 
                      src="/videos/Receive Smart Suggestions.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-purple-500/10 mix-blend-overlay rounded-md"></div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">3. Automated Improvements</h3>
                <p className="text-gray-300">
                  With one click, apply suggested changes and let CommitPilot handle the commits, pull requests, and quality checks automatically.
                </p>
              </div>
              <div className="w-full md:w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700/50 overflow-hidden">
                <div className="aspect-video w-full h-full relative">
                  <video 
                    className="absolute inset-0 w-full h-full rounded-md object-cover"
                    autoPlay 
                    loop
                    muted 
                    playsInline
                    onTimeUpdate={(e) => {
                      if (e.currentTarget.currentTime >= 11) {
                        e.currentTarget.currentTime = 0;
                      }
                    }}
                  >
                    <source 
                      src="/videos/Automated Improvements.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                  <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 border-t border-gray-700/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-transparent bg-clip-text drop-shadow-lg">
            Ready to Transform Your GitHub Activity?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of developers who are already using CommitPilot to enhance their GitHub contributions.
          </p>
          <Button
            borderRadius="0.5rem"
            className="border-[#8b5cf6]/50 hover:border-[#8b5cf6]/70 px-8 py-3 font-medium bg-[#1a2433] hover:bg-[#8b5cf6]/10 cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
            containerClassName="w-auto h-[50px] mt-4"
            duration={4000}
            onClick={() => window.open('https://github.com/Aryankit9CR/CommitPilot', '_blank')}
          >
            View on GitHub
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </main>
  );
} 