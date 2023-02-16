import React, { useEffect, useState } from 'react';
import { IoMdSend } from 'react-icons/io';
import { getDatabase, ref, set } from 'firebase/database';
import { authService, db } from '../../../common/firebase';
import {
  ChatFormSection,
  ChatInputBody,
  ChatInput,
  ChatBtn,
} from './messageFormStyle';
import { collection, onSnapshot, query, where } from '@firebase/firestore';
import { onAuthStateChanged } from '@firebase/auth';

const MessageForm = () => {
  // 이미지 정보 가져오기
  const [chatUserInfo, setChatUserInfo] = useState('');

  const getUserChatInfo = () => {
    const q = query(
      collection(db, 'user'),
      where('uid', '==', authService.currentUser.uid),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setChatUserInfo(newInfo[0]?.profileImg);
    });

    return unsubscribe;
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        getUserChatInfo();
      }
    });
  }, []);

  // 텍스트 value 값
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  // Enter키 실행
  const EnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  // 메세지 생성
  const user = authService.currentUser;

  const createMessage = () => {
    const message = [
      {
        timestamp: new Date(),
      },
    ];

    message['content'] = content;
    message['teamId'] = '';
    message['user'] = {
      id: user.uid,
      name: user.displayName,
      image: chatUserInfo,
    };

    return message;
  };

  const handleSubmit = async () => {
    // TODO: 추후에 Room ID로 변경

    const db = getDatabase();
    try {
      await set(ref(db, 'messages'), createMessage());

      setContent('');
    } catch (error) {
      alert('채팅 에러');
      setContent('');
    }
  };

  return (
    <ChatFormSection>
      <ChatInputBody>
        <ChatInput
          type="text"
          value={content}
          onChange={handleChange}
          onKeyPress={EnterKeyPress}
        />
      </ChatInputBody>

      {/* TODO: 텍스트 값이 있는 경우에만 전송 버튼 나오게 */}
      <ChatBtn onClick={handleSubmit}>
        <IoMdSend style={{ fontSize: '30px', color: '#343645' }} />
      </ChatBtn>
    </ChatFormSection>
  );
};

export default MessageForm;
