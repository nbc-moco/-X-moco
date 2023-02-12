import React from 'react';
import styled from '@emotion/styled';

const Comment = () => {
  return (
    <CommentContainer>
      <CommentContainHeader>댓글</CommentContainHeader>
      {/* 댓글 내용 */}
      <CommentWrap>
        <CommentUserTitle>사용자</CommentUserTitle>
        <CommentUserWriting>스터디룸으로 모임하기 좋아요</CommentUserWriting>
        <CommentDate>23.01.31 12:34</CommentDate>
        <CommentButton>답글쓰기</CommentButton>
      </CommentWrap>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.div`
  margin-top: 80px;
`;

const CommentContainHeader = styled.p`
  width: 97px;
  height: 29px;
  font-size: 24px;
  font-weight: 500;
  line-height: 29px;
`;
const CommentWrap = styled.div`
  padding: 30px 0 30px 40px;
  background-color: aliceblue;
`;

const CommentUserTitle = styled.p`
  width: 80px;
  height: 20px;
  background-color: #d9d9d9;
`;

const CommentUserWriting = styled.p`
  margin: 8px 0 8px 0;
`;

const CommentDate = styled.p`
  font-weight: 400;
`;

const CommentButton = styled.button``;
