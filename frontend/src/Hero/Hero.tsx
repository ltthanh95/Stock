import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Hero = (props: Props) => {
    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center space-x-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mx-auto lg:mx-0 w-fit">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span>Trusted by investors</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                            Financial data with{" "}
                            <span className="text-green-500">no news</span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Search relevant financial documents without fear mongering and fake news.
                            Make informed decisions with pure data.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mx-auto lg:mx-0">
                            <Link
                                to="/search"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                Get Started
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>

                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-full hover:border-green-500 hover:text-green-500 transition-all duration-200"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 pt-4">
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <span className="text-sm font-medium text-gray-600">Real-time data</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium text-gray-600">100% secure</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm font-medium text-gray-600">Lightning fast</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Image/Illustration */}
                    <div className="relative">
                        {/* Decorative background elements */}
                        <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

                        {/* Main illustration placeholder */}
                        <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                            {/* Mock chart/dashboard */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Portfolio Value</p>
                                        <p className="text-3xl font-bold text-gray-900">$124,567.89</p>
                                    </div>
                                    <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                                        +12.5%
                                    </div>
                                </div>

                                {/* Mock mini chart */}
                                <div className="h-40 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-end justify-around p-4">
                                    <div className="w-8 bg-green-400 rounded-t" style={{height: '40%'}}></div>
                                    <div className="w-8 bg-green-400 rounded-t" style={{height: '60%'}}></div>
                                    <div className="w-8 bg-green-500 rounded-t" style={{height: '80%'}}></div>
                                    <div className="w-8 bg-green-500 rounded-t" style={{height: '90%'}}></div>
                                    <div className="w-8 bg-green-500 rounded-t" style={{height: '100%'}}></div>
                                </div>

                                {/* Mock stock list */}
                                <div className="space-y-3">
                                    {['AAPL', 'MSFT', 'GOOGL'].map((symbol, idx) => (
                                        <div key={symbol} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                                    {symbol[0]}
                                                </div>
                                                <span className="font-semibold text-gray-900">{symbol}</span>
                                            </div>
                                            <span className="text-green-500 font-semibold">+{(idx + 1) * 2}.{idx}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

           
        </section>
    );
};

export default Hero;