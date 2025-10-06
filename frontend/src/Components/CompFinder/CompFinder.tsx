import React, { useEffect, useState } from "react";
import CompFinderItem from "./CompFinderItem/CompFinderItem";
import type {CompanyCompData} from "../../company";
import { getCompData } from "../../api";
import Spinner from "../Spinners/Spinner";
type Props = {
    ticker: string;
};

const CompFinder = ({ ticker }: Props) => {
    const [companyData, setCompanyData] = useState<CompanyCompData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (!ticker) {
            setIsLoading(false);
            return;
        }

        const getComps = async () => {
            setIsLoading(true);
            try {
                const value = await getCompData(ticker);
                setCompanyData(value?.data || []);
            } catch (error) {
                setCompanyData([]);
            } finally {
                setIsLoading(false);
            }
        };

        getComps();
    }, [ticker]);
    return (
        <div className="inline-flex rounded-md shadow-sm m-4" role="group">
            {isLoading ? (
                <Spinner />
            ) : companyData.length > 0 ? (
                companyData.map((company) => {
                    return <CompFinderItem key={company.symbol} ticker={company.symbol} />;
                })
            ) : (
                <p className="text-gray-500">No peers found</p>
            )}
        </div>
    );
};

export default CompFinder;