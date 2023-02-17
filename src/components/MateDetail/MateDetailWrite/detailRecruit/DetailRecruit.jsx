import { collection, query, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { db } from '../../../../common/firebase';

const DetailRecruit = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {
    const postCollectionRef = collection(db, 'post');
    const q = query(postCollectionRef);
    const getPost = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setpost(postData);
    });
    return getPost;
  }, []);
  console.log(post);

  return (
    <RecruitWrap>
      <RecruitArea>
        모임지역
        <AreaDetail>서울시 마포구</AreaDetail>
      </RecruitArea>
      <RecruitDate>
        모임시간
        <DateDetail>평일 오후</DateDetail>
      </RecruitDate>
      <RecruitStack>
        <StackDetail>기술 스택</StackDetail>
      </RecruitStack>
      <RecruitCurrent>
        <RecruitDetail>모집현황</RecruitDetail>
      </RecruitCurrent>
      <RecruitBtn>참여 신청</RecruitBtn>
    </RecruitWrap>
  );
};

export default DetailRecruit;

const RecruitWrap = styled.div`
  width: 280px;
  height: 426px;
  border: 1px solid #d9d9d9;
  background-color: rgba(217, 217, 217, 0.1);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 50px;
`;
const RecruitArea = styled.div`
  width: 40%;
  font-size: 12px;
  font-weight: 400;
`;
const AreaDetail = styled.p`
  width: 60%;
  padding: 20px;
  font-size: 16px;
  font-weight: 500;
`;
const RecruitDate = styled.div``;
const DateDetail = styled.p``;
const RecruitStack = styled.div``;
const StackDetail = styled.p``;
const RecruitCurrent = styled.div``;
const RecruitDetail = styled.div``;
const RecruitBtn = styled.button`
  width: 152px;
  height: 40px;
  border: 1px solid #b9b9b9;
  background: rgba(217, 217, 217, 0.1);
`;
