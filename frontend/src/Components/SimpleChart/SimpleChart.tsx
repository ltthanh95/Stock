import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

type Props = {
    data: any;
    xAxis: string;
    dataKey: string;
    title?: string;
};

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                    {new Date(label).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </p>
                <p className="text-sm text-gray-700">
                    <span className="font-medium">Yield:</span>{' '}
                    <span className="font-bold text-green-600">
                        {(payload[0].value * 100).toFixed(2)}%
                    </span>
                </p>
                {payload[0].payload.dividend && (
                    <p className="text-xs text-gray-500 mt-1">
                        Dividend: ${payload[0].payload.dividend.toFixed(4)}
                    </p>
                )}
            </div>
        );
    }
    return null;
};

const SimpleLineChart = ({ data, xAxis, dataKey, title = "Dividend Yield History" }: Props) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-sm text-gray-500">Last 3 years dividend performance</p>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 10,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                        dataKey={xAxis}
                        tick={{ fontSize: 12, fill: '#6B7280' }}
                        tickFormatter={(value) => {
                            const date = new Date(value);
                            return date.toLocaleDateString('en-US', {
                                month: 'short',
                                year: '2-digit'
                            });
                        }}
                        angle={-45}
                        textAnchor="end"
                        height={60}
                    />
                    <YAxis
                        tick={{ fontSize: 12, fill: '#6B7280' }}
                        tickFormatter={(value) => `${(value * 100).toFixed(1)}%`}
                        label={{
                            value: 'Yield %',
                            angle: -90,
                            position: 'insideLeft',
                            style: { fontSize: 12, fill: '#6B7280' }
                        }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend
                        wrapperStyle={{ fontSize: 12, paddingTop: 20 }}
                        formatter={() => 'Dividend Yield'}
                    />
                    <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke="#10B981"
                        strokeWidth={3}
                        dot={{ fill: '#10B981', r: 4 }}
                        activeDot={{ r: 6, fill: '#059669' }}
                        name="Dividend Yield"
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Avg Yield</p>
                        <p className="text-lg font-bold text-gray-900">
                            {data && data.length > 0
                                ? (data.reduce((sum: number, item: any) => sum + item.yield, 0) / data.length * 100).toFixed(2)
                                : '0.00'
                            }%
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Latest Yield</p>
                        <p className="text-lg font-bold text-green-600">
                            {data && data.length > 0
                                ? (data[data.length - 1].yield * 100).toFixed(2)
                                : '0.00'
                            }%
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">Payments</p>
                        <p className="text-lg font-bold text-gray-900">
                            {data ? data.length : 0}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleLineChart;