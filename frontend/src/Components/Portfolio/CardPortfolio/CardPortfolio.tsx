import React, { type SyntheticEvent } from 'react';
import { DeletePortfolio } from "../DeletePortfolio/DeletePortfolio.tsx";
import { Link } from "react-router-dom";
import type { PortfolioGet } from "../../../Models/Portfolio.ts";

interface Props {
    portfolioValue: PortfolioGet;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}

export const CardPortfolio: React.FC<Props> = ({ portfolioValue, onPortfolioDelete }) => {
    return (
        <div className="flex flex-col w-full bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group">
            {/* Green accent bar on top */}
            <div className="w-full h-1 bg-gradient-to-r from-green-400 to-green-500"></div>

            {/* Card Content */}
            <Link
                to={`/company/${portfolioValue.symbol}/company-profile`}
                className="flex flex-col p-6"
            >
                {/* Stock Symbol and Status */}
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 group-hover:text-green-500 transition-colors duration-200">
                        {portfolioValue.symbol}
                    </h3>
                    <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            Active
                        </span>
                    </div>
                </div>

                {/* Company Name */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {portfolioValue.companyName}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4"></div>

                {/* Stock Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Purchase Price</p>
                        <p className="text-lg font-bold text-gray-900">
                            ${portfolioValue.purchase.toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Market Cap</p>
                        <p className="text-lg font-bold text-gray-900">
                            {portfolioValue.marketCap > 0
                                ? `$${(portfolioValue.marketCap / 1000000000).toFixed(2)}B`
                                : 'N/A'
                            }
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Industry</p>
                        <p className="text-sm font-semibold text-gray-900 truncate">
                            {portfolioValue.industry}
                        </p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Last Dividend</p>
                        <p className="text-sm font-semibold text-gray-900">
                            {portfolioValue.lastDiv > 0 ? `$${portfolioValue.lastDiv.toFixed(2)}` : 'N/A'}
                        </p>
                    </div>
                </div>

                {/* View Details Link */}
                <div className="flex items-center space-x-1 text-green-500 text-sm font-semibold">
                    <span>View Details</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </Link>

            {/* Bottom section with delete button */}
            <div className="px-6 pb-6">
                <div className="pt-4 border-t border-gray-100">
                    <DeletePortfolio
                        portfolioValue={portfolioValue.symbol}
                        onPortfolioDelete={onPortfolioDelete}
                    />
                </div>
            </div>
        </div>
    );
};