import React from 'react';
import styled from '@emotion/styled';

const MateDetailWriting = () => {
  return (
    <>
      <GroupHeader>모집정보 </GroupHeader>
      <GroupBox>
        <GroupPerson>
          <GroupPersonCondition>10명 이상</GroupPersonCondition>
          <GroupPersonCondition>서울시 마포구</GroupPersonCondition>
          <GroupPersonCondition>스택</GroupPersonCondition>
        </GroupPerson>
      </GroupBox>
      <GroupWrite>
        홈무드 스터디룸으로 모임하기 좋아요 홈무드 스터디룸으로 모임하
      </GroupWrite>
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

const GroupBox = styled.div``;
const GroupPerson = styled.div`
  width: 800px;
  height: 125px;
  margin-top: 30px;
  background-color: #d9d9d9;
`;
const GroupPersonCondition = styled.p``;

const GroupWrite = styled.p``;
