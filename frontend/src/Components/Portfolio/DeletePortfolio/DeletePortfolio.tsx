import React, {type SyntheticEvent} from 'react';

interface Props {
    
    portfolioValue:string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
}
export const  DeletePortfolio:React.FC<Props>= ({portfolioValue,onPortfolioDelete}) => {
    return (
        <>
            <div>
                <form onSubmit={onPortfolioDelete}>
                    <input readOnly={true} hidden={true} value={portfolioValue} />
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-2.5 text-sm font-semibold text-red-600 bg-red-50 rounded-full hover:bg-red-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 group"
                    >
                        <svg
                            className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                        </svg>
                        Remove
                    </button>
                </form>
            </div>
        </>
    );
};
