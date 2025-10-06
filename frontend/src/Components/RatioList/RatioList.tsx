type Props = {
    config: any;
    data: any;
};

const RatioList = ({ config, data }: Props) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 mb-8">
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900">Financial Metrics</h3>
                <p className="text-sm text-gray-500">Key performance indicators (TTM)</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {config.map((row: any) => (
                    <div
                        key={row.label}
                        className="bg-gray-50 rounded-xl p-4 hover:bg-green-50 hover:border-green-200 border border-gray-100 transition-all duration-200"
                    >
                        <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                                <h4 className="text-sm font-semibold text-gray-900 mb-1">
                                    {row.label}
                                </h4>
                                {row.subTitle && (
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        {row.subTitle}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-2xl font-bold text-gray-900">
                                {row.render(data)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RatioList;