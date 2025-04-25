import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface SuccessAnimationProps {
  message: string;
}

export default function SuccessAnimation({ message }: SuccessAnimationProps) {
  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg flex items-center space-x-2 animate-fade-in">
      <CheckCircleIcon className="w-6 h-6" />
      <span>{message}</span>
    </div>
  );
} 