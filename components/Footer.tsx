
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-turquoise rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-white">SoloWrite<span className="text-turquoise">AI</span></span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              Empowering solopreneurs to tell their stories through high-quality, AI-assisted content.
            </p>
          </div>
          
          <div className="flex space-x-12">
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Product</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-turquoise transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-turquoise transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-turquoise transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Support</h5>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-turquoise transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-turquoise transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-turquoise transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© 2024 SoloWrite AI. Built for the modern creator.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-turquoise transition-colors">Twitter</a>
            <a href="#" className="hover:text-turquoise transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-turquoise transition-colors">Email</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
