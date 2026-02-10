
import React, { useState } from 'react';
import { BlogInputs } from '../types';

interface InputFormProps {
  onSubmit: (inputs: BlogInputs) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSubmit }) => {
  const [inputs, setInputs] = useState<BlogInputs>({
    topic: '',
    audience: 'Small business owners',
    tone: 'Professional & Helpful',
    keyPoints: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputs.topic) return;
    onSubmit(inputs);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Topic */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-300 mb-2">Main Topic or Headline</label>
          <input
            type="text"
            required
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-turquoise focus:border-transparent outline-none transition-all placeholder:text-slate-600"
            placeholder="e.g., Why every solopreneur needs a CRM in 2024"
            value={inputs.topic}
            onChange={(e) => setInputs({ ...inputs, topic: e.target.value })}
          />
        </div>

        {/* Audience */}
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Target Audience</label>
          <input
            type="text"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-turquoise outline-none transition-all"
            placeholder="e.g., Creative Freelancers"
            value={inputs.audience}
            onChange={(e) => setInputs({ ...inputs, audience: e.target.value })}
          />
        </div>

        {/* Tone */}
        <div>
          <label className="block text-sm font-semibold text-slate-300 mb-2">Desired Tone</label>
          <select
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-turquoise outline-none transition-all appearance-none"
            value={inputs.tone}
            onChange={(e) => setInputs({ ...inputs, tone: e.target.value })}
          >
            <option>Professional & Helpful</option>
            <option>Friendly & Casual</option>
            <option>Witty & Energetic</option>
            <option>Deeply technical</option>
            <option>Opinionated & Bold</option>
          </select>
        </div>

        {/* Key Points */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-slate-300 mb-2">Key Points to Include (Optional)</label>
          <textarea
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-turquoise outline-none transition-all h-32 resize-none"
            placeholder="Mention the benefits of automation, save 10 hours a week, cost-effective options..."
            value={inputs.keyPoints}
            onChange={(e) => setInputs({ ...inputs, keyPoints: e.target.value })}
          ></textarea>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-turquoise hover:bg-turquoise/90 text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-turquoise/20 transition-all flex items-center justify-center space-x-2 text-lg active:scale-95"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <span>Generate Article Package</span>
      </button>
      <p className="text-center text-xs text-slate-500">
        AI will craft your blog post, SEO meta, social captions, and email snippet.
      </p>
    </form>
  );
};

export default InputForm;
