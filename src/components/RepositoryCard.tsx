'use client';

import { StarIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { CardSpotlight } from '@/components/ui/card-spotlight';

interface RepositoryCardProps {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  lastUpdated: string;
}

const RepositoryCard = ({
  name,
  description,
  stars,
  forks,
  language,
  lastUpdated,
}: RepositoryCardProps) => {
  return (
    <CardSpotlight className="w-full">
      <div className="flex justify-between items-start relative z-20">
        <h3 className="text-blue-400 font-semibold text-lg">{name}</h3>
        <button className="border border-gray-600 rounded-md px-3 py-1 text-sm hover:bg-gray-700">
          Select
        </button>
      </div>
      
      <p className="text-gray-400 mt-2 text-sm relative z-20">{description}</p>
      
      <div className="flex items-center space-x-4 mt-4 text-sm text-gray-400 relative z-20">
        <div className="flex items-center">
          <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
          {language}
        </div>
        <div className="flex items-center">
          <StarIcon className="w-4 h-4 mr-1" />
          {stars}
        </div>
        <div className="flex items-center">
          <CodeBracketIcon className="w-4 h-4 mr-1" />
          {forks}
        </div>
        <div className="text-gray-500">
          Updated {lastUpdated}
        </div>
      </div>
    </CardSpotlight>
  );
};

export default RepositoryCard; 