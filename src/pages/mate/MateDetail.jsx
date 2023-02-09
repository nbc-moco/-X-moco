import React from 'react';
import styled from '@emotion/styled';
import Comment from './../../components/MateDetail/Comment';
import MateDetailWriting from './../../components/MateDetail/MateDetailWriting';
import MateDetailInfo from './../../components/MateDetail/MateDetailInfo';

const MateDetail = () => {
  return (
    <MateDetailWrap>
      <MateDetailContainer>
        <MateDetailInfo />
        <MateDetailWriting />
      </MateDetailContainer>
      <MapWrap />
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
  margin: 64px 565px 0px 565px;
`;
const MateDetailContainer = styled.div``;
const MapWrap = styled.div``;
const CommentWrap = styled.div``;
