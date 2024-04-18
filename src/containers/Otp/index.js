import React, { useState } from 'react';
import Background from './Background';
import Heading from './Heading';
import OtpInput from './OtpInput';
import OtpButton from './OtpButton';
import Styles from '../../styles/AuthPageStyles';

const Otp = () => {
  const [otp, setOtp] = useState('');

  return (
    <div style={Styles.main}>
      <Background />
      <Heading />
      <div style={Styles.bottomWrapper}>
        <OtpInput setOtp={setOtp} />
        <OtpButton />
      </div>
    </div>
  );
};

export default Otp;
