
import React from 'react';

interface HeaderProps {
  onReset: () => void;
}

const Header: React.FC<HeaderProps> = ({ onReset }) => {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div 
          className="flex items-center space-x-2 cursor-pointer group"
          onClick={onReset}
        >
          <div className="w-10 h-10 bg-turquoise rounded-xl flex items-center justify-center shadow-lg shadow-turquoise/20 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">SoloWrite<span className="text-turquoise">AI</span></span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-400">
          <a href="#" className="hover:text-turquoise transition-colors">Features</a>
          <a href="#" className="hover:text-turquoise transition-colors">Pricing</a>
          <button 
            onClick={onReset}
            className="px-5 py-2 rounded-full bg-slate-800 text-white hover:bg-slate-700 border border-slate-700 transition-all"
          >
            New Article
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
