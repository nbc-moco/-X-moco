import React from 'react';
import styled from '@emotion/styled';

const MateDetailWriting = () => {
  return (
    <>
      <GroupHeader>모임 정보</GroupHeader>
      <GroupBox>
        <GroupPerson>
          <GroupPersonCondition>10명 이상</GroupPersonCondition>
          <GroupPersonCondition>서울시 마포구</GroupPersonCondition>
          <GroupPersonCondition>스택</GroupPersonCondition>
        </GroupPerson>
      </GroupBox>
      <GroupWriteBox>
        <GroupWriteHeader>빈티지 가구 + 홈무드 스터디룸</GroupWriteHeader>
        <GroupWrite>
          홈무드 스터디룸으로 모임하기 좋아요 홈무드 스터디룸으로 모임하기
          좋아요 홈무드 스터디룸으로 모임하기 좋아요 홈무드 스터디룸으로
          모임하기 좋아요
        </GroupWrite>
      </GroupWriteBox>
    </>
  );
};

export default MateDetailWriting;

const GroupHeader = styled.p`
  width: 150px;
  height: 20px;
  margin-top: 60px;
  font-size: 24px;
  font-weight: 500;
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
const GroupPersonCondition = styled.p``;

const GroupWriteBox = styled.div``;
const GroupWriteHeader = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 50px 0 8px 0px;
`;
const GroupWrite = styled.p``;
