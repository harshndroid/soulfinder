import React from 'react';
import Styles from '../../styles/AuthPageStyles';
import BackgroundImg from '../../assets/background.webp';

const Background = () => {
  return (
    <div
      style={{
        ...Styles.backgroundImage,
        backgroundImage: `url(${BackgroundImg})`,
      }}
    />
  );
};

export default Background;
