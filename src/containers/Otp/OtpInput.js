import React from 'react';
import Styles from '../../styles/AuthPageStyles';

const OtpInput = ({ setOtp }) => {
  return (
    <input
      type="number"
      style={Styles.input}
      placeholder="Enter any dummy OTP"
      onChange={(e) => setOtp(e.target.value)}
    />
  );
};

export default OtpInput;
