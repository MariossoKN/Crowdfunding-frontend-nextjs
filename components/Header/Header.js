'use client';

// components/Header.js
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="text-white bg-black/70 p-4 fixed top-0 left-0 w-full z-50 border-b border-gray-800">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="w-32"> {/* Fixed width for logo container */}
                    <Link href="/">
                        <div className="relative w-full h-12">
                            <Image
                                src="/Header/logo2.png"
                                alt="Crowdfund Logo"
                                fill
                                className="object-contain"
                                priority
                                sizes="(max-width: 768px) 100vw, 128px"
                            />
                        </div>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex-grow mx-4 max-w-md relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        {/* Search Icon */}
                        <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for projects"
                        className="w-full pl-10 pr-4 py-2 rounded-lg bg-black/10 border border-gray-800 text-white placeholder-gray-400 focus:outline-none focus:border-gray-700"
                    />
                </div>

                {/* Hamburger Menu (Mobile) */}
                <div className="w-32 flex justify-end lg:hidden"> {/* Fixed width for hamburger container */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <nav className="hidden lg:flex w-32 justify-end"> {/* Fixed width for nav container */}
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="px-4 py-2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="px-4 py-2">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="px-4 py-2">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Menu (Dropdown) */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4">
                    <ul className="flex flex-col space-y-2">
                        <li>
                            <Link href="/" className="block px-4 py-2 bg-gray-800">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="block px-4 py-2 bg-gray-800">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block px-4 py-2 bg-gray-800">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
}