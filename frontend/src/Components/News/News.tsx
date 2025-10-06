import React, {useEffect, useState} from 'react'
import type {StockNews} from "../../company";
import axios from "axios";
import {getNews} from "../../api.tsx";
import {useOutletContext} from "react-router-dom";
interface Props {}
const News : React.FC<Props> = () => {
    const ticker = useOutletContext<string>();
    const [news,setNews]=useState<StockNews[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(()=>{
        const GetNews = async () =>{
            const result=await getNews(ticker);
            const res=result.data;
            res.sort((a,b)=>a.publishedDate-b.publishedDate)
            setNews(res);
        }
        GetNews();
    },[ticker])

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % news.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (!news || news.length === 0) {
        return (
            <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
                <p className="text-gray-500">No news available</p>
            </div>
        );
    }

    const currentArticle = news[currentIndex];
    
    return (
        <>
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-lg transition-shadow duration-200">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Latest News</h3>
                            <p className="text-sm text-gray-500">{ticker} Updates</p>
                        </div>
                        <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-600">
                            {currentIndex + 1} / {news.length}
                        </span>
                        </div>
                    </div>
                </div>

                {/* Main Content - Swipeable Area */}
                <div className="relative">
                    {/* Article Card */}
                    <div className="p-6">
                        {/* Image */}
                        {currentArticle.image && (
                            <div className="mb-4 rounded-xl overflow-hidden">
                                <img
                                    src={currentArticle.image}
                                    alt={currentArticle.title}
                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        )}

                        {/* Publisher and Date */}
                        <div className="flex items-center space-x-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                            {currentArticle.publisher}
                        </span>
                            <span className="text-xs text-gray-500">
                            {formatDate(currentArticle.publishedDate)}
                        </span>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                            {currentArticle.title}
                        </h4>

                        {/* Text Preview */}
                        {currentArticle.text && (
                            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
                                {currentArticle.text}
                            </p>
                        )}

                        {/* Read More Link */}
                        {currentArticle.url && (
                            <a
                                href={currentArticle.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-sm"
                            >
                                Read Full Article
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Previous article">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        aria-label="Next article">
                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-center space-x-2">
                        {news.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-200 ${
                                    index === currentIndex
                                        ? 'w-8 bg-green-500'
                                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                                }`}
                                aria-label={`Go to article ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default News
