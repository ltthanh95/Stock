import React, {type DetailedHTMLProps, type ImgHTMLAttributes} from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo.png";
import "./css/Navbar.css";
import {useAuth} from "../../Context/useAuth.tsx";

interface Props {}
const Navbar : React.FC = (props: Props) => {
    const { isLoggedIn, user, logout } = useAuth();
    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left Section - Logo & Navigation */}
                    <div className="flex items-center space-x-12">
                        <Link to="/" className="flex-shrink-0">
                            <img
                                src="https://placehold.co/50x50/png"
                                alt="Logo"
                                className="h-8 transition-opacity hover:opacity-80"
                            />
                            
                        </Link>

                        <div className="hidden lg:flex items-center space-x-8">
                            <Link
                                to="/search"
                                className="text-gray-900 text-sm font-semibold hover:text-green-500 transition-colors duration-200"
                            >
                                Search
                            </Link>
                            {isLoggedIn() && (
                                <Link
                                    to="/portfolio"
                                    className="text-gray-900 text-sm font-semibold hover:text-green-500 transition-colors duration-200"
                                >
                                    Portfolio
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Right Section - Auth Buttons */}
                    {isLoggedIn() ? (
                        <div className="hidden lg:flex items-center space-x-6 text-back">
                            <div className="hover:text-darkBlue">Welcome, {user?.userName}</div>
                            <a
                                onClick={logout}
                                className="px-8 py-3 font-bold rounded text-back bg-lightGreen hover:opacity-70"
                            >
                                Logout
                            </a>
                        </div>
                    ) : (
                        <div className="hidden lg:flex items-center space-x-6 text-back">
                            <Link to="/login" className="hover:text-darkBlue">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="px-8 py-3 font-bold rounded text-back bg-lightGreen hover:opacity-70"
                            >
                                Signup
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button className="text-gray-900 p-2 rounded-lg hover:bg-gray-50">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;