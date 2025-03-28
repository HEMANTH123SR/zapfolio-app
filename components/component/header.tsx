


"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { hackerMedium } from '@/fonts/font';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className='w-full flex justify-center items-center'>
            <div className='w-full max-w-8xl px-4 sm:px-6 lg:px-8'>
                <nav
                    className="relative flex items-center justify-between p-4 lg:px-9 bg-white shadow-sm rounded-2xl rounded-t-none border"
                    style={hackerMedium.style}
                >
                    {/* Logo */}
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/zapfolio-logo.png"
                            alt="Company Logo"
                            width={120}
                            height={50}
                            className="h-8 lg:h-10 w-auto"
                        />
                    </Link>

                    {/* Middle Navigation Links - Desktop */}
                    <div className="hidden lg:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
                        <Link href="/themes" className="text-gray-700 hover:text-black transition">Themes</Link>
                        <Link href="/dashboard" className="text-gray-700 hover:text-black transition">Dashboard</Link>
                        <Link href="/pricing" className="text-gray-700 hover:text-black transition">Pricing</Link>
                        <Link href="/feedback" className="text-gray-700 hover:text-black transition">Feedback</Link>
                    </div>

                    {/* Authentication Links */}
                    <div className="flex items-center space-x-4">
                        {/* Desktop Auth Links */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link
                                href="/login"
                                className="text-gray-700 hover:text-black px-4 py-1.5 rounded-full border transition"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="bg-black text-white px-4 py-1.5 rounded-full hover:bg-gray-800 transition"
                            >
                                Sign up
                            </Link>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden text-gray-700"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu - Full Screen Overlay */}
                    {isMenuOpen && (
                        <div className="fixed inset-0 z-50 lg:hidden bg-white">
                            <div className="flex flex-col h-full">
                                {/* Mobile Menu Header */}
                                <div className="flex justify-between items-center p-4 border-b">
                                    <Link href="/" className="flex items-center">
                                        <Image
                                            src="/zapfolio-logo.png"
                                            alt="Company Logo"
                                            width={100}
                                            height={40}
                                            className="h-8 w-auto"
                                        />
                                    </Link>
                                    <button
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-gray-700"
                                    >
                                        <X size={24} />
                                    </button>
                                </div>

                                {/* Mobile Menu Links */}
                                <div className="flex flex-col items-center justify-center flex-grow space-y-6 p-6">
                                    <Link
                                        href="/themes"
                                        className="text-2xl text-gray-700 hover:text-black"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Themes
                                    </Link>
                                    <Link
                                        href="/dashboard"
                                        className="text-2xl text-gray-700 hover:text-black"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="/pricing"
                                        className="text-2xl text-gray-700 hover:text-black"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Pricing
                                    </Link>
                                    <Link
                                        href="/feedback"
                                        className="text-2xl text-gray-700 hover:text-black"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Feedback
                                    </Link>
                                </div>

                                {/* Mobile Menu Footer */}
                                <div className="flex flex-col space-y-4 p-6 border-t">
                                    <Link
                                        href="/login"
                                        className="w-full text-center text-gray-700 hover:text-black px-4 py-3 rounded-full border transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="w-full text-center bg-black text-white px-4 py-3 rounded-full hover:bg-gray-800 transition"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        Sign up
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </div>
    );
}