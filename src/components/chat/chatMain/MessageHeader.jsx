import React from 'react';
import { BsChatDots } from 'react-icons/bs';

const MessageHeader = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <BsChatDots style={{ marginRight: '10px', fontSize: '1.5rem' }} />
      실시간 채팅
    </div>
  );
};

export default MessageHeader;
