import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { db } from '../../common/firebase';
import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

export default function ContentRule() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [convert, setConvert] = useState(false);
  const postDoc = doc(db, 'post', id);

  const Data = async () => {
    const docSnap = await getDoc(postDoc);
    const classData = docSnap.data();
    if (classData.contentInfo.ContentRule)
      setContent(classData.contentInfo.ContentRule);
  };
  useEffect(() => {
    Data();
  }, []);

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
        <SubmitBtn onClick={updateContentRule} type="submit" />
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
  width: 100px;
  height: 30px;
`;

const ContentCard = styled.div`
  width: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s;
  height: 200px;
  border: 1px solid black;
  p {
    padding: 20px;
  }
`;
