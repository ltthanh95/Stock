import React from 'react'
import Hero from "../../Hero/Hero.tsx";

interface Props {}
export const HomePage : React.FC<Props> = () => {
    return (
        <>
        <Hero/>
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Everything you need to invest smarter
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Access comprehensive financial data and make informed decisions with our powerful tools
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            ),
                            title: 'Real-time Analytics',
                            description: 'Get instant access to market data and financial metrics updated in real-time'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            ),
                            title: 'Financial Documents',
                            description: 'Access SEC filings, earnings reports, and comprehensive company data'
                        },
                        {
                            icon: (
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            ),
                            title: 'Secure Platform',
                            description: 'Bank-level security to keep your data and portfolio information safe'
                        }
                    ].map((feature, idx) => (
                        <div key={idx} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-green-500 text-white rounded-xl flex items-center justify-center mb-6">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        How it works
                    </h2>
                    <p className="text-xl text-gray-600">
                        Start investing smarter in three simple steps
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {[
                        { step: '1', title: 'Create Account', description: 'Sign up in seconds and get instant access to our platform' },
                        { step: '2', title: 'Search Stocks', description: 'Find and analyze companies using our powerful search tools' },
                        { step: '3', title: 'Build Portfolio', description: 'Track your investments and make data-driven decisions' }
                    ].map((item, idx) => (
                        <div key={idx} className="text-center">
                            <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Ready to start investing?
                </h2>
                <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
                    Join thousands of investors making smarter decisions with real financial data
                </p>
                <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                    Get Started Free
                </button>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">FinanceApp</h3>
                        <p className="text-gray-400">Making financial data accessible to everyone</p>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-green-500">Features</a></li>
                            <li><a href="#" className="hover:text-green-500">Pricing</a></li>
                            <li><a href="#" className="hover:text-green-500">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-green-500">About</a></li>
                            <li><a href="#" className="hover:text-green-500">Blog</a></li>
                            <li><a href="#" className="hover:text-green-500">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-green-500">Help Center</a></li>
                            <li><a href="#" className="hover:text-green-500">Contact</a></li>
                            <li><a href="#" className="hover:text-green-500">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 FinanceApp. All rights reserved.</p>
                </div>
            </div>
        </footer>
        </>
    );
};
