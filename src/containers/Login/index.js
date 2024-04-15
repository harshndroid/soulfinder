import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import Background from '../../assets/background.webp';
import Styles from '../../styles/AuthPageStyles';

const Login = () => {
  const [num, setNum] = useState('');
  const navigate = useNavigate();

  return (
    <div style={Styles.main}>
      <div
        style={{
          ...Styles.backgroundImage,
          backgroundImage: `url(${Background})`,
        }}
      />
      <p style={Styles.title}>Find travelling souls near you...</p>
      <div style={Styles.inputWrapper}>
        <input
          type="number"
          style={Styles.input}
          placeholder="Enter phone number"
          onChange={(e) => setNum(e.target.value)}
        />

        <Button
          title="Get OTP"
          style={Styles.button}
          onClick={() => {
            navigate('/otp', { state: { num } });
          }}
        />
      </div>
    </div>
  );
};

export default Login;
