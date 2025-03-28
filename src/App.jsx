import { Provider } from 'react-redux';
import { store } from './Redux/store';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;