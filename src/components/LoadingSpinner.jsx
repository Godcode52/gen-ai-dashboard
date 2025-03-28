const LoadingSpinner = () => {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
          <div className="absolute inset-2 rounded-full border-4 border-blue-300 border-b-transparent animate-spin animation-delay-150"></div>
        </div>
        <div className="text-center space-y-1">
          <p className="text-gray-800 dark:text-gray-200 font-medium">Processing your query</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Our AI is analyzing your data...</p>
        </div>
      </div>
    );
  };
  
  export default LoadingSpinner;