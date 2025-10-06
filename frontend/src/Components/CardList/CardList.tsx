import React, {type JSX, type SyntheticEvent} from 'react'
import Card from '../Cards/Card.tsx';
import type {CompanySearch} from "../../company";
import { v4 as uuidv4 } from "uuid";
interface Props{
    searchResult: CompanySearch[];
    onPortfolioCreate: (e:SyntheticEvent) => void;
}

const CardList: React.FC<Props> = ({searchResult,onPortfolioCreate}:Props) : JSX.Element => {
    
  return (
      <div className="w-full max-w-5xl mx-auto px-4 py-6">
          {searchResult.length > 0 ? (
              <div className="space-y-3">
                  {searchResult.map((result) => {
                      return (
                          <Card
                              id={result.symbol}
                              key={uuidv4()}
                              searchResult={result}
                              onPortfolioCreate={onPortfolioCreate}
                          />
                      );
                  })}
              </div>
          ) : (
              <div className="flex flex-col items-center justify-center py-16 px-4">
                  <div className="w-20 h-20 mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg
                          className="w-10 h-10 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                      >
                          <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          />
                      </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                      No results found
                  </h3>
                  <p className="text-sm text-gray-500 text-center max-w-sm">
                      Try searching for a different stock symbol or company name
                  </p>
              </div>
          )}
      </div>
   
  )
}

export default CardList
