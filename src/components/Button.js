import React from 'react';
import MaterialButton from '@mui/material/Button';

const Button = ({ title, onClick, style }) => {
  return (
    <MaterialButton
      variant="contained"
      onClick={onClick}
      style={{
        ...style,
        textTransform: 'capitalize',
        height: 33,
        backgroundColor: '#e4a36b',
      }}
    >
      {title}
    </MaterialButton>
  );
};

export default Button;
