
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12 md:py-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
        Write Better Blogs, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-turquoise">10x Faster.</span>
      </h1>
      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
        Specifically built for <span className="text-white font-semibold">freelancers and solopreneurs</span>. 
        Go from a rough idea to a polished blog post, SEO meta, and social captions in seconds.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex items-center bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700 text-sm text-slate-300">
          <span className="w-2 h-2 rounded-full bg-turquoise mr-2"></span> No writer's block
        </div>
        <div className="flex items-center bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700 text-sm text-slate-300">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span> SEO Optimized
        </div>
        <div className="flex items-center bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700 text-sm text-slate-300">
          <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span> Social-ready
        </div>
      </div>
    </section>
  );
};

export default Hero;
