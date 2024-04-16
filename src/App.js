import './App.css';
import AppRoutes from './routes';

function App() {
  console.log('====here');
  window.Buffer = window.Buffer || require('buffer').Buffer;
  return <AppRoutes />;
}

export default App;
