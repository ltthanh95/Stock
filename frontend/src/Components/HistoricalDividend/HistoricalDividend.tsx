import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { getHistoricalDividend } from "../../api";
import SimpleLineChart from "../SimpleChart/SimpleChart";
import type { Dividend } from "../../company";
import HistoricalEarnings from "./Earnings/HistoricalEarnings.tsx";

type Props = {};

const HistoricalDividend = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [dividend, setDividend] = useState<Dividend[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistoricalDividend = async () => {
            try {
                setLoading(true);
                const value = await getHistoricalDividend(ticker);

                const mapping = value.data.map((r: any) => ({
                    symbol: r.symbol,
                    date: r.date,
                    adjDividend: r.adjDividend,
                    dividend: r.dividend,
                    recordDate: r.recordDate,
                    paymentDate: r.paymentDate,
                    declarationDate: r.declarationDate,
                    yield: r.yield,
                    frequency: r.frequency,
                }));

                const currentYear = new Date().getFullYear();

                const res = mapping
                    .sort((a: any, b: any) => new Date(a.date).getTime() - new Date(b.date).getTime())
                    .filter((obj: any) => {
                        const year = new Date(obj.recordDate).getFullYear();
                        return year >= currentYear - 3 && year <= currentYear;
                    });

                setDividend(res);
            } catch (error) {
                console.error('Error fetching dividend data:', error);
                setDividend([]);
            } finally {
                setLoading(false);
            }
        };

        if (ticker) {
            fetchHistoricalDividend();
        }
    }, [ticker]);

    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
                <p className="text-gray-500">Loading dividend history...</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Dividend Chart */}
            {dividend && dividend.length > 0 ? (
                <SimpleLineChart data={dividend} xAxis="date" dataKey="yield" />
            ) : (
                <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
                    <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">No Dividend History</h3>
                    <p className="text-sm text-gray-500">This company does not have dividend payments in the last 3 years</p>
                </div>
            )}

            {/* Earnings Charts */}
            <HistoricalEarnings />
        </div>
    );
};

export default HistoricalDividend;