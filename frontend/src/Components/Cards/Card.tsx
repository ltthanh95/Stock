import React, {type JSX, type SyntheticEvent} from 'react'
import "./css/Card.css"
import type {CompanySearch} from "../../company";
import { Link } from "react-router-dom";
import {AddPortfolio} from "../Portfolio/AddPortfolio/AddPortfolio.tsx";

interface Props {
    id: string;
    searchResult: CompanySearch;
    onPortfolioCreate: (e:SyntheticEvent) => void;
}
const Card : React.FC<Props> = ({id,searchResult,onPortfolioCreate}: Props) : JSX.Element => {
  return (
      <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between w-full p-5 bg-white rounded-xl border border-gray-100 hover:border-green-500 hover:shadow-md transition-all duration-200 group"
          key={id}
          id={id}>

          {/* Left Section - Company Info */}
          <Link
              to={`/company/${searchResult.symbol}/company-profile`}
              className="flex flex-col space-y-1 mb-4 md:mb-0 md:flex-1">
              <h3 className="font-bold text-gray-900 text-base group-hover:text-green-500 transition-colors duration-200">
                  {searchResult.name}
              </h3>
              <span className="text-sm font-semibold text-gray-500">
            {searchResult.symbol}
        </span>
          </Link>

          {/* Middle Section - Exchange Info */}
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0 md:flex-1 md:justify-center">
              <div className="flex items-center space-x-2">
            <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                Currency
            </span>
                  <span className="text-sm font-semibold text-gray-900 bg-gray-50 px-2.5 py-1 rounded-full">
                {searchResult.currency}
            </span>
              </div>

              <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-500">
                {searchResult.exchange}
            </span>
                  <span className="text-xs text-gray-400">
                {searchResult.exchangeFullName}
            </span>
              </div>
          </div>

          {/* Right Section - Action Button */}
          <div className="w-full md:w-auto md:flex-shrink-0">
              <AddPortfolio
                  onPortfolioCreate={onPortfolioCreate}
                  symbol={searchResult.symbol}
              />
          </div>
      </div>
      
      
  ) 
}

export default Card;