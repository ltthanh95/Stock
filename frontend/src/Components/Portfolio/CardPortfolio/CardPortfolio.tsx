import React, {type SyntheticEvent} from 'react'
import {DeletePortfolio} from "../DeletePortfolio/DeletePortfolio.tsx";

interface Props {
    portfolioValue:string;
    onPortfolioDelete:(e:SyntheticEvent)=>void;
}
export const  CardPortfolio : React.FC<Props>= ({portfolioValue,onPortfolioDelete}) => {
    return (
        <>
            <h4>
                {portfolioValue}
            </h4>
            <DeletePortfolio onPortfolioDelete={onPortfolioDelete} portfolioValue={portfolioValue}/>
        </>
    );
};
