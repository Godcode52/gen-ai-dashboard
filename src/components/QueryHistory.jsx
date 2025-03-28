import { useSelector, useDispatch } from 'react-redux';
import { setCurrentQuery } from '../Redux/querySlice';
import { FiClock, FiTrash2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const QueryHistory = () => {
  const { queryHistory } = useSelector((state) => state.queries);
  const dispatch = useDispatch();

  const handleHistoryClick = (query) => {
    dispatch(setCurrentQuery(query));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden h-full">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white flex items-center">
          <FiClock className="mr-2" />
          Query History
        </h2>
        {queryHistory.length > 0 && (
          <button className="text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400 flex items-center transition-colors">
            <FiTrash2 className="mr-1" />
            Clear
          </button>
        )}
      </div>
      <div className="p-2 overflow-y-auto max-h-96">
        {queryHistory.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <p>Your query history will appear here</p>
          </div>
        ) : (
          <AnimatePresence>
            <ul className="space-y-2">
              {queryHistory.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="group"
                >
                  <button
                    onClick={() => handleHistoryClick(item.query)}
                    className="w-full text-left p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 flex justify-between items-start"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.query.length > 40 
                          ? `${item.query.substring(0, 40)}...` 
                          : item.query}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(item.timestamp).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                      {index + 1}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default QueryHistory;