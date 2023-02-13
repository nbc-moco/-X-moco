import React from 'react';
import styled from '@emotion/styled';
import Comment from '../../components/mateDetail/Comment';
import MateDetailWriting from '../../components/mateDetail/MateDetailWriting';

const MateDetail = () => {
  return (
    <MateDetailWrap>
      <MateDetailContainer>
        <MateDetailWriting />
      </MateDetailContainer>
      <CommentWrap>
        <Comment />
      </CommentWrap>
    </MateDetailWrap>
  );
};

export default MateDetail;

const MateDetailWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 300px 230px 300px;
  min-height: 100vh;
  height: 100%;
`;
const MateDetailContainer = styled.div`
  width: 100%;
`;

const CommentWrap = styled.div`
  width: 100%;
`;
