import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const TopBar = ({ title, content, onClickContent }) => {
  return (
    <div
      style={{
        height: 50,
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: 'rgb(0, 0, 0) 0px -5px 8px 1px',
      }}
    >
      <div style={{ paddingLeft: 10, fontWeight: '600' }}>{title}</div>

      {content ? (
        <img
          alt="img"
          style={{
            width: 35,
            height: 35,
            borderRadius: '50%',
            // backgroundColor: '#ddd',
            objectFit: 'cover',
            marginRight: 10,
          }}
          src={content}
          onClick={onClickContent}
        />
      ) : (
        <AccountCircleIcon
          style={{ fontSize: 32, marginRight: 10 }}
          onClick={onClickContent}
        />
      )}
    </div>
  );
};

export default TopBar;
