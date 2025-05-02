import { CardSpotlight } from "@/components/ui/card-spotlight";
import { SparklesIcon, RocketLaunchIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

export function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <CardSpotlight className="min-h-[320px] group bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#1a2433">
        <div className="relative z-20">
          <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <SparklesIcon className="w-6 h-6 text-blue-400 transition-colors" />
          </div>
          <div className="space-y-4">
            <p className="text-xl font-bold text-white">
              Smart Suggestions
            </p>
            <div className="text-neutral-200">
              <ul className="list-none mt-2 space-y-2">
                <Step title="AI-powered analysis" iconColor="text-blue-400" />
                <Step title="Meaningful improvements" iconColor="text-blue-400" />
                <Step title="Contribution optimization" iconColor="text-blue-400" />
                <Step title="Smart recommendations" iconColor="text-blue-400" />
              </ul>
            </div>
            <p className="text-neutral-300 text-sm">
              AI analyzes your repositories and suggests meaningful improvements to boost your contribution graph.
            </p>
          </div>
        </div>
      </CardSpotlight>

      <CardSpotlight className="min-h-[320px] group bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#1a2433">
        <div className="relative z-20">
          <div className="bg-green-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <RocketLaunchIcon className="w-6 h-6 text-green-400 transition-colors" />
          </div>
          <div className="space-y-3 md:space-y-4">
            <p className="text-lg md:text-xl font-bold text-white">
              Automated Updates
            </p>
            <div className="text-neutral-200">
              <ul className="list-none mt-2 space-y-1.5 md:space-y-2">
                <Step title="One-click apply" iconColor="text-green-400" />
                <Step title="Automated commits" iconColor="text-green-400" />
                <Step title="Pull request handling" iconColor="text-green-400" />
                <Step title="Version control" iconColor="text-green-400" />
              </ul>
            </div>
            <p className="text-neutral-300 text-xs md:text-sm">
              One-click apply for suggested changes. CommitPilot handles the commits and pull requests.
            </p>
          </div>
        </div>
      </CardSpotlight>

      <CardSpotlight className="min-h-[320px] group bg-gradient-to-br from-[#0d1117] to-[#1a2433]" color="#1a2433">
        <div className="relative z-20">
          <div className="bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <CodeBracketIcon className="w-6 h-6 text-purple-400 transition-colors" />
          </div>
          <div className="space-y-3 md:space-y-4">
            <p className="text-lg md:text-xl font-bold text-white">
              Code Quality
            </p>
            <div className="text-neutral-200">
              <ul className="list-none mt-2 space-y-1.5 md:space-y-2">
                <Step title="Best practices" iconColor="text-purple-400" />
                <Step title="Code analysis" iconColor="text-purple-400" />
                <Step title="Quality assurance" iconColor="text-purple-400" />
                <Step title="Smart validation" iconColor="text-purple-400" />
              </ul>
            </div>
            <p className="text-neutral-300 text-xs md:text-sm">
              Ensures high-quality contributions with smart code analysis and best practices.
            </p>
          </div>
        </div>
      </CardSpotlight>
    </div>
  );
}

const Step = ({ title, iconColor }: { title: string; iconColor: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon className={iconColor} />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = ({ className = "text-blue-500" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`h-4 w-4 mt-1 shrink-0 ${className}`}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
}; 