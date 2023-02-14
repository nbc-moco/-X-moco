import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { db } from '../../common/firebase';

const Comment = () => {
  const [userInput, setUserInput] = useState('');
  const usersCollectionRef = collection(db, 'user', 'comment');

  const creatReview = async () => {
    const loginUser = auth.currentUser;

    if (loginUser) {
      const addRev = await addDoc(usersCollectionRef, {
        //파이어베이스에 저장
        uid: loginUser.uid,
        // comment: comment,
        modify: true,
        displayName: loginUser?.displayName,
      });
    } else {
      alert('로그인을 하세요');
    }
    // console.log(addRev);
  };

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
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 40px 30px 40px;
  background-color: aliceblue;
  box-sizing: border-box;
  border: 1px solid #525252;
  border-radius: 12px;
`;

const CommentUserName = styled.p`
  width: 100px;
  height: 20px;
  background-color: #d9d9d9;
`;

const CommentUserInput = styled.input`
  margin: 8px 0 8px 0;
`;

const CommentButton = styled.button`
  width: 80px;
  height: 30px;
`;
