'use client';

import Navbar from '@/components/Navbar';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { FeatureCards } from '@/components/ui/feature-cards';
import { CounterAnimation } from '@/components/ui/counter-animation';
import { Cover } from '@/components/ui/cover';
import { Button } from '@/components/ui/moving-border';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-[#0d1117] text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                Let AI Power Your <Cover className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">GitHub Contributions</Cover>
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-16">
              CommitPilot helps you maintain consistent GitHub activity with AI-powered suggestions and automated improvements.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center">
                Sign in with GitHub
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <Button
                borderRadius="0.375rem"
                className="border-gray-700 px-8 py-3 font-medium bg-[#0d1117] hover:bg-[#0d1117]/80 cursor-pointer"
                containerClassName="w-auto h-[50px]"
                duration={4000}
                onClick={() => router.push('/learn')}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/10 via-transparent to-transparent" />
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <FeatureCards />
      </div>

      {/* Stats Section */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <CounterAnimation 
                end={1000} 
                duration={2000} 
                suffix="+" 
                className="text-4xl font-bold text-green-400 mb-2"
              />
              <p className="text-gray-400">Daily Commits Generated</p>
            </div>
            <div>
              <CounterAnimation 
                end={500} 
                duration={2000} 
                suffix="+" 
                className="text-4xl font-bold text-blue-400 mb-2"
              />
              <p className="text-gray-400">Active Users</p>
            </div>
            <div>
              <CounterAnimation 
                end={98} 
                duration={1000} 
                suffix="%" 
                className="text-4xl font-bold text-purple-400 mb-2"
              />
              <p className="text-gray-400">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
