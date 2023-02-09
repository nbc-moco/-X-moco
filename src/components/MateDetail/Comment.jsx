import React from 'react';
import styled from '@emotion/styled';

const Comment = () => {
  return (
    <CommentContainer>
      <CommentContainHeader>댓글</CommentContainHeader>
      <CommentWrap></CommentWrap>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  margin-top: 80px;
`;
const CommentWrap = styled.div``;
const CommentContainHeader = styled.p`
  width: 97px;
  height: 29px;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
`;
