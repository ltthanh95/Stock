import React, {useEffect, useRef, useState} from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type {AreaData, CandlestickData, CompanyTenK, HistoricalData} from "../../../company";
import {createChart, ColorType, LineSeries, CandlestickSeries} from 'lightweight-charts';
import type { IChartApi } from 'lightweight-charts';
import axios from "axios";
import Spinner from "../../Spinners/Spinner.tsx";
import {getHistoricalChart} from "../../../api.tsx";


type ChartType = 'area' | 'candlestick';

interface StockChartProps {
    symbol: string;
}
const StockChart: React.FC<StockChartProps> = ({ symbol }) => {
    const chartContainerRef = useRef<HTMLDivElement>(null);
    const chartRef = useRef<IChartApi | null>(null);
    const seriesRef = useRef<any>(null);
    const [chartType, setChartType] = useState<ChartType>('area');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [areaData, setAreaData] = useState<AreaData[]>([]);
    const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);

    // Fetch historical data
    useEffect(() => {
        const getHistoricalData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await getHistoricalChart(symbol);
                

                if (response.data && response.data.length > 0) {
                    // API returns data in descending order (newest first), so reverse it
                    // Take last 100 data points for better performance
                    const limitedData = response.data.reverse();

                    // Format for area chart - convert datetime to Unix timestamp
                    const formattedAreaData = limitedData.map(item => ({
                        time: Math.floor(new Date(item.date).getTime() / 1000) as any,
                        value: item.close
                    }));

                    // Format for candlestick chart - convert datetime to Unix timestamp
                    const formattedCandleData = limitedData.map(item => ({
                        time: Math.floor(new Date(item.date).getTime() / 1000) as any,
                        open: item.open,
                        high: item.high,
                        low: item.low,
                        close: item.close
                    }));

                    setAreaData(formattedAreaData);
                    setCandlestickData(formattedCandleData);
                } else {
                    setError('No data available');
                }
            } catch (err: any) {
                console.error('Error fetching data:', err);
                setError(err.message || 'Failed to fetch data');
            } finally {
                setLoading(false);
            }
        };

        if (symbol) {
            getHistoricalData();
        }
    }, [symbol]);

    // Render chart
    useEffect(() => {
        if (!chartContainerRef.current || loading || error || areaData.length === 0) return;

        if (chartRef.current) {
            chartRef.current.remove();
            chartRef.current = null;
            seriesRef.current = null;
        }
        chartRef.current = createChart(chartContainerRef.current, {
            layout: {
                background: { type: ColorType.Solid, color: '#ffffff' },
                textColor: '#333',
            },
            width: chartContainerRef.current.clientWidth,
            height: 500,
            grid: {
                vertLines: { color: '#f0f0f0' },
                horzLines: { color: '#f0f0f0' },
            },
            rightPriceScale: {
                borderColor: '#e0e0e0',
            },
            timeScale: {
                borderColor: '#e0e0e0',
                timeVisible: true,
                secondsVisible: false,
            },
        });
    

        const chart = chartRef.current;

        // Remove existing series if any
        if (seriesRef.current) {
            chart.removeSeries(seriesRef.current);
            seriesRef.current = null;
        }

        // Add appropriate series based on chart type
        if (chartType === 'area') {
            seriesRef.current = chart.addSeries(LineSeries,{
                color: '#10B981',
              
                lineWidth: 2,
            });
            seriesRef.current.setData(areaData);
        } else {
            seriesRef.current = chart.addSeries(CandlestickSeries,{
                upColor: '#26a69a',
                downColor: '#ef5350',
                borderVisible: false,
                wickUpColor: '#26a69a',
                wickDownColor: '#ef5350',
            });
            seriesRef.current.setData(candlestickData);
        }

        chart.timeScale().fitContent();

        // Handle resize
        const handleResize = () => {
            if (chartContainerRef.current && chartRef.current) {
                chartRef.current.applyOptions({
                    width: chartContainerRef.current.clientWidth
                });
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [chartType, areaData, candlestickData, loading, error]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.remove();
                chartRef.current = null;
            }
        };
    }, []);

    if (loading) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex items-center justify-center h-96">
                    <Spinner />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <div className="flex flex-col items-center justify-center h-96">
                    <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-red-600 font-semibold">Failed to load chart data</p>
                    <p className="text-gray-500 text-sm mt-2">{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
            {/* Header with Toggle */}
            <div className="flex items-center justify-between m-6">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{symbol} Price Chart</h3>
                    <p className="text-sm text-gray-500">5-minute intraday data</p>
                </div>

                {/* Chart Type Toggle */}
                <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                        onClick={() => setChartType('area')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            chartType === 'area'
                                ? 'bg-white text-green-700 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                            </svg>
                            <span>Area</span>
                        </div>
                    </button>
                    <button
                        onClick={() => setChartType('candlestick')}
                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                            chartType === 'candlestick'
                                ? 'bg-white text-green-700 shadow-sm'
                                : 'text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        <div className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                            <span>Candle</span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Chart Container */}
            <div ref={chartContainerRef} className="w-full" />

            {/* Legend */}
            <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-gray-100">
                {chartType === 'area' ? (
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-3 bg-gradient-to-b from-green-400 to-green-50 rounded"></div>
                        <span className="text-xs text-gray-600">Price Movement</span>
                    </div>
                ) : (
                    <>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-green-500 rounded"></div>
                            <span className="text-xs text-gray-600">Bullish</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span className="text-xs text-gray-600">Bearish</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default StockChart;