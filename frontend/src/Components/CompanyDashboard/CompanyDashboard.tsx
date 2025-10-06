import React from "react";
import { Outlet } from "react-router-dom";
import StockChart from "../Charts/StockChart/StockChart.tsx";
import RatioList from "../RatioList/RatioList.tsx";
import StockComment from "../StockComment/StockComment.tsx";

interface Props {
    children: React.ReactNode;
    ticker: string;
}

const CompanyDashboard = ({ children, ticker }: Props) => {
    return (
        <div className="flex-1 bg-gray-50 min-h-screen">
            <div className="w-full">
               

                <div className="max-w-7xl mx-auto px-8 py-8">
                    <div className="space-y-4">
                        {/* Children Content */}
                        <div>{children}</div>

                        {/* Outlet for nested routes */}
                        <div>{<Outlet context={ticker} />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyDashboard;