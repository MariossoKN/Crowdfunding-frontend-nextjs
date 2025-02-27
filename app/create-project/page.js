// app/create-project/page.js
"use client"; // Required for interactivity (e.g., forms, state)

import { useState } from "react";

export default function CreateProjectPage() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        goal: "",
        deadline: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to a smart contract or backend)
        console.log("Form Data:", formData);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Create a Project</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Project Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium mb-2">
                            Project Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your project title"
                            required
                        />
                    </div>

                    {/* Project Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium mb-2">
                            Project Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                            rows="5"
                            placeholder="Describe your project"
                            required
                        />
                    </div>

                    {/* Funding Goal */}
                    <div>
                        <label htmlFor="goal" className="block text-sm font-medium mb-2">
                            Funding Goal (ETH)
                        </label>
                        <input
                            type="number"
                            id="goal"
                            name="goal"
                            value={formData.goal}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Enter your funding goal"
                            required
                        />
                    </div>

                    {/* Deadline */}
                    <div>
                        <label htmlFor="deadline" className="block text-sm font-medium mb-2">
                            Deadline
                        </label>
                        <input
                            type="date"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Create Project
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}