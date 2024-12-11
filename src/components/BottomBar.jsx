import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';
import eLogo from './e.png';

const BottomBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg h-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <nav className="flex justify-between items-center h-full">
          {/* Logo Section */}
          <div className="flex items-center space-x-2 mt-2">
            <img src={eLogo} alt="Logo" className="w-8 h-8" />
          </div>

          {/* Center Text */}
          <div className="flex justify-center text-xl font-medium text-gray-600 w-full mt-1">
            Rodolphe MARTISCHANG - Antoine LANQUETIN - Alexandre VAUTRIN
          </div>

          {/* Logo Section */}
          <div className="flex items-center space-x-2 mt-2">
            <img src={eLogo} alt="Logo" className="w-8 h-8" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default BottomBar;
