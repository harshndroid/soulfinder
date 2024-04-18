import './App.css';
import AppRoutes from './routes';

function App() {
  console.log('===logs');
  window.Buffer = window.Buffer || require('buffer').Buffer;
  return <AppRoutes />;
}

export default App;
