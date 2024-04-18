import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import Button from '../../components/Button';
import Styles from '../../styles/AuthPageStyles';
import ApiConstants from '../../constants/ApiConstants';
import ApiService from '../../services/ApiService';
import StorageConstants from '../../constants/StorageConstants';
import LocalStorageService from '../../services/LocalStorageService';

const OtpButton = ({ num }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Button
      title="Verify OTP"
      style={Styles.button}
      onClick={() => {
        // call login backend API and get jwt token

        const requestPayload = { phone: location.state.num };
        ApiService.fetchApi(ApiConstants.LOGIN, 'POST', requestPayload)
          .then((res) => {
            if (res.status === 200 || res.status === 201) return res.json();
            else {
              LocalStorageService.removeItem(StorageConstants.USER);
              navigate('/login');
              throw new Error('Api err');
            }
          })
          .then((data) => {
            console.log('login api response', data);
            LocalStorageService.setItem(StorageConstants.USER, data);
            navigate('/dashboard', { state: { num: location.state.num } });
          })
          .catch((e) => console.log('Login api error:', e));
      }}
    />
  );
};

export default OtpButton;
