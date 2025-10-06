import React  from 'react'
import type {CompanyProfile} from "../company";
interface Props {
    company: CompanyProfile;
}
const HeroCompanyPage : React.FC<Props> = ({company}) => {
    return (
        <>
            {/* Logo */}
            <div className="flex justify-center mb-6">
                {company.image && (
                    <img
                        src={company.image}
                        alt={company.companyName}
                        className="w-24 h-24 rounded-2xl object-contain bg-white border-2 border-gray-200 p-4 shadow-lg"
                    />
                )}
            </div>

            {/* Company Info - Centered */}
            <div className="text-center">
                {/* Symbol and Change Badge */}
                <div className="flex items-center justify-center space-x-4 mb-3">
                    <h1 className="text-5xl font-bold text-gray-900">{company.symbol}</h1>
                    {company.changePercentage !== undefined && (
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-lg font-bold ${
                            company.changePercentage > 0 ? 'bg-green-100 text-green-700' : company.changePercentage < 0 ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                        }`}>
                    {company.changePercentage > 0 && (
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    )}
                    {company.changePercentage < 0 && (
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    )}
                    {company.changePercentage > 0 ? '+' : ''}{company.changePercentage.toFixed(2)}%
                        </span>)}
                </div>

                {/* Company Name */}
                <p className="text-2xl text-gray-600 mb-6 max-w-3xl mx-auto">{company.companyName}</p>

                {/* Quick Info Pills - Centered */}
                <div className="flex flex-wrap justify-center gap-3">
                    {company.ceo && (
                        <div className="flex items-center bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200">
                            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">{company.ceo}</span>
                        </div>
                    )}
                    {company.industry && (
                        <div className="flex items-center bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200">
                            <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span className="text-sm font-medium text-gray-700">{company.industry}</span>
                        </div>
                    )}
                    {company.website && (
                        <a
                            href={company.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-green-50 text-green-700 px-5 py-2.5 rounded-full border border-green-200 hover:bg-green-100 transition-colors font-medium text-sm"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            Visit Website
                        </a>
                    )}
                </div>
            </div>
            
        </>
    );
};

export default HeroCompanyPage;
