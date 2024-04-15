import React from 'react';
import MaterialButton from '@mui/material/Button';

const Button = ({ title, onClick, style }) => {
  return (
    <MaterialButton variant="contained" onClick={onClick} style={style}>
      {title}
    </MaterialButton>
  );
};

export default Button;
