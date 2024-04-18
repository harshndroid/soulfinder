import React from 'react';
import AppConstants from '../../../constants/AppConstants';
import Styles from '../../../styles/DashboardStyles';

const Photo = ({ ele }) => {
  const isTravellerActive =
    Date.now() - ele.lastSeenAt <=
    AppConstants.LAST_SEEN_DURATION_LIMIT * 60 * 1000
      ? true
      : false;
  return (
    <div style={Styles.imgWrapper}>
      <img alt="img" style={Styles.img} src={ele.photoUrl} />
      <div
        style={{
          ...Styles.statusCard,
          backgroundColor: isTravellerActive ? '#1da05f' : '#acacac',
        }}
      >
        {isTravellerActive ? 'Active' : 'Inactive'}
      </div>
      <div style={{ fontSize: 14 }}>
        {ele.name}, {ele.age}
      </div>
    </div>
  );
};

export default Photo;
