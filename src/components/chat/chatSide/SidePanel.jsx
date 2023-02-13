import React from 'react';
import { FaCrown } from 'react-icons/fa';
import ChatRooms from './ChatRooms';
import DirectMessages from './DirectMessages';
import Favorited from './Favorited';
import UserPanel from './UserPanel';

const SidePanel = () => {
  return (
    <div
      style={{
        backgroundColor: '#0001',
        padding: '2rem',
        minHeight: '100vh',
        minWidth: '275px',
        fontWeight: '600',
        fontSize: '1.1rem',
      }}
    >
      <div style={{ marginBottom: '20px' }}>프로필</div>
      <div
        style={{ width: '50px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <FaCrown style={{ color: '#df2525' }} />
      </div>

      <UserPanel />
      <div style={{ marginTop: '35px' }}>팀원</div>
      {/* <Favorited />

      <ChatRooms />

      <DirectMessages /> */}
    </div>
  );
};

export default SidePanel;
