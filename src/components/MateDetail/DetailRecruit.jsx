import React from 'react';
import styled from '@emotion/styled';

const DetailRecruit = () => {
  return (
    <RecruitWrap>
      <RecruitArea>모임지역</RecruitArea>
      <RecruitDate>모임시간</RecruitDate>
      <RecruitStack>기술 스택</RecruitStack>
      <RecruitCurrent>모집현황</RecruitCurrent>
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
  margin: 90px 0 0 0;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  right: 50px;
`;
const RecruitArea = styled.div``;
const RecruitDate = styled.div``;
const RecruitStack = styled.div``;
const RecruitCurrent = styled.div``;
const RecruitBtn = styled.button`
  width: 152px;
  height: 40px;
  border: 1px solid #b9b9b9;
  background: rgba(217, 217, 217, 0.1);
`;
