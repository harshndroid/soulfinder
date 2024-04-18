import React from 'react';
import Button from '../../../components/Button';

const CallButton = ({ ele }) => {
  return (
    <Button
      title="Call"
      style={{ flex: 1 }}
      onClick={() => (window.location.href = `tel:+91${ele.phone}`)}
    />
  );
};

export default CallButton;
