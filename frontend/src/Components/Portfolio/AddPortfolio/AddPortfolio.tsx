import React, {type SyntheticEvent} from "react";

interface Props {
    onPortfolioCreate: (e:SyntheticEvent) => void;
    symbol:string;
}
export const  AddPortfolio= ({onPortfolioCreate,symbol}:Props) => {
    return (
        <div className="flex flex-col items-center justify-end flex-1 md:flex-row">
            <form onSubmit={onPortfolioCreate}>
                <input readOnly={true} hidden={true} value={symbol} />
                <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-green-500 rounded-full hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 w-full md:w-auto"
                >
                    <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                    Add to Portfolio
                </button>
            </form>
        </div>
    );
};
