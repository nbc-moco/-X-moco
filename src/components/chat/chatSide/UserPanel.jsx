import { onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { authService } from '../../../common/firebase';

const UserPanel = () => {
  const [myUserNickName, setMyUserNickName] = useState('');
  const [myUserPhoto, setMyUserPhoto] = useState('');

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setMyUserNickName(authService.currentUser.displayName);
        setMyUserPhoto(authService.currentUser.photoURL);
      } else if (!user) {
        return;
      }
    });
    console.log('닉네임', myUserNickName);
    console.log('이미지', myUserPhoto);
  }, [myUserNickName, myUserPhoto]);

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div>
        <img
          src={myUserPhoto}
          alt=""
          width="40"
          height="40"
          style={{ borderRadius: '20px' }}
        />
      </div>
      <div style={{ marginLeft: '10px' }}>{myUserNickName}</div>
    </div>
  );
};

export default UserPanel;
