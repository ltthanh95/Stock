import React, {type SyntheticEvent} from 'react'
import {CardPortfolio} from "../CardPortfolio/CardPortfolio.tsx";
import type {PortfolioGet} from "../../../Models/Portfolio.ts";

interface Props { 
    portfolioValues: PortfolioGet[] | null;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}
export const  ListPortfolio : React.FC<Props>= ({portfolioValues,onPortfolioDelete}) => {
    return (
        <>
            <section id="portfolio" className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                            My Portfolio
                        </h2>
                        <p className="text-sm text-gray-500">
                            Manage your investments in one place
                        </p>
                    </div>

                    {/* Portfolio Grid */}
                    {Array.isArray(portfolioValues) && portfolioValues.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            {portfolioValues.map((portfolioValue) => {
                                return (
                                    <CardPortfolio
                                        key={portfolioValue.symbol}
                                        portfolioValue={portfolioValue}
                                        onPortfolioDelete={onPortfolioDelete}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        /* Empty State */
                        <div className="flex flex-col items-center justify-center py-20 px-4">
                            <div className="w-24 h-24 mb-6 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
                                <svg
                                    className="w-12 h-12 text-gray-300"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Your portfolio is empty
                            </h3>
                            <p className="text-sm text-gray-500 text-center max-w-sm mb-6">
                                Start building your portfolio by searching and adding stocks
                            </p>
                            <a
                                href="/search"
                                className="inline-flex items-center px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow"
                            >
                                <svg
                                    className="w-4 h-4 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                Search Stocks
                            </a>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};
