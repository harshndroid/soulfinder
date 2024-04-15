import { Route, Routes } from 'react-router-dom';
import Bootstrap from '../containers/Bootstrap/index.js';
import Dashboard from '../containers/Dashboard/index.js';
import Login from '../containers/Login/index.js';
import Otp from '../containers/Otp/index.js';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Bootstrap />} />
      <Route path="/login" element={<Login />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
