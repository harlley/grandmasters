"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export const CustomErrorPage = ({ error, reset }: ErrorProps) => {
  useEffect(() => {
    console.error("Error caught by error.tsx:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Something Went Wrong!
        </h2>
        <p className="text-gray-700 mb-2">
          We encountered an unexpected issue. Please try again.
        </p>
        {error?.message && (
          <p className="text-sm text-gray-500 mb-1">
            <span className="font-semibold">Details:</span> {error.message}
          </p>
        )}
        {error?.digest && (
          <p className="text-xs text-gray-400 mb-6">Digest: {error.digest}</p>
        )}
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default CustomErrorPage;
