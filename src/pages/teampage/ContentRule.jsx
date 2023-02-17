import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { db } from '../../common/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function ContentRule() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [convert, setConvert] = useState(false);
  const [currentUserId, setCurrentUserId] = useState('');
  const [idUid, setidUid] = useState([]);

  const postDoc = doc(db, 'post', id);

  const Data = async () => {
    const docSnap = await getDoc(postDoc);
    const classData = docSnap.data();
    setidUid(classData.uid);
    if (classData.contentRule) setContent(classData.contentRule);
  };
  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser.uid;
    setCurrentUserId(user);
    console.log('user', user);
    Data();
  }, []);

  const isOwner = idUid === currentUserId ? true : false;

  console.log('?', idUid);
  console.log('!', currentUserId);

  const convertChange = () => {
    setConvert(!convert);
  };
  const updateContentRule = async () => {
    if (convert) {
      const newContentField = {
        contentRule: content,
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
      <ButtonPlaceTitleWrap>
        <ContentTitle>📌 모임 공지</ContentTitle>
        {isOwner && (
          <>
            <SubmitBtn onClick={updateContentRule} type="submit">
              작성
            </SubmitBtn>
          </>
        )}
      </ButtonPlaceTitleWrap>
      <TextAreaWrapper>
        {convert ? (
          <textarea
            onChange={(e) => {
              setContent(e.target.value);
            }}
            className="text"
            placeholder="내용을 입력하세요"
            value={content}
          />
        ) : (
          <ContentCard>
            <p>{content}</p>
          </ContentCard>
        )}
      </TextAreaWrapper>
    </div>
  );
}

const TextAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  .title {
    margin-bottom: 0.7rem;
  }
  .text {
    width: 100%;
    height: 200px;
  }

  input,
  textarea {
    &::-webkit-scrollbar {
      display: none;
    }

    resize: none;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    transition: border 1s;
    padding: 5px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border: 3px solid skyblue;
    }
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  margin-left: auto;
  justify-content: flex-end;
  width: 50px;
  height: 30px;
  text-align: center;
  align-items: center;
  font-size: 15px;
  border: none;
  background-color: transparent;
  color: grey;
`;

const ContentCard = styled.div`
  width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s;
  height: 30vh;
  background-color: whitesmoke;
  p {
    padding: 20px;
  }
`;

const ButtonPlaceTitleWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ContentTitle = styled.a`
  display: flex;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 20px;
  margin-top: 20px;
`;
