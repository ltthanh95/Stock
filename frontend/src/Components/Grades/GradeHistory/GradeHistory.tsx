import React, { useEffect, useState } from 'react';
import type { GradeHistory } from "../../../company";
import { useOutletContext } from "react-router-dom";
import { getGradeHistory } from "../../../api.tsx";

interface GradeHistoryProps {}

const GradeHistorical: React.FC<GradeHistoryProps> = () => {
    const ticker = useOutletContext<string>();
    const [gradeHistory, setGradeHistory] = useState<GradeHistory | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGradeHistory = async () => {
            try {
                setLoading(true);
                const response = await getGradeHistory(ticker);
                const data = response.data;

                // Sort by date descending and get most recent
                data.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
                setGradeHistory(data[0]);
            } catch (error) {
                console.error('Error fetching grade history:', error);
            } finally {
                setLoading(false);
            }
        };

        if (ticker) {
            fetchGradeHistory();
        }
    }, [ticker]);

    if (loading || !gradeHistory) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <p className="text-gray-500">Loading analyst ratings...</p>
            </div>
        );
    }

    const total =
        gradeHistory.analystRatingsStrongBuy +
        gradeHistory.analystRatingsBuy +
        gradeHistory.analystRatingsHold +
        gradeHistory.analystRatingsSell +
        gradeHistory.analystRatingsStrongSell;

    const getPercentage = (value: number) => {
        return ((value / total) * 100).toFixed(1);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const ratingCategories = [
        {
            label: 'Strong Buy',
            value: gradeHistory.analystRatingsStrongBuy,
            color: 'bg-green-600',
            lightColor: 'bg-green-100',
            textColor: 'text-green-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            label: 'Buy',
            value: gradeHistory.analystRatingsBuy,
            color: 'bg-green-500',
            lightColor: 'bg-green-50',
            textColor: 'text-green-600',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            label: 'Hold',
            value: gradeHistory.analystRatingsHold,
            color: 'bg-gray-400',
            lightColor: 'bg-gray-50',
            textColor: 'text-gray-600',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            label: 'Sell',
            value: gradeHistory.analystRatingsSell,
            color: 'bg-red-500',
            lightColor: 'bg-red-50',
            textColor: 'text-red-600',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            label: 'Strong Sell',
            value: gradeHistory.analystRatingsStrongSell,
            color: 'bg-red-600',
            lightColor: 'bg-red-100',
            textColor: 'text-red-700',
            icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.293a1 1 0 00-1.414-1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3z" clipRule="evenodd" />
                </svg>
            )
        }
    ];

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Analyst Ratings</h3>
                <p className="text-sm text-gray-500">
                    {total} analysts • Updated {formatDate(gradeHistory.date)}
                </p>
            </div>

            {/* Rating Bars */}
            <div className="space-y-4">
                {ratingCategories.map((category) => (
                    <div key={category.label}>
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                                <span className={category.textColor}>
                                    {category.icon}
                                </span>
                                <span className="text-sm font-semibold text-gray-900">
                                    {category.label}
                                </span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-sm font-medium text-gray-600">
                                    {category.value}
                                </span>
                                <span className="text-xs font-semibold text-gray-500 w-10 text-right">
                                    {getPercentage(category.value)}%
                                </span>
                            </div>
                        </div>
                        <div className={`w-full h-3 ${category.lightColor} rounded-full overflow-hidden`}>
                            <div
                                className={`h-full ${category.color} rounded-full transition-all duration-500`}
                                style={{ width: `${getPercentage(category.value)}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Summary */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Bullish</p>
                        <p className="text-lg font-bold text-green-600">
                            {gradeHistory.analystRatingsStrongBuy + gradeHistory.analystRatingsBuy}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Neutral</p>
                        <p className="text-lg font-bold text-gray-600">
                            {gradeHistory.analystRatingsHold}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Bearish</p>
                        <p className="text-lg font-bold text-red-600">
                            {gradeHistory.analystRatingsSell + gradeHistory.analystRatingsStrongSell}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GradeHistorical;