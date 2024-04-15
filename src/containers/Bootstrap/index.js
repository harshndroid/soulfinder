import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import StorageConstants from '../../constants/StorageConstants';
import LocalStorageService from '../../services/LocalStorageService';

const Bootstrap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = LocalStorageService.getItem(StorageConstants.USER);
    console.log('Bootstrap ~ check for token: ', user?.token);
    if (user?.token) navigate('/dashboard');
    else navigate('/login');
  }, []);

  return <>loading...</>;
};

export default Bootstrap;
