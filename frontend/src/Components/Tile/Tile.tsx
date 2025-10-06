interface TileProps {
    title: string;
    subTitle: string;
    iconUrl?: string;
    changePercent?: number;
    website?: string;
    ceo?: string;
    industry?: string;
    // New financial metrics
    marketCap?: number;
    beta?: number;
    lastDividend?: number;
    change?: number;
    volume?: number;
    averageVolume?: number;
}

const Tile: React.FC<TileProps> = ({
                                       title,
                                       subTitle,
                                       iconUrl,
                                       changePercent,
                                       website,
                                       ceo,
                                       industry,
                                       marketCap,
                                       beta,
                                       lastDividend,
                                       change,
                                       volume,
                                       averageVolume
                                   }) => {
    const isPositive = changePercent !== undefined && changePercent > 0;
    const isNegative = changePercent !== undefined && changePercent < 0;

    const changeIsPositive = change !== undefined && change > 0;
    const changeIsNegative = change !== undefined && change < 0;

    // Format market cap
    const formatMarketCap = (value: number) => {
        if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
        if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
        if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
        return `$${value.toFixed(2)}`;
    };

    // Format volume
    const formatVolume = (value: number) => {
        if (value >= 1e9) return `${(value / 1e9).toFixed(2)}B`;
        if (value >= 1e6) return `${(value / 1e6).toFixed(2)}M`;
        if (value >= 1e3) return `${(value / 1e3).toFixed(2)}K`;
        return value.toString();
    };

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
            {/* Header Section */}
            <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                {iconUrl && (
                    <div className="w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 mr-4">
                        <img
                            src={iconUrl}
                            alt={title}
                            className="w-12 h-12 object-contain"
                        />
                    </div>
                )}

                {/* Title and Value */}
                <div className="flex-1">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        {title}
                    </p>
                    <div className="flex items-baseline space-x-3 flex-wrap">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 break-words">
                            {subTitle}
                        </h3>
                        {changePercent !== undefined && (
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                                isPositive
                                    ? 'bg-green-100 text-green-700'
                                    : isNegative
                                        ? 'bg-red-100 text-red-700'
                                        : 'bg-gray-100 text-gray-700'
                            }`}>
                                {isPositive && (
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {isNegative && (
                                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {isPositive ? '+' : ''}{changePercent.toFixed(2)}%
                            </span>
                        )}
                    </div>

                    {/* Price Change Amount */}
                    {change !== undefined && (
                        <div className="mt-2">
                            <span className={`text-sm font-semibold ${
                                changeIsPositive ? 'text-green-600' : changeIsNegative ? 'text-red-600' : 'text-gray-600'
                            }`}>
                                {changeIsPositive ? '+' : ''}{change > 0 ? '$' : '-$'}{Math.abs(change).toFixed(2)} today
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Financial Metrics Grid */}
            {(marketCap !== undefined || beta !== undefined || lastDividend !== undefined || volume !== undefined || averageVolume !== undefined) && (
                <div className="mb-6">
                    <div className="grid grid-cols-2 gap-4">
                        {marketCap !== undefined && marketCap > 0 && (
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                    <p className="text-xs font-semibold text-blue-700 uppercase">Market Cap</p>
                                </div>
                                <p className="text-xl font-bold text-blue-900">{formatMarketCap(marketCap)}</p>
                            </div>
                        )}

                        {beta !== undefined && (
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <p className="text-xs font-semibold text-purple-700 uppercase">Beta</p>
                                </div>
                                <p className="text-xl font-bold text-purple-900">{beta.toFixed(2)}</p>
                            </div>
                        )}

                        {lastDividend !== undefined && lastDividend > 0 && (
                            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-xs font-semibold text-green-700 uppercase">Dividend</p>
                                </div>
                                <p className="text-xl font-bold text-green-900">${lastDividend.toFixed(2)}</p>
                            </div>
                        )}

                        {volume !== undefined && volume > 0 && (
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <p className="text-xs font-semibold text-orange-700 uppercase">Volume</p>
                                </div>
                                <p className="text-xl font-bold text-orange-900">{formatVolume(volume)}</p>
                            </div>
                        )}

                        {averageVolume !== undefined && averageVolume > 0 && (
                            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4">
                                <div className="flex items-center space-x-2 mb-1">
                                    <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    <p className="text-xs font-semibold text-amber-700 uppercase">Avg Volume</p>
                                </div>
                                <p className="text-xl font-bold text-amber-900">{formatVolume(averageVolume)}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Company Info Section */}
            {(website || ceo || industry) && (
                <div className="pt-4 border-t border-gray-100 space-y-3">
                    {ceo && (
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg mr-3">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">CEO</p>
                                <p className="text-sm text-gray-900 font-semibold">{ceo}</p>
                            </div>
                        </div>
                    )}
                    {industry && (
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg mr-3">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Industry</p>
                                <p className="text-sm text-gray-900 font-semibold">{industry}</p>
                            </div>
                        </div>
                    )}
                    {website && (
                        <div className="flex items-center">
                            <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg mr-3">
                                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-500">Website</p>
                                <a
                                    href={website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-green-600 hover:text-green-700 font-semibold hover:underline inline-flex items-center"
                                >
                                    Visit Site
                                    <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Tile;