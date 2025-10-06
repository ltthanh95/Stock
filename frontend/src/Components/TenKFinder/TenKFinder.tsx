// TenKFinder.tsx
import React, { useEffect, useState } from "react";
import type { CompanyTenK } from "../../company";
import { getKForm } from "../../api";
import TenKFinderItem from "./TenKFinderItem/TenKFinderItem";
import Spinner from "../Spinners/Spinner";

type Props = {
    ticker: string;
};

const TenKFinder = ({ ticker }: Props) => {
    const [companyData, setCompanyData] = useState<CompanyTenK[]>();

    useEffect(() => {
        const getTenKData = async () => {
            const value = await getKForm(ticker);
            setCompanyData(value?.data);
        };
        getTenKData();
    }, [ticker]);

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 mb-8">
            {/* Header */}
            <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">SEC Filings</h3>
                    <p className="text-sm text-gray-500">10-K Annual Reports</p>
                </div>
            </div>

            {/* Content */}
            {companyData ? (
                <div className="space-y-3">
                    {companyData.slice(0, 5).map((tenK) => (
                        <TenKFinderItem key={tenK.cik + tenK.filingDate} tenK={tenK} />
                    ))}
                </div>
            ) : (
                <div className="flex items-center justify-center py-8">
                    <Spinner />
                </div>
            )}
        </div>
    );
};

export default TenKFinder;