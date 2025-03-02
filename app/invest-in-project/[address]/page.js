'use client'

import { useReadContract, useBlock } from 'wagmi';
import { projectContractABI } from '@/components/contract';
import { useParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { projectsData } from '@/utils/projectsImage';

export default function ProjectPage() {
    const { address } = useParams(); // Get project address from URL
    const router = useRouter();

    // Fetch current block timestamp
    const { data: block, isLoading: isBlockLoading, isError: isBlockError } = useBlock();

    // State for loading
    const [isLoading, setIsLoading] = useState(true);

    // Fetch project details from the blockchain
    const { data: projectName } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectName',
        chainId: 11155111,
    });

    const { data: fundGoal } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getCrowdfundingAmount',
        chainId: 11155111,
    });

    const { data: interestRate } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectInterestRateInPercent',
        chainId: 11155111,
    });

    const { data: minInvestment } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectMinInvestment',
        chainId: 11155111,
    });

    const { data: maxInvestment } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectMaxInvestment',
        chainId: 11155111,
    });

    const { data: investmentPeriod } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectInvestmentPeriod',
        chainId: 11155111,
    });

    const { data: projectStart } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectStartTimestamp',
        chainId: 11155111,
    });

    const { data: deadline } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectDeadlineInDays',
        chainId: 11155111,
    });

    const { data: projectDescription } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getProjectDescription',
        chainId: 11155111,
    });

    const { data: remainingFundingAmount } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getRemainingFundingAmount',
        chainId: 11155111,
    });

    const { data: investorsCount } = useReadContract({
        address: address,
        abi: projectContractABI,
        functionName: 'getInvestorsCount',
        chainId: 11155111,
    });
    console.log(`Inv.count ${investorsCount}`)
    const projectImage = projectsData[address]?.imageId || 6;

    // Updated function to calculate the progress percentage and get the appropriate color class
    const getProgressInfo = (projectStart, deadline, blockTimestamp) => {
        if (!projectStart || !deadline || !blockTimestamp) {
            return { width: "0%", colorClass: "bg-gray-500" };
        }

        const projectStartTime = Number(projectStart);
        const deadlineInDays = Number(deadline);
        const currentTime = Number(blockTimestamp);

        // Calculate total duration in seconds
        const totalDurationInSeconds = deadlineInDays * 86400;

        // Calculate elapsed time in seconds
        const elapsedTimeInSeconds = currentTime - projectStartTime;

        // Calculate percentage of time passed
        const progress = Math.min(Math.max((elapsedTimeInSeconds / totalDurationInSeconds) * 100, 0), 100);

        // Determine color class based on progress
        let colorClass = "bg-green-500"; // Default to green
        if (progress >= 80) {
            colorClass = "bg-red-500"; // Red if more than 80% time passed
        } else if (progress >= 50) {
            colorClass = "bg-yellow-500"; // Yellow if between 50% and 80% time passed
        }

        return {
            width: `${progress.toFixed(1)}%`,
            colorClass
        };
    };

    const currentFunding = Number(fundGoal) - Number(remainingFundingAmount);

    // Calculate funding progress
    const getFundingProgress = () => {
        if (!fundGoal || !currentFunding) return { width: "73%" };

        const goalNum = Number(fundGoal);
        const currentNum = Number(currentFunding);
        const progress = Math.min((currentNum / goalNum) * 100, 100);

        return {
            width: `${progress.toFixed(1)}%`
        };
    };

    // Set loading to false when all data is loaded
    useEffect(() => {
        if (projectName && fundGoal && interestRate && minInvestment &&
            maxInvestment && investmentPeriod && projectStart && deadline) {
            setIsLoading(false);
        }
    }, [projectName, fundGoal, interestRate, minInvestment,
        maxInvestment, investmentPeriod, projectStart, deadline]);

    // Get progress info for time remaining
    const { width, colorClass } = getProgressInfo(projectStart, deadline, block?.timestamp);

    // Calculate days remaining
    const calculateDaysRemaining = () => {
        if (!projectStart || !deadline || !block?.timestamp) return 0;

        const totalDurationInSeconds = Number(deadline) * 86400;
        const elapsedTimeInSeconds = Number(block?.timestamp) - Number(projectStart);
        const remainingTimeInSeconds = totalDurationInSeconds - elapsedTimeInSeconds;
        return Math.max(Math.ceil(remainingTimeInSeconds / 86400), 0);
    };

    // Get funding progress
    const fundingProgress = getFundingProgress();

    if (isLoading || isBlockLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (isBlockError) {
        return <div>Error fetching block data.</div>;
    }

    const daysRemaining = calculateDaysRemaining();

    return (
        <div
            className="min-h-screen bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('/Home/home.jpg')" }}
        >
            {/* Overlay to darken the background */}
            <div className="fixed inset-0 w-full h-full bg-black/20"></div>

            {/* Project Details Container */}
            <div className="min-h-screen flex items-center justify-center p-8 relative z-10 pt-32">
                <div className="w-full max-w-4xl">
                    <button
                        onClick={() => router.push('/invest-in-project')}
                        className="mb-6 flex items-center text-white hover:text-blue-300 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Projects
                    </button>

                    <div className="bg-gray-800/90 border border-gray-700 rounded-lg overflow-hidden shadow-xl">
                        {/* Upper Part: Image with Project Name */}
                        <div className="relative h-64">
                            <img
                                src={`/project_images/${projectImage}.jpg`}
                                alt={projectName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                                {/* Blinking Green Dot */}
                                <div className="absolute top-4 right-4 z-20 flex items-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                    </span>
                                    <span className="ml-2 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded-full">Live</span>
                                </div>
                                <h1 className="text-3xl font-bold text-white">{projectName}</h1>
                                <p className="text-gray-300 text-xl mt-2">
                                    Goal: {Number(fundGoal) ? Number(fundGoal) / 10 ** 36 : 0} ETH | Interest: {Number(interestRate)}%
                                </p>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left Column: Project Details */}
                            <div className="md:col-span-2 space-y-6">
                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">Project Description</h2>
                                    <p className="text-gray-300">{projectDescription || "No description available"}</p>
                                </div>

                                <div>
                                    <h2 className="text-xl font-bold text-white mb-3">Investment Details</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="bg-gray-700/50 p-4 rounded-lg">
                                            <p className="text-gray-400 text-sm">Min Investment</p>
                                            <p className="text-white font-semibold">{Number(minInvestment) ? Number(minInvestment) / 10 ** 18 : 0} ETH</p>
                                        </div>
                                        <div className="bg-gray-700/50 p-4 rounded-lg">
                                            <p className="text-gray-400 text-sm">Max Investment</p>
                                            <p className="text-white font-semibold">{Number(maxInvestment) ? Number(maxInvestment) / 10 ** 18 : 0} ETH</p>
                                        </div>
                                        <div className="bg-gray-700/50 p-4 rounded-lg">
                                            <p className="text-gray-400 text-sm">Period</p>
                                            <p className="text-white font-semibold">{Number(investmentPeriod)} days</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Funding Progress */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-semibold">Funding Progress</h3>
                                        <p className="text-gray-300 text-sm">
                                            {Number(currentFunding) ? (Number(remainingFundingAmount) / Number(fundGoal) * 100) / 10 ** 18 : 0.73} ETH
                                        </p>
                                    </div>
                                    <div className="relative w-full bg-gray-700 rounded-lg h-8 overflow-hidden">
                                        <div
                                            className="h-full transition-all duration-300 bg-blue-500"
                                            style={{ width: fundingProgress.width }}
                                        ></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                                            <span className="drop-shadow-md text-white">
                                                {fundingProgress.width} funded
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Time Remaining Status Bar */}
                                <div>
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-white font-semibold">Time Remaining</h3>
                                    </div>
                                    <div className="relative w-full bg-gray-700 rounded-lg h-8 overflow-hidden">
                                        <div
                                            className={`h-full transition-all duration-300 ${colorClass}`}
                                            style={{ width }}
                                        ></div>
                                        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                                            <span className="drop-shadow-md text-white">
                                                {daysRemaining} days remaining
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Investment Actions */}
                            <div className="bg-gray-700/50 p-6 rounded-lg flex flex-col space-y-4">
                                <h2 className="text-xl font-bold text-white mb-2">Invest Now</h2>
                                <input
                                    type="number"
                                    placeholder="Amount (ETH)"
                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    min={Number(minInvestment) ? Number(minInvestment) / 10 ** 18 : 0}
                                    max={Number(maxInvestment) ? Number(maxInvestment) / 10 ** 18 : 0}
                                />
                                <button className="w-full bg-blue-600 px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                    Invest
                                </button>
                                <div className="mt-4">
                                    <h3 className="text-white font-semibold mb-2">Investment Summary</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Interest Rate:</span>
                                            <span className="text-white">{Number(interestRate)}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Investment Period:</span>
                                            <span className="text-white">{Number(investmentPeriod)} days</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Minimum Investment:</span>
                                            <span className="text-white">{Number(minInvestment) ? Number(minInvestment) / 10 ** 18 : 0} ETH</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Maximum Investment:</span>
                                            <span className="text-white">{Number(maxInvestment) ? Number(maxInvestment) / 10 ** 18 : 0} ETH</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Investors count:</span>
                                            <span className="text-white">{Number(investorsCount) ? Number(investorsCount) : 5}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}