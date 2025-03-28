import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import { FiBarChart2, FiPieChart, FiTrendingUp } from 'react-icons/fi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const ResultsDisplay = () => {
  const [chartType, setChartType] = useState('bar');
  const { results, isLoading, error } = useSelector((state) => state.queries);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  if (!results) return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
          <FiBarChart2 className="text-blue-600 dark:text-blue-300 text-3xl" />
        </div>
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">No results yet</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Submit a query to see visualized data insights for 2025
        </p>
      </div>
    </div>
  );

  const chartData = {
    labels: results.data.map(item => item.month),
    datasets: [
      {
        label: results.query || 'Results',
        data: results.data.map(item => item.value),
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#6B7280',
          font: {
            family: 'Inter, sans-serif'
          }
        }
      },
      tooltip: {
        backgroundColor: '#1F2937',
        titleFont: {
          family: 'Inter, sans-serif'
        },
        bodyFont: {
          family: 'Inter, sans-serif'
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(229, 231, 235, 0.5)'
        },
        ticks: {
          color: '#6B7280'
        }
      },
      x: {
        grid: {
          color: 'rgba(229, 231, 235, 0.5)'
        },
        ticks: {
          color: '#6B7280'
        }
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Results Visualization</h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setChartType('bar')}
            className={`p-2 rounded-lg ${chartType === 'bar' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            title="Bar Chart"
          >
            <FiBarChart2 />
          </button>
          <button
            onClick={() => setChartType('line')}
            className={`p-2 rounded-lg ${chartType === 'line' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            title="Line Chart"
          >
            <FiTrendingUp />
          </button>
          <button
            onClick={() => setChartType('pie')}
            className={`p-2 rounded-lg ${chartType === 'pie' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
            title="Pie Chart"
          >
            <FiPieChart />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Your Question:</h3>
          <p className="text-gray-800 dark:text-gray-200 font-medium">"{results.query}"</p>
        </div>
        
        <div className="h-80 relative">
          {chartType === 'bar' && <Bar data={chartData} options={options} />}
          {chartType === 'line' && <Line data={chartData} options={options} />}
          {chartType === 'pie' && <Pie data={chartData} options={options} />}
        </div>

        <div className="mt-6 overflow-x-auto">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Raw Data:</h3>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Value</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {results.data.map((item, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-700'}>
                  <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">{item.month}</td>
                  <td className="px-4 py-3 text-sm text-gray-800 dark:text-gray-200">{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;