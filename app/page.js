"use client"; // Required for using React hooks and state

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [totalProjects, setTotalProjects] = useState(0);
  const [totalFundsRaised, setTotalFundsRaised] = useState(0);
  const [totalInvestors, setTotalInvestors] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  // Fetch statistics from your smart contract or backend
  useEffect(() => {
    const fetchStatistics = async () => {
      // Replace with actual contract calls
      setTotalProjects(121); // Example: getProjectsCount()
      setTotalFundsRaised(867); // Example: sum of all crowdfunded amounts
      setTotalInvestors(185); // Example: getTotalInvestors()
      setSuccessRate(76); // Example: calculate success rate
    };
    fetchStatistics();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('./Home/home.jpg')" }}
    >
      {/* First Segment: Welcome Message and Statistics */}
      <section id="welcome" className="h-screen flex flex-col items-center justify-center text-white relative">
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Welcome Message */}
          <h1 className="text-6xl font-bold text-white text-shadow-lg mb-8">
            Welcome to CF
          </h1>

          {/* Short Explanation Text */}
          <p className="text-xl text-white mb-24">
            A decentralized platform where creators bring their ideas to life and
            investors earn rewards.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="bg-gray-800/90 border-y-2 border-r-1 border-gray-700 p-6 text-center">
              <h2 className="text-4xl font-bold">{totalProjects}</h2>
              <p className="text-gray-300">Total Projects Funded</p>
            </div>
            <div className="bg-gray-800/90 border-y-2 border-l border-gray-700 p-6 text-center">
              <h2 className="text-4xl font-bold">{totalFundsRaised.toLocaleString()} ETH</h2>
              <p className="text-gray-300">Total Funds Raised</p>
            </div>
            <div className="bg-gray-800/90 border-y-2 border-x border-gray-700 p-6 text-center">
              <h2 className="text-4xl font-bold">{totalInvestors}</h2>
              <p className="text-gray-300">Total Investors</p>
            </div>
            <div className="bg-gray-800/90 border-y-2 border-l-1 border-gray-700 p-6 text-center">
              <h2 className="text-4xl font-bold">{successRate}%</h2>
              <p className="text-gray-300">Success Rate</p>
            </div>
          </div>

          {/* Scroll Down Button */}
          <a href="#get-started" className="mt-20 animate-bounce inline-block">
            <svg
              className="w-8 h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Second Segment: Create Project or Invest */}
      <section id="get-started" className="h-screen flex flex-col items-center justify-center text-white relative">
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h2 className="text-6xl font-bold mb-8">Get Started</h2>
          <p className="text-xl text-white mb-8">
            Choose how you want to participate in the crowdfunding ecosystem.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Create Project Card */}
            <div className="bg-gray-800/90 border border-gray-800 p-8 rounded-lg text-center w-full md:w-1/2 hover:bg-gray-700/90 transition-colors relative group mt-24">
              {/* Logo for Create Project Card */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/Home/create-project-logo.png" // Replace with your logo path
                  alt="Create Project Logo"
                  className="w-[72px] h-[72px]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 mt-8">Create a Project</h3>
              <p className="text-gray-400 mb-6">
                Bring your ideas to life by creating a new crowdfunding project.
              </p>
              <Link href="/create-project">
                <button className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Creating
                </button>
              </Link>
            </div>

            {/* Invest in Projects Card */}
            <div className="bg-gray-800/90 border border-gray-800 p-8 rounded-lg text-center w-full md:w-1/2 hover:bg-gray-700/90 transition-colors relative group mt-24">
              {/* Logo for Invest in Projects Card */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 transition-transform duration-300 group-hover:scale-110">
                <img
                  src="/Home/invest-logo.png" // Replace with your logo path
                  alt="Invest Logo"
                  className="w-[72px] h-[72px]"
                />
              </div>
              <h3 className="text-3xl font-bold mb-4 mt-8">Invest in Projects</h3>
              <p className="text-gray-400 mb-6">
                Support innovative projects and earn rewards as an investor.
              </p>
              <button className="bg-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Start Investing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}