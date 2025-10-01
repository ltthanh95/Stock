import React, {type SyntheticEvent} from "react";

interface Props {
    onPortfolioCreate: (e:SyntheticEvent) => void;
    symbol:string;
}
export const  AddPortfolio= ({onPortfolioCreate,symbol}:Props) => {
    return (
        <>
            <form onSubmit={onPortfolioCreate}>
                <input readOnly={true} hidden={true} value={symbol} />
                <button type="submit">Add Portfolio</button>
            </form>
        </>
    );
};
