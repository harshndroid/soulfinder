import './App.css';
import AppRoutes from './routes';

function App() {
  window.Buffer = window.Buffer || require('buffer').Buffer;
  return <AppRoutes />;
}

export default App;
