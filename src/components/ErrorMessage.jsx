import { FiAlertTriangle } from 'react-icons/fi';

const ErrorMessage = ({ message }) => {
  return (
    <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 rounded-lg p-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 pt-0.5">
          <FiAlertTriangle className="h-5 w-5 text-red-500 dark:text-red-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800 dark:text-red-200">Error processing query</h3>
          <p className="text-sm text-red-700 dark:text-red-300 mt-1">
            {message || 'An unexpected error occurred. Please try again.'}
          </p>
          <button className="mt-2 text-sm text-red-600 dark:text-red-400 hover:text-red-500 dark:hover:text-red-300 font-medium">
            Retry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;