import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../common/firebase';

const MateDetailWriting = () => {
  // post 추가하고 삭제하는거 진행을 도와줄 state
  const [post, setPost] = useState([]);
  // db의 post 컬렉션을 가져옴
  const usersCollectionRef = collection(db, 'post');

  // 시작될때 한번만 실행
  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getPost = async () => {
      // getDoc으로 컬렉션안에 데이터 가져오기
      const data = await getDoc(usersCollectionRef);
      console.log(data);
    };

    getPost();
  }, []);

  return (
    <GroupWrap>
      <GroupHeader>{post.partyPostTitle}</GroupHeader>
      <GroupUserInfo>
        <GroupImg />
        <GroupUserId>{post.partyName}</GroupUserId>
      </GroupUserInfo>
      <UserHr />
      <GroupBox>
        <GroupPerson>{post.postId}</GroupPerson>
      </GroupBox>
    </GroupWrap>
  );
};

export default MateDetailWriting;

const GroupWrap = styled.div``;
const GroupHeader = styled.h4`
  width: 100%;
  height: 20px;
  margin-top: 90px;
  font-size: 24px;
  font-weight: 500;
`;
const GroupUserInfo = styled.div`
  display: flex;
`;
const GroupImg = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: #d9d9d9;
  margin-top: auto;
`;
const GroupUserId = styled.p`
  margin: 43px 0 0 8px;
  text-align: center;
`;

const GroupBox = styled.div`
  width: 100%;
`;
const GroupPerson = styled.div`
  width: 100%;
  height: 125px;
  margin-top: 30px;
  background-color: #d9d9d9;
`;

const UserHr = styled.hr`
  margin-top: 24px;
  border: 0;
  height: 0;
  border-top: 1px solid #8c8c8c;
`;
