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
    data: any[];
    xAxis: string;
    dataKey1: string;
    dataKey2: string;
    title: string;
    subtitle?: string;
    yAxisLabel?: string;
    line1Name: string;
    line2Name: string;
    line1Color?: string;
    line2Color?: string;
    summaryLabel1?: string;
    summaryLabel2?: string;
    formatValue?: (value: number) => string;
};

const DoubleSimpleChart = ({data, xAxis, dataKey1, dataKey2, title, subtitle, yAxisLabel, line1Name, line2Name,line1Color = "#10B981", line2Color = "#6366F1", summaryLabel1 = "Latest Actual", summaryLabel2 = "Latest Estimated",formatValue = (value) => `$${value.toFixed(2)}`,}: Props) => {
    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                    <p className="text-sm font-semibold text-gray-900 mb-2">
                        {new Date(label).toLocaleDateString('en-US', {
                            month: 'short',
                            year: 'numeric'
                        })}
                    </p>
                    {payload.map((entry: any, index: number) => (
                        <p key={index} className="text-sm text-gray-700">
                            <span className="font-medium" style={{ color: entry.color }}>
                                {entry.name}:
                            </span>{' '}
                            <span className="font-bold">
                                {formatValue(entry.value)}
                            </span>
                        </p>
                    ))}
                </div>
            );
        }
        return null;
    };
    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
            {/* Header */}
            <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
                {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 10, bottom: 20 }}
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
                        tickFormatter={formatValue}
                        label={yAxisLabel ? {
                            value: yAxisLabel,
                            angle: -90,
                            position: 'insideLeft',
                            style: { fontSize: 12, fill: '#6B7280',}
                        } : undefined}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 12, paddingTop: 20 }} />
                    <Line
                        type="monotone"
                        dataKey={dataKey1}
                        stroke={line1Color}
                        strokeWidth={3}
                        dot={{ fill: line1Color, r: 4 }}
                        activeDot={{ r: 6 }}
                        name={line1Name}
                    />
                    <Line
                        type="monotone"
                        dataKey={dataKey2}
                        stroke={line2Color}
                        strokeWidth={3}
                        strokeDasharray="5 5"
                        dot={{ fill: line2Color, r: 4 }}
                        activeDot={{ r: 6 }}
                        name={line2Name}
                    />
                </LineChart>
            </ResponsiveContainer>

            {/* Summary Stats */}
            <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">{summaryLabel1}</p>
                        <p className="text-lg font-bold" style={{ color: line1Color }}>
                            
                            {data && data.length > 0 ? formatValue(data[data.length - 1][dataKey1]) : 'N/A'}
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-gray-500 mb-1">{summaryLabel2}</p>
                        <p className="text-lg font-bold" style={{ color: line2Color }}>
                            {data && data.length > 0 ? formatValue(data[data.length - 1][dataKey2]) : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoubleSimpleChart;