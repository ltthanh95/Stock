import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import type { FinancialMetricsTTM } from "../../company";
import { getKeyMetrics } from "../../api";
import StockChart from "../Charts/StockChart/StockChart.tsx";
import GradeHistorical from "../Grades/GradeHistory/GradeHistory.tsx";
import GradesConsensus from "../Grades/GradesConsensus/GradesConsensus.tsx";

type Props = {};

const CompanyMetric = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<FinancialMetricsTTM>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!ticker) {
            setIsLoading(false);
            return;
        }
        const getCompanyKeyRatios = async () => {
            setIsLoading(true);
            try {
                const value = await getKeyMetrics(ticker);
                setCompanyData(value?.data[0]);
            } catch (error) {
                setCompanyData(undefined);
            } finally {
                setIsLoading(false);
            }
        };

        getCompanyKeyRatios();
    }, [ticker]);

    return (
        <div className="space-y-8">
            {isLoading ? (
                <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                        <p className="text-gray-500 text-lg">Loading metrics...</p>
                    </div>
                </div>
            ) : companyData ? (
                <>
                   

                    {/* Analyst Ratings - Side by Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <GradeHistorical />
                        <GradesConsensus />
                    </div>
                    {/* Stock Chart */}
                    <StockChart symbol={ticker} />
                </>
            ) : (
                <div className="flex items-center justify-center py-20">
                    <div className="text-center">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p className="text-gray-500 text-lg font-medium">No data available</p>
                        <p className="text-gray-400 text-sm mt-2">Please try a different stock symbol</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CompanyMetric;