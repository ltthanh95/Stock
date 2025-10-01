import React, {type SyntheticEvent} from 'react';

interface Props {
    
    portfolioValue:string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}
export const  DeletePortfolio:React.FC<Props>= ({portfolioValue,onPortfolioDelete}) => {
    return (
        <>
           <form onSubmit={onPortfolioDelete}>
               <input hidden={true} value={portfolioValue} />
               <button>X</button>
           </form>
        </>
    );
};
