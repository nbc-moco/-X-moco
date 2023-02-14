import React, { useRef, useState } from 'react';
import { ProgressBar } from 'react-bootstrap';
import { HiOutlinePhotograph } from 'react-icons/hi';
import { IoMdSend } from 'react-icons/io';
import { getDatabase, ref, set, remove, push, child } from 'firebase/database';
import { authService } from '../../../common/firebase';
import { v4 } from 'uuid';
const MessageForm = () => {
  // 텍스트 value 값
  const [content, setContent] = useState('');
  // 로딩중일때
  const [loading, setLoading] = useState(false);
  // 메세지
  const messagesRef = ref(getDatabase(), 'messages');

  const inputOpenImageRef = useRef();

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

  const createMessage = (fileUrl = null) => {
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
      image: user.photoURL,
    };

    return message;
  };

  const handleSubmit = async () => {
    setLoading(true);
    // TODO: 추후에 Room ID로 변경
    // const chatRoom = authService.currentUser;
    const db = getDatabase();
    try {
      await set(ref(db, 'messages'), createMessage());

      setLoading(false);
      setContent('');
    } catch (error) {
      alert('채팅 에러');
      setLoading(false);
      setContent('');
    }
  };

  // const handleUploadImage = () => {};

  // const handleOpenImageRef = () => {
  //   inputOpenImageRef.current.click();
  // };

  return (
    <div>
      <div>
        <div>
          <input
            value={content}
            onChange={handleChange}
            onKeyPress={EnterKeyPress}
          />
        </div>
        <ProgressBar now={60} />
      </div>
      <div>
        {/* TODO: 이미지 전송은 나중에
        <div onClick={handleOpenImageRef}>
          <HiOutlinePhotograph style={{ fontSize: '30px' }} />
        </div> */}
        {/* 전송 */}
        {/* TODO: 텍스트 값이 있는 경우에만 전송 버튼 나오게 */}
        <div onClick={handleSubmit}>
          <IoMdSend style={{ fontSize: '30px' }} />
        </div>
      </div>

      {/* <input
        accept="image/jpeg, image/png"
        style={{ display: 'none' }}
        type="file"
        ref={inputOpenImageRef}
        onChange={handleUploadImage}
      /> */}
    </div>
  );
};

export default MessageForm;
