import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { db } from '../../common/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function ContentBoard() {
  const { id } = useParams();
  const [boardContent, setBoardContent] = useState('');
  const [convert, setConvert] = useState(false);
  const postDoc = doc(db, 'post', id);

  const Data = async () => {
    const docSnap = await getDoc(postDoc);
    const classData = docSnap.data();
    if (classData.contentInfo.ContentRule)
      setBoardContent(classData.contentInfo.ContentRule);
  };
  useEffect(() => {
    Data();
  }, []);

  const convertChange = () => {
    setConvert(!convert);
  };
  const updateContentBoard = async () => {
    if (convert) {
      const newContentField = {
        contentBoard: boardContent,
      };
      try {
        await updateDoc(postDoc, newContentField);
      } catch (e) {
        console.log(e);
      } finally {
        console.log('end');
      }
    }
    convertChange();
  };

  return (
    <div>
      <ContentChatArea>
        {convert ? (
          <textarea
            onChange={(e) => {
              setBoardContent(e.target.value);
            }}
            className="text"
            placeholder="내용을 입력하세요"
            value={boardContent}
          />
        ) : (
          <ContentChatArea>
            <p>{boardContent}</p>
          </ContentChatArea>
        )}
        <SubmitBtn onClick={updateContentBoard} type="submit" />
      </ContentChatArea>
    </div>
  );
}

const ContentChatArea = styled.div`
  width: 100%;
  height: 63vh;
  background-color: whitesmoke;
  border-radius: 20px;
`;

const SubmitBtn = styled.button`
  width: 100px;
  height: 30px;
`;
