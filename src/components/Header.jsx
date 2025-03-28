import { useState } from 'react';
import { FiHelpCircle } from 'react-icons/fi';

const Header = () => {
  const [showHelp, setShowHelp] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="bg-white text-blue-600 rounded-lg px-2 py-1 mr-2">AI</span>
          Analytics Dashboard
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setShowHelp(!showHelp)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200"
              aria-label="Show help"
            >
              <FiHelpCircle size={20} />
            </button>
            
            {showHelp && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 p-4 border border-gray-200">
                <h3 className="font-bold text-gray-800 mb-2">Query Examples:</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• "Show monthly sales for 2025"</li>
                  <li>• "Compare Q1 and Q2 revenue"</li>
                  <li>• "Top 5 products by sales"</li>
                  <li>• "Customer growth rate last 6 months"</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;