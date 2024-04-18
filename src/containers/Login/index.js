import React, { useState } from 'react';
import Background from './Background';
import Heading from './Heading';
import LoginInput from './LoginInput';
import LoginButton from './LoginButton';
import Styles from '../../styles/AuthPageStyles';

const Login = () => {
  const [num, setNum] = useState('');

  return (
    <div style={Styles.main}>
      <Background />
      <Heading />
      <div style={Styles.bottomWrapper}>
        <LoginInput setNum={setNum} />
        <LoginButton num={num} />
      </div>
    </div>
  );
};

export default Login;
