'use client';

import { useEffect } from 'react';

export function ErrorBoundary({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="py-4 text-center">
      <h2 className="text-lg font-semibold text-red-600">
        Something went wrong!
      </h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button
        className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
