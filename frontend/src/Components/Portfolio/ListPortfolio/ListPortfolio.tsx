import React, {type SyntheticEvent} from 'react'
import {CardPortfolio} from "../CardPortfolio/CardPortfolio.tsx";

interface Props { 
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
}
export const  ListPortfolio : React.FC<Props>= ({portfolioValues,onPortfolioDelete}) => {
    return (
        <>
        <h3>My Portfolio</h3>
            <ul>
                {portfolioValues && portfolioValues.map((value, index) => (
                    
                    <CardPortfolio key={index} portfolioValue={value} onPortfolioDelete={onPortfolioDelete}/>
                ))}
            </ul>
        </>
    );
};
