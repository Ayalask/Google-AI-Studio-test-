
import React, { useState } from 'react';
import { GeneratedContent } from '../types';

interface ResultDisplayProps {
  results: GeneratedContent;
  onReset: () => void;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ results, onReset }) => {
  const [activeTab, setActiveTab] = useState<'article' | 'social' | 'seo'>('article');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in zoom-in-95 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-white leading-tight">{results.title}</h2>
          <p className="text-slate-400 mt-2">Ready to publish article & assets</p>
        </div>
        <button
          onClick={onReset}
          className="flex items-center justify-center space-x-2 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl border border-slate-700 transition-all active:scale-95"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          <span>Start Over</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-900 p-1 rounded-2xl border border-slate-800 mb-6">
        <button
          onClick={() => setActiveTab('article')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all ${
            activeTab === 'article' ? 'bg-slate-800 text-turquoise shadow-sm shadow-black/50' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
          </svg>
          <span className="font-semibold text-sm">Main Article</span>
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all ${
            activeTab === 'social' ? 'bg-slate-800 text-turquoise shadow-sm shadow-black/50' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
          </svg>
          <span className="font-semibold text-sm">Social & Email</span>
        </button>
        <button
          onClick={() => setActiveTab('seo')}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 rounded-xl transition-all ${
            activeTab === 'seo' ? 'bg-slate-800 text-turquoise shadow-sm shadow-black/50' : 'text-slate-500 hover:text-slate-300'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="font-semibold text-sm">SEO Strategy</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {activeTab === 'article' && (
            <div className="bg-slate-800/40 rounded-2xl border border-slate-700 overflow-hidden">
              <div className="bg-slate-800/80 px-6 py-3 border-b border-slate-700 flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Draft</span>
                <button 
                  onClick={() => copyToClipboard(results.blogPost)}
                  className="text-turquoise hover:text-turquoise/80 text-xs font-bold flex items-center space-x-1"
                >
                  {copied ? 'Copied!' : 'Copy Markdown'}
                </button>
              </div>
              <div className="p-8 prose prose-invert prose-turquoise max-w-none text-slate-300 whitespace-pre-wrap leading-relaxed font-normal">
                {results.blogPost}
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="space-y-6">
              <div className="bg-slate-800/40 rounded-2xl border border-slate-700 p-6">
                <h4 className="text-white font-bold mb-4 flex items-center">
                  <span className="w-1 h-5 bg-blue-500 rounded-full mr-3"></span>
                  LinkedIn Post
                </h4>
                <p className="text-slate-300 text-sm whitespace-pre-wrap mb-4 bg-slate-900/50 p-4 rounded-xl">
                  {results.socialCaptions.linkedin}
                </p>
                <button onClick={() => copyToClipboard(results.socialCaptions.linkedin)} className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">
                  Copy Caption
                </button>
              </div>

              <div className="bg-slate-800/40 rounded-2xl border border-slate-700 p-6">
                <h4 className="text-white font-bold mb-4 flex items-center">
                  <span className="w-1 h-5 bg-turquoise rounded-full mr-3"></span>
                  Twitter (X) Thread Hook
                </h4>
                <p className="text-slate-300 text-sm whitespace-pre-wrap mb-4 bg-slate-900/50 p-4 rounded-xl">
                  {results.socialCaptions.twitter}
                </p>
                <button onClick={() => copyToClipboard(results.socialCaptions.twitter)} className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">
                  Copy Post
                </button>
              </div>

              <div className="bg-slate-800/40 rounded-2xl border border-slate-700 p-6">
                <h4 className="text-white font-bold mb-4 flex items-center">
                  <span className="w-1 h-5 bg-purple-500 rounded-full mr-3"></span>
                  Newsletter Blurb
                </h4>
                <p className="text-slate-300 text-sm whitespace-pre-wrap mb-4 bg-slate-900/50 p-4 rounded-xl">
                  {results.emailNewsletter}
                </p>
                <button onClick={() => copyToClipboard(results.emailNewsletter)} className="w-full py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-bold transition-colors">
                  Copy Blurb
                </button>
              </div>
            </div>
          )}

          {activeTab === 'seo' && (
            <div className="space-y-6">
              <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
                <h3 className="text-xl font-bold text-white mb-6">Search Engine Visibility</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Meta Title</label>
                    <div className="bg-slate-800/50 p-4 rounded-xl text-turquoise font-medium border border-slate-700">
                      {results.seoTitle}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest block mb-2">Meta Description</label>
                    <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 text-sm border border-slate-700">
                      {results.seoDescription}
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-turquoise/5 rounded-xl border border-turquoise/20 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-turquoise/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-turquoise" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">
                      <strong className="text-white">Pro Tip:</strong> Use the primary keyword in your first H1 and first 100 words for better ranking performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar / Stats */}
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Content Metrics</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-500 text-sm">Estimated Read</span>
                <span className="text-white font-bold">~4 mins</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-500 text-sm">Targeting</span>
                <span className="text-white font-bold text-xs truncate max-w-[120px]">Main Audience</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-500 text-sm">Tone Profile</span>
                <span className="text-turquoise font-bold">Consistent</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-turquoise/20 to-blue-500/20 border border-turquoise/30 rounded-2xl p-6">
            <h4 className="text-white font-bold mb-2">Next Steps</h4>
            <ul className="text-xs text-slate-300 space-y-3">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise mr-2"></span>
                Review and fact-check the draft
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise mr-2"></span>
                Add personal stories or case studies
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise mr-2"></span>
                Paste into your blog CMS
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-turquoise mr-2"></span>
                Schedule your social media posts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDisplay;
