'use client'

import { projectsData } from "@/utils/projectsImage";
import { useRouter } from "next/navigation";

export default function ProjectsPage() {
    const router = useRouter();

    // Function to calculate the progress percentage and get the appropriate color class
    const getProgressInfo = (deadline, daysRemaining) => {
        if (!deadline || !daysRemaining || deadline <= 0) {
            console.log('Invalid deadline or daysRemaining:', { deadline, daysRemaining });
            return { width: "0%", colorClass: "bg-gray-500" };
        }

        // Calculate percentage of time passed
        const progress = Math.min(Math.max(((deadline - daysRemaining) / deadline) * 100, 0), 100);
        console.log('Progress calculation:', { deadline, daysRemaining, progress });

        // Determine color class based on progress
        let colorClass = "bg-green-500"; // Default to green
        if (progress >= 80) {
            colorClass = "bg-red-500"; // Red if less than 20% time remaining
        } else if (progress >= 50) {
            colorClass = "bg-yellow-500"; // Yellow if between 20% and 50% time remaining
        }

        return {
            width: `${progress.toFixed(1)}%`,
            colorClass
        };
    };

    return (
        <div
            className="min-h-screen bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('./Home/home.jpg')" }}
        >
            {/* Overlay to darken the background */}
            <div className="fixed inset-0 w-full h-full bg-black/20"></div>

            {/* Projects Container */}
            <div className="min-h-screen flex items-center justify-center p-8 relative z-10 mt-20">
                <div className="w-full max-w-6xl">
                    <h1 className="text-4xl font-bold text-white mb-8">Live Projects</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Object.entries(projectsData).map(([address, project]) => {
                            const { width, colorClass } = getProgressInfo(project.deadline, project.daysRemaining);

                            return (
                                <div
                                    key={address}
                                    className="bg-gray-800/90 border border-gray-700 rounded-lg overflow-hidden shadow-lg relative"
                                >
                                    {/* Blinking Green Dot */}
                                    <div className="absolute top-3 right-3 z-20 flex items-center">
                                        <span className="relative flex h-3 w-3">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                        </span>
                                        <span className="ml-2 text-xs font-medium text-white bg-black/50 px-2 py-0.5 rounded-full">Live</span>
                                    </div>

                                    {/* Upper Part: Image with Overlay */}
                                    <div className="relative h-48">
                                        <img
                                            src={`/project_images/${project.imageId}.jpg`}
                                            alt={project.projectName}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                                            <h2 className="text-xl font-bold text-white">{project.projectName}</h2>
                                            <p className="text-gray-300">
                                                Goal: {project.fundGoal} ETH | Interest: {project.interestRate}%
                                            </p>
                                        </div>
                                    </div>

                                    {/* Lower Part: Additional Info */}
                                    <div className="p-4">
                                        <p className="text-gray-300">Min Investment: {project.minInvestment} ETH</p>
                                        <p className="text-gray-300">Max Investment: {project.maxInvestment} ETH</p>
                                        <p className="text-gray-300">Investment Period: {project.investmentPeriod} days</p>

                                        {/* Invest Now Button */}
                                        <button
                                            onClick={() => router.push(`/invest-in-project/${address}`)}
                                            className="w-full mt-4 bg-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                            More Information
                                        </button>

                                        {/* Status Bar with Days Remaining Inside */}
                                        <div className="relative w-full bg-gray-700 rounded-lg h-8 mt-4 overflow-hidden">
                                            <div
                                                className={`h-full transition-all duration-300 ${colorClass}`}
                                                style={{ width: width }}
                                            ></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                                                <span className="drop-shadow-md text-white">
                                                    {project.daysRemaining} / {project.deadline} days remaining
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}