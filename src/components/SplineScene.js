'use client';

import { useEffect, useRef, useState } from 'react';
import { Application } from '@splinetool/runtime';

export default function SplineScene({ scene, className = '' }) {
  const canvasRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const app = new Application(canvasRef.current);

    // Add error handling
    try {
      app.load(scene)
        .catch(err => {
          console.error('Error loading Spline scene:', err);
          setError(true);
        });
    } catch (err) {
      console.error('Error initializing Spline scene:', err);
      setError(true);
    }

    // Return cleanup function
    return () => {
      // No cleanup needed
    };
  }, [scene]);

  // Show a fallback if there's an error
  if (error) {
    return (
      <div className={`${className} bg-gray-100 flex items-center justify-center rounded-lg`}>
        <div className="text-center p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mx-auto text-gray-400 mb-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <p className="text-gray-600">Interactive 3D visualization unavailable</p>
        </div>
      </div>
    );
  }

  return <canvas ref={canvasRef} className={className} />;
}

