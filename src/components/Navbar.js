import React from 'react';
import logo from '../assets/chat-logo.avif';

const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex flex-1 justify-between">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                className="h-8 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                        </div>
                        <div className="sm:ml-6">
                            <div className="flex space-x-4">
                                <a href="/frontend/public" className="px-3 py-2 text-sm font-medium text-white" aria-current="page">
                                    Clear chat
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
