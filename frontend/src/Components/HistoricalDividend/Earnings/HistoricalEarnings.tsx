import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import {getEarnings} from "../../../api.tsx";
import type {Earnings} from "../../../company";
import DoubleSimpleChart from "../../SimpleChart/DoubleSimpleChart.tsx";
import GradeHistorical from "../../Grades/GradeHistory/GradeHistory.tsx";
import GradesConsensus from "../../Grades/GradesConsensus/GradesConsensus.tsx";

type Props = {};

const HistoricalEarnings = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [earnings, setEarnings] = useState<Earnings[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEarnings = async () => {
            try {
                setLoading(true);
                const value = await getEarnings(ticker);
                

                if (value.data) {
                    const sortedData = value.data
                        .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
                        .slice(-8); // Last 8 quarters

                    setEarnings(sortedData.filter((e:any)=>{
                        return e.epsActual!=null && e.epsEstimated!=null && e.revenueActual!=null && e.revenueEstimated!=null
                    }));
                }
            } catch (error) {
                console.error('Error fetching earnings data:', error);
                setEarnings([]);
            } finally {
                setLoading(false);
            }
        };

        if (ticker) {
            fetchEarnings();
        }
    }, [ticker]);

    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                <p className="text-gray-500">Loading earnings data...</p>
            </div>
        );
    }

    if (!earnings || earnings.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Earnings Data</h3>
                <p className="text-sm text-gray-500">Earnings data is not available for this company</p>
            </div>
        );
    }

    return (
     
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* EPS Chart */}
                <DoubleSimpleChart
                    data={earnings}
                    xAxis="date"
                    dataKey1="epsActual"
                    dataKey2="epsEstimated"
                    title="Earnings Per Share (EPS)"
                    subtitle="Actual vs Estimated performance"
                    yAxisLabel="EPS ($)"
                    formatValue={(value) => `$${value.toFixed(2)}`}
                    line1Name="Actual EPS"
                    line2Name="Estimated EPS"
                    line1Color="#10B981"
                    line2Color="#6366F1"
                    summaryLabel1="Latest Actual"
                    summaryLabel2="Latest Estimated"
                />

                {/* Revenue Chart */}
                <DoubleSimpleChart
                    data={earnings}
                    xAxis="date"
                    dataKey1="revenueActual"
                    dataKey2="revenueEstimated"
                    title="Revenue"
                    subtitle="Actual vs Estimated performance"
                    formatValue={(value) => `$${(value / 1000000000).toFixed(2)}B`}
                    line1Name="Actual Revenue"
                    line2Name="Estimated Revenue"
                    line1Color="#10B981"
                    line2Color="#6366F1"
                    summaryLabel1="Latest Actual"
                    summaryLabel2="Latest Estimated"
                />
            </div>
            
       
    );
};

export default HistoricalEarnings;