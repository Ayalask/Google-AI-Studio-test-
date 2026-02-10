
import React, { useState, useEffect } from 'react';

const LoadingState: React.FC = () => {
  const [tipIndex, setTipIndex] = useState(0);
  const tips = [
    "Analyzing your target audience...",
    "Brainstorming high-converting headlines...",
    "Structuring the narrative flow...",
    "Adding SEO-friendly keywords...",
    "Crafting snappy social captions...",
    "Finalizing your email blurb..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTipIndex((prev) => (prev + 1) % tips.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-pulse">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-turquoise rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-4 bg-turquoise/10 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-white mb-2">SoloWrite is working...</h2>
      <p className="text-turquoise font-medium h-6">{tips[tipIndex]}</p>
      
      <div className="mt-12 w-full max-w-md bg-slate-800/50 h-2 rounded-full overflow-hidden">
        <div className="h-full bg-turquoise animate-[progress_15s_ease-in-out_infinite]"></div>
      </div>

      <style>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default LoadingState;
