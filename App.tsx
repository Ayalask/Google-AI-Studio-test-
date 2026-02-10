
import React, { useState } from 'react';
import { BlogInputs, GeneratedContent, AppState } from './types';
import { generateBlogContent } from './services/geminiService';
import Header from './components/Header';
import Hero from './components/Hero';
import InputForm from './components/InputForm';
import LoadingState from './components/LoadingState';
import ResultDisplay from './components/ResultDisplay';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [state, setState] = useState<AppState>('IDLE');
  const [results, setResults] = useState<GeneratedContent | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (inputs: BlogInputs) => {
    setState('LOADING');
    setError(null);
    try {
      const data = await generateBlogContent(inputs);
      setResults(data);
      setState('RESULT');
    } catch (err) {
      console.error(err);
      setError("Something went wrong while crafting your content. Please try again.");
      setState('IDLE');
    }
  };

  const handleReset = () => {
    setState('IDLE');
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500">
      <Header onReset={handleReset} />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {state === 'IDLE' && (
          <>
            <Hero />
            <div id="generator" className="mt-12 bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700 p-6 md:p-10 shadow-2xl">
              <InputForm onSubmit={handleSubmit} />
              {error && (
                <div className="mt-4 p-4 bg-red-900/30 border border-red-500/50 text-red-200 rounded-lg text-sm">
                  {error}
                </div>
              )}
            </div>
          </>
        )}

        {state === 'LOADING' && <LoadingState />}

        {state === 'RESULT' && results && (
          <ResultDisplay results={results} onReset={handleReset} />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
