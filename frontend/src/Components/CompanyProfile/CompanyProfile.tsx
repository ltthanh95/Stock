import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import type {CompanyProfile} from "../../company";
import {getCompanyProfile, getKeyMetrics} from "../../api";
import Spinner from "../Spinners/Spinner";
import {
    formatLargeNonMonetaryNumber,
    formatRatio,
} from "../../Helpers/NumberFormatting";
import StockComment from "../StockComment/StockComment";
import Tile from "../Tile/Tile.tsx";
import TenKFinder from "../TenKFinder/TenKFinder.tsx";
import News from "../News/News.tsx";

type Props = {};
const CompanyProfile = (props: Props) => {
    const ticker = useOutletContext<string>();
    const [isLoading, setIsLoading] = useState(true);
    const[company, setCompany]=useState<CompanyProfile>();
    const [error, setError]=useState<{}>();
    useEffect(()=>{
        setIsLoading(true);
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticker!);
            if(result.status!=200){
                setError(result);
            }
            else{
                setCompany(result?.data[0]);
            }

        };
        getProfileInit();
        setIsLoading(false);
    },[])

    return (
        <>
            {isLoading ? (
                // <Spinner isLoading={isLoading} />
                <div className="flex items-center justify-center py-20">
                    <p className="text-gray-500 text-lg">No data available</p>
                </div>
            ) : company ? (
                <>
                    {/* Main Content */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 mb-8">
                        <div className="space-y-8">
                            {/* Description Card */}
                            
                                <div className="flex items-center space-x-3 mb-5">
                                    <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="text-2xl font-bold text-gray-900">About {company.symbol}</h2>
                                </div>
                                <p className="text-gray-700 leading-relaxed text-base">
                                    {company.description}
                                </p>
                        </div>
                    </div>
                    {/* Tools Grid */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Research & Analysis</h2>
                        {/*<CompFinder ticker={company.symbol} />*/}
                        <TenKFinder ticker={company.symbol} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">News</h2>
                        <News />
                    </div>
                   

                </>
            ) : (
                <div className="flex items-center justify-center py-20">
                    <p className="text-gray-500 text-lg">No datas available</p>
                </div>
            )}
        </>
    );
};

export default CompanyProfile;