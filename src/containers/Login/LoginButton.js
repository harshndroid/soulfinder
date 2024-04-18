import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../components/Button';
import Styles from '../../styles/AuthPageStyles';

const LoginButton = ({ num }) => {
  const navigate = useNavigate();
  return (
    <Button
      title="Get OTP"
      style={Styles.button}
      onClick={() => {
        navigate('/otp', { state: { num } });
      }}
    />
  );
};

export default LoginButton;
