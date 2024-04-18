import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import StorageConstants from '../../constants/StorageConstants';
import LocalStorageService from '../../services/LocalStorageService';
import Button from '../../components/Button';
import TopBar from '../../components/TopBar';
import Modal from '../../components/Modal';
import ApiConstants from '../../constants/ApiConstants';
import ApiService from '../../services/ApiService';

const Dashboard = () => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState('');
  const [coords, setCoords] = useState({});
  const [users, setUsers] = useState([]);
  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);

  const user = LocalStorageService.getItem(StorageConstants.USER);
  const token = user?.token;
  let headers = {};
  headers.Authorization = `Bearer ${token}`;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        const requestPayload = {
          id: user?.userId,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          lastSeenAt: Date.now(),
        };

        ApiService.fetchApi(ApiConstants.INIT, 'POST', requestPayload)
          .then((res) => {
            if (res.status === 200 || res.status === 201) return res.json();
            else if (res.status === 401 || res.status === 404) {
              LocalStorageService.removeItem(StorageConstants.USER);
              navigate('/login');
              throw new Error('Api err');
            }
          })
          .then((data) => {
            console.log('Init api response', data);
            let updatedUserData = data.data;
            delete updatedUserData['_id'];
            delete updatedUserData['__v'];
            LocalStorageService.setItem(StorageConstants.USER, {
              ...user,
              ...updatedUserData,
            });
            setPhoto(data.data.photoUrl);
          })
          .catch((e) => console.log('Init api error:', e));
      });
    }
  }, []);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    console.log('===distance', d * 1000);
    return d * 1000; // meters
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Modal
        photo={photo}
        open={showUpdateUserModal}
        onClose={() => setShowUpdateUserModal(false)}
      />
      <TopBar
        title="Travelling souls near you"
        content={photo}
        onClickContent={() => setShowUpdateUserModal(true)}
      />
      {users.length === 0 && (
        <Button
          title="Search nearby travellers"
          style={{ position: 'absolute', bottom: 40 }}
          onClick={() => {
            ApiService.fetchApi(ApiConstants.NEAR_BY_TRAVELLERS, 'GET')
              .then((res) => {
                if (res.status === 200 || res.status === 201) return res.json();
                else if (res.status === 404) {
                  throw new Error('Api err');
                }
              })
              .then((data) => {
                const otherUsers = data.filter(
                  (ele) => ele._id !== user?.userId
                );
                console.log(
                  'nearbyTravellers api response',
                  otherUsers,
                  user?.userId
                );

                let usersInRange = [];
                for (let key in otherUsers) {
                  const distance = getDistanceFromLatLonInKm(
                    coords.latitude,
                    coords.longitude,
                    otherUsers[key].location.latitude,
                    otherUsers[key].location.longitude
                  );
                  if (distance) usersInRange.push(otherUsers[key]);
                }
                setUsers(usersInRange);
              })
              .catch((e) => console.log('nearbyTravellers api error:', e));
          }}
        />
      )}
      <div
        style={{
          marginTop: 20,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {users.map((ele) => (
          <div
            key={ele.phone}
            style={{
              boxShadow: 'rgba(0, 0, 0, 0.5) 3px 3px 6px -5px',
              border: '1px solid #e9e4e4',
              borderRadius: '8px',
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 8,
              margin: 8,
              backgroundColor: 'white',
            }}
          >
            <div
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flex: 3,
                justifyContent: 'space-between',
              }}
            >
              <img
                alt="img"
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
                src={ele.photoUrl}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 4,
                  left: 38,
                  fontSize: 12,
                  fontWeight: 'bold',
                  padding: 2,
                  borderRadius: 4,
                  backgroundColor:
                    Date.now() - ele.lastSeenAt <= 1800000
                      ? '#1da05f'
                      : '#acacac',
                  color: 'white',
                }}
              >
                {Date.now() - ele.lastSeenAt <= 1800000 ? 'Active' : 'Inactive'}
              </div>
              <div style={{ fontSize: 14 }}>
                {ele.name}, {ele.age}
              </div>
            </div>
            <div style={{ flex: 1 }}></div>
            <Button
              title="Call"
              style={{ flex: 1 }}
              onClick={() => (window.location.href = `tel:+91${ele.phone}`)}
            />
          </div>
        ))}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Dashboard;
