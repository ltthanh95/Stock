import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const Sidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    const [isProfileOpen, setIsProfileOpen] = useState(true);

    const navItems = [
        {
            name: 'Company Profile',
            path: 'company-profile',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            ),
            hasSubmenu: true,
            submenu: [
                { name: 'Overview', path: 'company-profile' },
                { name: 'Charts', path: 'chart' },
            ]
        },
        {
            name: 'Income Statement',
            path: 'income-statement',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            name: 'Balance Sheet',
            path: 'balance-sheet',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            name: 'Cash Flow',
            path: 'cashflow-statement',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            name: 'Dividend & Earning',
            path: 'dividend',
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
            )
        }
    ];

    const isActive = (path: string) => {
        return pathname.includes(path);
    };

    return (
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen sticky top-0 hidden lg:block">
            <div className="py-6 px-4">
                {/* Header */}
                <div className="mb-8 px-3">
                    <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        Financial Reports
                    </h2>
                </div>

                {/* Navigation */}
                <nav className="space-y-1">
                    {navItems.map((item) => (
                        <div key={item.path}>
                            {/* Main Menu Item */}
                            {item.hasSubmenu ? (
                                <button
                                    onClick={() => setIsProfileOpen(!isProfileOpen)}
                                    className={`
                                        w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                        ${isActive(item.path)
                                        ? 'bg-green-50 text-green-700 border-l-4 border-green-500 pl-2'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                                    }
                                    `}
                                >
                                    <div className="flex items-center space-x-3">
                                        <span className={isActive(item.path) ? 'text-green-600' : 'text-gray-400'}>
                                            {item.icon}
                                        </span>
                                        <span>{item.name}</span>
                                    </div>
                                    <svg
                                        className={`w-4 h-4 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`
                                        flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200
                                        ${isActive(item.path)
                                        ? 'bg-green-50 text-green-700 border-l-4 border-green-500 pl-2'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-green-600'
                                    }
                                    `}
                                >
                                    <span className={isActive(item.path) ? 'text-green-600' : 'text-gray-400'}>
                                        {item.icon}
                                    </span>
                                    <span>{item.name}</span>
                                </Link>
                            )}

                            {/* Submenu */}
                            {item.hasSubmenu && isProfileOpen && (
                                <div className="ml-8 mt-1 space-y-1">
                                    {item.submenu?.map((subItem) => (
                                        <Link
                                            key={subItem.path}
                                            to={subItem.path}
                                            className={`
                                                block px-3 py-2 rounded-lg text-sm transition-all duration-200
                                                ${isActive(subItem.path)
                                                ? 'text-green-700 bg-green-50 font-medium'
                                                : 'text-gray-600 hover:text-green-600 hover:bg-gray-50'
                                            }
                                            `}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Divider */}
                <div className="my-6 border-t border-gray-200"></div>

                {/* Help Section */}
                <div className="px-3">
                    <a
                        href="#"
                        className="flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-green-600 transition-all duration-200"
                    >
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Help & Support</span>
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;