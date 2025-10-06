import React from "react";
import { Link } from "react-router-dom";
import type { CompanyTenK } from "../../../company";

type Props = {
    tenK: CompanyTenK;
};

const TenKFinderItem = ({ tenK }: Props) => {
    const fillingDate = new Date(tenK.filingDate).getFullYear();

    return (
        <Link
            reloadDocument
            to={tenK.finalLink}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-green-50 hover:border-green-200 border border-gray-200 transition-all duration-200 group"
        >
            <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center border border-gray-200 group-hover:border-green-500 transition-colors">
                    <svg className="w-4 h-4 text-gray-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <div>
                    <p className="text-sm font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                        {tenK.formType} - {tenK.symbol}
                    </p>
                    <p className="text-xs text-gray-500">
                        Filed: {fillingDate}
                    </p>
                </div>
            </div>

            <svg className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    );
};

export default TenKFinderItem;