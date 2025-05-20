"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabaseClient";
import { useUser } from "@supabase/auth-helpers-react";
import dynamic from "next/dynamic";

const ReactECharts = dynamic(() => import("echarts-for-react"), { ssr: false });

const tools = [
  { icon: "bar_chart", label: "Analytics" },
  { icon: "smart_toy", label: "AI Tools" },
  { icon: "extension", label: "Integrations" },
];

const repositories = [
  { id: 1, name: "main-project", commits: 127, status: "active" },
  { id: 2, name: "feature-api", commits: 85, status: "active" },
  { id: 3, name: "ui-components", commits: 64, status: "inactive" },
];

const commitHistory = [
  {
    id: 1,
    message: "Refactored authentication module for better security",
    timestamp: "2025-05-09T10:23:45",
    type: "enhancement",
  },
  {
    id: 2,
    message: "Fixed critical bug in data processing pipeline",
    timestamp: "2025-05-08T16:45:12",
    type: "bugfix",
  },
  {
    id: 3,
    message: "Added new feature for automated commit suggestions",
    timestamp: "2025-05-07T09:12:30",
    type: "feature",
  },
];

const chartOption = {
  tooltip: { trigger: "axis" },
  grid: { left: "3%", right: "4%", bottom: "3%", top: "15%", containLabel: true },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
    axisLine: { lineStyle: { color: "#555" } },
    axisLabel: { color: "#aaa" },
  },
  yAxis: {
    type: "value",
    axisLine: { lineStyle: { color: "#555" } },
    axisLabel: { color: "#aaa" },
    splitLine: { lineStyle: { color: "#333" } },
  },
  series: [
    {
      name: "Contributions",
      type: "line",
      stack: "Total",
      data: [12, 19, 8, 23, 17],
      areaStyle: {
        color: {
          type: "linear",
          x: 0, y: 0, x2: 0, y2: 1,
          colorStops: [
            { offset: 0, color: "rgba(88, 216, 63, 0.7)" },
            { offset: 1, color: "rgba(88, 216, 63, 0.1)" },
          ],
        },
      },
      lineStyle: { width: 2, color: "#58d83f" },
      itemStyle: { color: "#58d83f" },
      symbol: "circle",
      symbolSize: 6,
    },
  ],
};

export default function DashboardPage() {
  const user = useUser();
  const router = useRouter();
  const [githubProfile, setGithubProfile] = useState<any>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [comingSoonLabel, setComingSoonLabel] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (user === null) {
      router.replace("/");
    }
  }, [user, router]);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await supabase.auth.getSession();
        const accessToken = data?.session?.provider_token;
        
        if (!accessToken) {
          setError("No GitHub access token found. Please reconnect your GitHub account.");
          return;
        }

        const res = await fetch("https://api.github.com/user", {
          headers: { 
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/vnd.github.v3+json'
          },
        });

        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
        }

        const profile = await res.json();
        setGithubProfile(profile);
      } catch (err) {
        console.error('Error fetching GitHub profile:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch GitHub profile');
      } finally {
        setIsLoading(false);
      }
    };

    if (user) fetchGitHubProfile();
  }, [user]);

  const handleToolClick = (label: string) => {
    setComingSoonLabel(label);
    setShowComingSoon(true);
    setTimeout(() => setShowComingSoon(false), 2000);
  };

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#181c2a] to-[#232946] text-white">
      {/* Sidebar */}
      <aside className="w-20 md:w-56 bg-[#232946] flex flex-col items-center py-8 shadow-lg relative">
        {/* Profile Icon or Avatar */}
        {isLoading ? (
          <div className="w-12 h-12 rounded-full bg-gray-700 animate-pulse mb-2" />
        ) : error ? (
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-2xl font-bold mb-2">
            !
          </div>
        ) : githubProfile ? (
          <img
            src={githubProfile.avatar_url}
            alt={githubProfile.login}
            className="w-12 h-12 rounded-full mb-2 border-2 border-purple-500 shadow-lg"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-2xl font-bold mb-2">
            M
          </div>
        )}
        
        {error ? (
          <div className="mb-8 text-center">
            <div className="text-red-400 text-sm">{error}</div>
            <button 
              onClick={() => router.push('/auth')}
              className="text-xs text-purple-400 hover:text-purple-300 mt-2 underline"
            >
              Reconnect GitHub
            </button>
          </div>
        ) : githubProfile && (
          <div className="mb-8 text-center">
            <div className="font-semibold text-sm truncate">{githubProfile.name || githubProfile.login}</div>
            <div className="text-xs text-gray-400 truncate">@{githubProfile.login}</div>
          </div>
        )}
        {/* Nav Items */}
        <nav className="flex flex-col gap-8 w-full items-center">
          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-white transition-colors">
            <span className="material-icons">description</span>
            <span className="text-xs">Doc</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-white transition-colors">
            <span className="material-icons">article</span>
            <span className="text-xs">News</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-white transition-colors">
            <span className="material-icons">apps</span>
            <span className="text-xs">Utilities</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-300 hover:text-white transition-colors">
            <span className="material-icons">settings</span>
            <span className="text-xs">Settings</span>
          </button>
        </nav>
        {/* Special Tools */}
        <div className="mt-10 flex flex-col gap-6 w-full items-center">
          {tools.map((tool) => (
            <button
              key={tool.label}
              className="flex flex-col items-center gap-1 text-purple-300 hover:text-white transition-colors text-lg"
              onClick={() => handleToolClick(tool.label)}
            >
              <span className="material-icons text-2xl mb-1">{tool.icon}</span>
              <span className="text-xs">{tool.label}</span>
            </button>
          ))}
        </div>
        {/* Coming Soon Popup */}
        {showComingSoon && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-8 bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl shadow-lg animate-bounce z-50 border-2 border-white/20">
            <span className="font-semibold">{comingSoonLabel}:</span> Coming Soon!
          </div>
        )}
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Welcome to your Dashboard</h1>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold shadow-lg transition-all duration-300 hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 animate-pulse">
            <span className="drop-shadow-glow">Get Started</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Repositories */}
          <div className="bg-[#232946] rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Repositories</h2>
            <ul>
              {repositories.map((repo) => (
                <li key={repo.id} className="mb-3 flex justify-between items-center">
                  <span>{repo.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${repo.status === "active" ? "bg-green-600" : "bg-gray-600"}`}>
                    {repo.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Commit History */}
          <div className="bg-[#232946] rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Commit History</h2>
            <ul>
              {commitHistory.map((commit) => (
                <li key={commit.id} className="mb-4">
                  <div className="font-medium">{commit.message}</div>
                  <div className="text-xs text-gray-400">{new Date(commit.timestamp).toLocaleString()}</div>
                  <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                    commit.type === "feature"
                      ? "bg-green-600"
                      : commit.type === "bugfix"
                      ? "bg-orange-500"
                      : "bg-blue-600"
                  }`}>
                    {commit.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* Contribution Chart */}
          <div className="bg-[#232946] rounded-xl shadow-lg p-6">
            <h2 className="text-lg font-semibold mb-4">Contributions</h2>
            <div className="h-48">
              <ReactECharts option={chartOption} style={{ height: "100%" }} />
            </div>
          </div>
        </div>
        {/* More sections can go here */}
      </main>
    </div>
  );
} 