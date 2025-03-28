import QueryInput from '../components/QueryInput';
import QueryHistory from '../components/QueryHistory';
import ResultsDisplay from '../components/ResultsDisplay';

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <QueryInput />
        <ResultsDisplay />
      </div>
      <div className="lg:col-span-1">
        <QueryHistory />
      </div>
    </div>
  );
};

export default Dashboard;