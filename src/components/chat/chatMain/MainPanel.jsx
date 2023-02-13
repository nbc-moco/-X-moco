import React from 'react';
import MessageForm from './MessageForm';
import MessageHeader from './MessageHeader';

const MainPanel = () => {
  return (
    <div
      style={{
        width: '300px',
        height: '100vh',
        backgroundColor: '#0001',
        marginTop: '20px',
      }}
    >
      <MessageHeader />
      <div
        style={{
          width: '300px',
          height: '550px',

          border: '.2rem solid #0003',
          borderRadius: '4px',
          padding: '1rem',
          marginBottom: '1rem',
          marginTop: '15px',
          overflowY: 'auto',
        }}
      ></div>
      <MessageForm />
    </div>
  );
};

export default MainPanel;
