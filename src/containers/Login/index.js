import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const Login = () => {
  const [num, setNum] = useState('');
  const navigate = useNavigate();

  return (
    <>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <button
        onClick={() => {
          navigate('/otp', { state: { num } });
        }}
      >
        Get OTP
      </button>
    </>
  );
};

export default Login;
