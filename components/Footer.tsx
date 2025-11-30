import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 py-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Mahmud Hasan. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-slate-600 text-sm">Built with React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;