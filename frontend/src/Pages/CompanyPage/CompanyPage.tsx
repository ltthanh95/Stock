import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import type {CompanyProfile, CompanyTenK, Dfc} from "../../company";
import Sidebar from "../../Components/Sidebar/Sidebar.tsx";
import Spinner from "../../Components/Spinners/Spinner.tsx";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard.tsx";
import CompFinder from "../../Components/CompFinder/CompFinder.tsx";
import TenKFinder from "../../Components/TenKFinder/TenKFinder.tsx";
import {getCompanyProfile} from "../../api.tsx";
import {Error} from "../../Components/Error/Error.tsx"
import Tile from "../../Components/Tile/Tile.tsx";
import HeroCompanyPage from "../../Hero/HeroCompanyPage.tsx";

interface Props {}
export const CompanyPage : React.FC<Props> = () => {
    const { ticker } = useParams<{ ticker: string }>();
    const[company, setCompany]=useState<CompanyProfile>();
    const [error, setError]=useState<{}>();
    useEffect(()=>{
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
    },[])
    return (
        // CompanyPage.tsx - Improved Layout
        <>
            {error ? (
                <>
                    <Error error={error} />
                </>
            ) : (
                <>
                    {company ? (
                        <div className="min-h-screen bg-gray-50 flex">
                            <Sidebar />
                            <div className="flex-1 overflow-x-hidden">
                                <div className="bg-white border-b border-gray-200">
                                    <div className="max-w-5xl mx-auto px-8 py-12">
                                        <HeroCompanyPage company={company} />
                                    </div>
                                </div>
                                <CompanyDashboard ticker={ticker!}>
                               
                                   
                                    {/* Main Content */}
                                    <div>
                                        <div className="space-y-4">
                                            {/* Financial Metrics Tile */}
                                            <Tile
                                                title="Stock Performance"
                                                subTitle={"$" + company.price.toFixed(2)}
                                                changePercent={company.changePercentage}
                                                change={company.change}
                                                marketCap={company.marketCap}
                                                beta={company.beta}
                                                lastDividend={company.lastDividend}
                                                volume={company.volume}
                                                averageVolume={company.averageVolume}
                                            />
                                        </div>
                                    </div>
                                </CompanyDashboard>
                            </div>
                        </div>
                    ) : (
                        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                            <Spinner />
                        </div>
                    )}
                </>
            )}
        </>
    );
};
