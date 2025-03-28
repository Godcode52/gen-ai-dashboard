import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuery, submitQuery, querySuccess } from '../Redux/querySlice';
import { FiSearch, FiSend } from 'react-icons/fi';

const QueryInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const { isLoading, suggestions } = useSelector((state) => state.queries);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    dispatch(setCurrentQuery(inputValue));
    dispatch(submitQuery());
    
    // Simulate AI processing
    setTimeout(() => {
      const mockResults = {
        data: Array.from({ length: 12 }, (_, i) => ({
          month: new Date(2025, i).toLocaleString('default', { month: 'short' }),
          value: Math.floor(Math.random() * 500) + 100
        })),
        type: 'bar',
        query: inputValue
      };
      dispatch(querySuccess(mockResults));
      setInputValue('');
    }, 1500);
  };

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-md transition-all duration-300 mb-6 border-2 ${isFocused ? 'border-blue-500' : 'border-transparent'}`}>
      <form onSubmit={handleSubmit}>
        <div className="p-1">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 px-3 pt-2">
            Ask your data question
          </label>
          <div className="flex items-center gap-2 px-3 pb-3">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="block w-full pl-10 pr-3 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 transition-all duration-200"
                placeholder="E.g., Show monthly sales trends for 2025"
                list="suggestions"
              />
              <datalist id="suggestions">
                {suggestions.map((suggestion, i) => (
                  <option key={i} value={suggestion} />
                ))}
              </datalist>
            </div>
            <button 
              type="submit"
              className={`flex items-center justify-center px-4 py-3 rounded-lg text-white font-medium transition-all duration-200 ${isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'} shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <>
                  <FiSend className="mr-2" />
                  Ask AI
                </>
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QueryInput;