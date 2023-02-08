import React from 'react';
import styled from '@emotion/styled';
import Comment from './../../components/MateDetail/Comment';

const MateDetail = () => {
  return (
    <>
      <MateDetailWrap>
        <MateDetailWriting />
      </MateDetailWrap>
      <MapWrap></MapWrap>
      <CommentWrap>
        <Comment />
      </CommentWrap>
    </>
  );
};

export default MateDetail;

const MateDetailWrap = styled.section``;
const MateDetailWriting = styled.div``;
const MapWrap = styled.div``;
const CommentWrap = styled.div``;
