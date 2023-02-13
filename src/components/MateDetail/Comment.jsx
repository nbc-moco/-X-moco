import React, { useState } from 'react';
import styled from '@emotion/styled';

const Comment = () => {
  const [userInput, setUserInput] = useState('');

  return (
    <CommentContainer>
      <CommentContainHeader>댓글</CommentContainHeader>
      {/* 댓글 내용 */}
      <CommentWrap>
        <CommentUserName>사용자 이름{/* {comment.userName} */}</CommentUserName>
        <CommentUserInput
          id="commentInput"
          type="text"
          placeholder="댓글을 남겨보세요"
          onChange={setUserInput}
          value={userInput}
        />
        <CommentButton
        // onClick={}
        // disabled={commentContent === '' ? true : false}
        >
          등록하기
        </CommentButton>
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
  margin-bottom: 30px;
`;
const CommentWrap = styled.form`
  padding: 30px 0 30px 40px;
  background-color: aliceblue;
`;

const CommentUserName = styled.p`
  width: 100px;
  height: 20px;
  background-color: #d9d9d9;
`;

const CommentUserInput = styled.input`
  margin: 8px 0 8px 0;
`;

const CommentButton = styled.button``;
