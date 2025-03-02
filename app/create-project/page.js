// app/create-project/page.js
"use client";

import { useState } from "react";
import { useCreateProject } from "@/hooks/useCreateProject";
import { useRouter } from "next/navigation";

// Predefined image options with names
const predefinedImages = [
    { id: 1, url: "/project_images/1.jpg", name: "Art" },
    { id: 2, url: "/project_images/2.jpg", name: "Gaming" },
    { id: 3, url: "/project_images/3.jpg", name: "Hospitality" },
    { id: 4, url: "/project_images/4.jpg", name: "Charity" },
    { id: 5, url: "/project_images/5.jpg", name: "Technology" },
    { id: 6, url: "/project_images/6.jpg", name: "Default" },
];

export default function CreateProjectPage() {
    const [formData, setFormData] = useState({
        projectName: "",
        fundingGoal: "",
        interestRate: "",
        minInvestment: "",
        maxInvestment: "",
        fundingDuration: "",
        investmentPeriod: "",
        imageId: "6",
    });
    const [transactionStatus, setTransactionStatus] = useState("");
    const router = useRouter();

    const {
        createProject,
        isPending,
        isLoading,
        isSuccess,
        error,
        projectAddress,
        projectIndex
    } = useCreateProject();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageSelect = (imageId) => {
        setFormData((prevData) => ({
            ...prevData,
            imageId: imageId,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setTransactionStatus("Creating project...");

        try {
            await createProject(
                formData.projectName,
                parseFloat(formData.fundingGoal),
                parseInt(formData.interestRate),
                parseFloat(formData.minInvestment),
                parseFloat(formData.maxInvestment),
                parseInt(formData.fundingDuration),
                parseInt(formData.investmentPeriod),
                formData.imageId
            );

            setTransactionStatus("Transaction submitted. Waiting for confirmation...");
            // The hook will handle the transaction confirmation
            // and will update projectAddress state once confirmed

        } catch (err) {
            console.error("Failed to create project:", err);
            setTransactionStatus(`Error: ${err.message || "Failed to create project"}`);
        }
    };

    // Once project is created successfully and we have the address
    if (isSuccess && projectAddress) {
        // Redirect to the project page or show success message
        return (
            <div className="min-h-screen flex items-center justify-center p-8 relative z-10">
                <div className="bg-gray-800/90 border border-gray-800 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-2xl text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Project Created Successfully!</h1>
                    <p className="text-gray-300 mb-6">Your project has been created and is now live on the blockchain.</p>

                    <div className="bg-black/50 p-4 rounded-lg mb-6">
                        <p className="text-gray-400 text-sm mb-2">Project Address:</p>
                        <p className="text-white break-all font-mono">{projectAddress}</p>

                        {projectIndex !== null && (
                            <>
                                <p className="text-gray-400 text-sm mt-4 mb-2">Project Index:</p>
                                <p className="text-white font-mono">{projectIndex.toString()}</p>
                            </>
                        )}
                    </div>

                    <div className="flex space-x-4 justify-center">
                        <button
                            onClick={() => router.push(`/projects/${projectIndex}`)}
                            className="bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            View Project
                        </button>
                        <button
                            onClick={() => router.push('/projects')}
                            className="bg-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
                        >
                            Browse All Projects
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="min-h-screen bg-cover bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('./Home/home.jpg')" }}
        >
            {/* Overlay to darken the background */}
            <div className="fixed inset-0 w-full h-full bg-black/20"></div>

            {/* Form Container */}
            <div className="min-h-screen flex items-center justify-center p-8 relative z-10 mt-20">
                <form
                    onSubmit={handleSubmit}
                    className="bg-gray-800/90 border border-gray-800 backdrop-blur-sm p-8 rounded-lg shadow-lg w-full max-w-2xl"
                >
                    <h1 className="text-4xl font-bold text-white mb-8">Create a Project</h1>

                    {/* Display transaction status */}
                    {transactionStatus && (
                        <div className={`mb-6 p-4 rounded-lg ${transactionStatus.includes("Error")
                            ? "bg-red-900/50 text-red-200"
                            : "bg-blue-900/50 text-blue-200"
                            }`}>
                            <p>{transactionStatus}</p>
                            {(isPending || isLoading) && (
                                <div className="flex justify-center mt-2">
                                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Project Name */}
                    <div className="mb-6">
                        <label htmlFor="projectName" className="block text-sm font-medium text-gray-300 mb-2">
                            Project Name *
                        </label>
                        <input
                            type="text"
                            id="projectName"
                            name="projectName"
                            value={formData.projectName}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter your project name"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Funding Goal */}
                    <div className="mb-6">
                        <label htmlFor="fundingGoal" className="block text-sm font-medium text-gray-300 mb-2">
                            Funding Goal (ETH) *
                        </label>
                        <input
                            type="number"
                            id="fundingGoal"
                            name="fundingGoal"
                            value={formData.fundingGoal}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter the funding goal"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Interest Rate */}
                    <div className="mb-6">
                        <label htmlFor="interestRate" className="block text-sm font-medium text-gray-300 mb-2">
                            Interest Rate (%) *
                        </label>
                        <input
                            type="number"
                            id="interestRate"
                            name="interestRate"
                            value={formData.interestRate}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter the interest rate"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Minimum Investment Amount */}
                    <div className="mb-6">
                        <label htmlFor="minInvestment" className="block text-sm font-medium text-gray-300 mb-2">
                            Minimum Investment Amount (ETH) *
                        </label>
                        <input
                            type="number"
                            id="minInvestment"
                            name="minInvestment"
                            value={formData.minInvestment}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter the minimum investment amount"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Maximum Investment Amount */}
                    <div className="mb-6">
                        <label htmlFor="maxInvestment" className="block text-sm font-medium text-gray-300 mb-2">
                            Maximum Investment Amount (ETH) *
                        </label>
                        <input
                            type="number"
                            id="maxInvestment"
                            name="maxInvestment"
                            value={formData.maxInvestment}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter the maximum investment amount"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Funding Duration */}
                    <div className="mb-6">
                        <label htmlFor="fundingDuration" className="block text-sm font-medium text-gray-300 mb-2">
                            Funding Duration (Days) *
                        </label>
                        <input
                            type="number"
                            id="fundingDuration"
                            name="fundingDuration"
                            value={formData.fundingDuration}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter the funding duration"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Investment Period */}
                    <div className="mb-6">
                        <label htmlFor="investmentPeriod" className="block text-sm font-medium text-gray-300 mb-2">
                            Investment Period (Days) *
                        </label>
                        <input
                            type="number"
                            id="investmentPeriod"
                            name="investmentPeriod"
                            value={formData.investmentPeriod}
                            onChange={handleChange}
                            className="w-full p-3 bg-black/70 border border-gray-700 rounded-lg focus:outline-none focus:border-gray-500 text-white"
                            placeholder="Enter the investment period"
                            required
                            disabled={isPending || isLoading}
                        />
                    </div>

                    {/* Project Image Selection */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Project Image (Optional)
                        </label>
                        <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                            {predefinedImages.map((image) => (
                                <div
                                    key={image.id}
                                    onClick={() => handleImageSelect(image.id.toString())}
                                    className={`cursor-pointer border-2 ${formData.imageId === image.id.toString()
                                        ? "border-blue-500"
                                        : "border-gray-700"
                                        } rounded-lg overflow-hidden relative group`}
                                    disabled={isPending || isLoading}
                                >
                                    <img
                                        src={image.url}
                                        alt={`Project Image ${image.id}`}
                                        className="w-full h-24 object-cover transform transition-transform duration-300 group-hover:scale-125"
                                    />
                                    {/* Image Name Overlay */}
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <span className="text-white text-sm font-semibold">
                                            {image.name}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isPending || isLoading}
                        className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${isPending || isLoading
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                            }`}
                    >
                        {isPending || isLoading ? (
                            <span className="flex items-center justify-center">
                                <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></span>
                                Processing...
                            </span>
                        ) : (
                            "Create Project"
                        )}
                    </button>

                    {/* Error display */}
                    {error && (
                        <div className="mt-4 p-3 bg-red-900/50 text-red-200 rounded-lg">
                            <p>Error: {error.message || "An unknown error occurred"}</p>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}