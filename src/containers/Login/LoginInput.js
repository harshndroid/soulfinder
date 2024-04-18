import React from 'react';
import Styles from '../../styles/AuthPageStyles';

const LoginInput = ({ setNum }) => {
  return (
    <input
      type="number"
      style={Styles.input}
      placeholder="Enter phone number"
      onChange={(e) => setNum(e.target.value)}
    />
  );
};

export default LoginInput;
