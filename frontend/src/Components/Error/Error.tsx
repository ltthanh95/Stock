import React from 'react'

interface ErrorProps {
    error: {
        Error:string;
        Response:string;
    };
}
export const Error : React.FC<ErrorProps> = ({error}) => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <div className="max-w-md w-full">
                {/* Error Card */}
                <div className="bg-white rounded-2xl border border-red-200 p-8 shadow-lg">
                    {/* Error Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center">
                            <svg
                                className="w-8 h-8 text-red-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Error Title */}
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
                        {error.Error || "Something went wrong"}
                    </h2>

                    {/* Error Message */}
                    {error.Response && (
                        <div className="bg-red-50 rounded-lg p-4 mb-6">
                            <p className="text-sm text-red-800 text-center leading-relaxed">
                                {error.Response}
                            </p>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="space-y-3">
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-full hover:bg-green-600 transition-all duration-200 shadow-sm hover:shadow"
                        >
                            Try Again
                        </button>

                        <button
                            onClick={() => window.history.back()}
                            className="w-full px-6 py-3 bg-gray-100 text-gray-700 text-sm font-semibold rounded-full hover:bg-gray-200 transition-all duration-200"
                        >
                            Go Back
                        </button>
                    </div>

                    {/* Help Text */}
                    <p className="text-xs text-gray-500 text-center mt-6">
                        If this problem persists, please contact support
                    </p>
                </div>
            </div>
        </div>
    )
}