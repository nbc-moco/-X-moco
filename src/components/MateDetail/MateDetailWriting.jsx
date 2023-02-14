import React from 'react';
import styled from '@emotion/styled';

const MateDetailWriting = () => {
  return (
    <>
      <GroupHeader>모임 설명</GroupHeader>
      <GroupBox>
        <GroupPerson>
          <GroupPersonCondition>
            스터디 & 네트워킹 목표 및 진행방식
          </GroupPersonCondition>
          <GroupPersonCondition>
            그때 상황에 따라 온라인/오프라인 모임을 갖는다.
          </GroupPersonCondition>
          <GroupPersonCondition>온라인 소통을 자주합니다.</GroupPersonCondition>
        </GroupPerson>
      </GroupBox>
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
