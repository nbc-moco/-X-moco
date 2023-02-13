import React from 'react';
import styled from '@emotion/styled';
// import {
//   addDoc,
//   collection,
//   doc,
//   deleteDoc,
//   getDocs,
//   updateDoc,
//   onSnapshot,
//   query,
// } from 'firebase/firestore';
// import { useState, useEffect } from 'react';
// import { db, auth } from '../../apis/firebase';

const MateDetailWriting = () => {
  // const [newReview, setNewReview] = useState('');
  // const [editBox, setEditBox] = useState(false);
  // const [editValue, setEditValue] = useState(reviews.review);
  // const loginUser = auth.currentUser;
  // const usersCollectionRef = collection(db, 'reviews');

  // const handleDelete = async (id, i) => {
  //   if (auth.currentUser.uid === reviews[i].uid) {
  //     const reviewDoc = doc(db, 'reviews', id);
  //     await deleteDoc(reviewDoc);
  //   } else {
  //     alert('작성자가 다릅니다.');
  //     //작성가 다르거나 비로그인 유저에게 버튼이 보이지 않는다면 필요없어짐.
  //   }
  // };

  return (
    <GroupWrap>
      <GroupHeader>[충무로역] 모각코 하실 분 찾습니다</GroupHeader>
      <GroupUserInfo>
        <GroupImg />
        <GroupUserId>스티븐 머큐</GroupUserId>
      </GroupUserInfo>
      <UserHr />
      <GroupBox>
        <GroupPerson>모임 설명~ 에디터 값 불러오기~</GroupPerson>
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
