import React from 'react';

const MessageBox = ({ team }) => {
  console.log('team', team);
  return (
    <div style={{ display: 'flex' }} key={team.id}>
      <div style={{ marginRight: '10px' }}>
        <img src={team.user.image} alt="" width={40} />
      </div>
      <div>
        <h6>{team.user.name}</h6>
        <div style={{ fontSize: '1.2rem' }}>{team.content}</div>
      </div>
    </div>
  );
};

export default MessageBox;
