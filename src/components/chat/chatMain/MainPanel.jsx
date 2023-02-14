import {
  child,
  getDatabase,
  onChildAdded,
  onValue,
  ref,
} from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { authService } from '../../../common/firebase';
import MessageBox from './MessageBox';
import MessageForm from './MessageForm';
import MessageHeader from './MessageHeader';

const MainPanel = () => {
  // 메시지 정보 가져오기
  const [AddMessage, setAddtMessage] = useState([]);
  useEffect(() => {
    getMessageData();
  }, []);

  const getMessageData = () => {
    // let teamDataArray = [];

    const db = getDatabase();
    const starCountRef = ref(db, 'messages');
    onValue(starCountRef, (snapshot) => {
      // const data = snapshot.val();
      AddMessage.push(snapshot.val());
      // teamDataArray.push(data);
      setAddtMessage([...AddMessage]);
    });
    console.log('쳇', AddMessage);
  };

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
      >
        {AddMessage.map((team) => {
          return <MessageBox key={team.content} team={team} />;
        })}
      </div>
      <MessageForm />
    </div>
  );
};

export default MainPanel;
