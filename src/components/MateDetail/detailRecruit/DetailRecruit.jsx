import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { db } from './../../../common/firebase';
import { useParams } from 'react-router-dom';

const DetailRecruit = () => {
  const { id } = useParams();
  const [post, setpost] = useState([]);

  //useEffect에선 async사용할 수 없음
  const getPost = async () => {
    const q = doc(db, 'post', id);
    const postData = await getDoc(q);
    //비동기
    setpost(postData.data());
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <RecruitWrap>
      <RecruitArea>
        <RecruitFont>모임지역</RecruitFont>
        <AreaDetail>{post.partyLocation}</AreaDetail>
      </RecruitArea>
      <RecruitDate>
        <RecruitFont>모임시간</RecruitFont>
        <DateDetail>{post.partyTime}</DateDetail>
      </RecruitDate>
      <RecruitStack>
        <RecruitFont>기술스택</RecruitFont>
        <StackDetail>{post.Stack}</StackDetail>
      </RecruitStack>
      <RecruitCurrent>
        <RecruitFont>모집현황</RecruitFont>
        <RecruitDetail>{post.partyNum}</RecruitDetail>
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
  top: 150px;
  right: 50px;
`;
const RecruitFont = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
const RecruitArea = styled.div``;
const AreaDetail = styled.p`
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
