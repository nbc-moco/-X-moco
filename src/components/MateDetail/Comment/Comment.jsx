import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { collection, addDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db, authService } from '../../../common/firebase';
// import { uuidv4 } from '@firebase/util';

const Comment = () => {
  // 유저 정보
  const [nickname, setNickname] = useState('');
  const [profileImg, setGetProfileImg] = useState('');
  // comment 컬렉션 데이터 저장
  const [comment, setComment] = useState('');
  // const [createdDate, setCreatedDate] = useState('');
  const [editValue, setEditValue] = useState(comment.comment);
  const [userInput, setUserInput] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  // 수정
  const editHandler = (comment) => {
    setComment(comment);
    setUserInput(true);
  };
  const completeHandler = async (user, comment) => {
    setEditBox(false);
    await updateDoc(doc(db, 'comments', user.id), { comment: comment });
    setToggleBtn(false);
  };
  return (
    <CommentContainer>
      <CommentContainHeader>댓글</CommentContainHeader>
      {/* 댓글 내용 */}
      <CommentWrap>
        <CommentUserName>{comment.nickname}</CommentUserName>
        {!userInput ? (
          <CommentText>{comment.comment}</CommentText>
        ) : (
          <CommentUserInput
            type="text"
            value={userInput}
            onChange={handleChange}
          />
        )}
        <CommentUserDate>{comment.createddate}</CommentUserDate>
        {!editBox ? (
          <CommentUpdateButton
            onClick={() => {
              editHandler(comment.comment);
            }}
          >
            수정하기
          </CommentUpdateButton>
        ) : (
          <CommentUpdateButton
            onClick={() => {
              completeHandler(user, editValue, user.userId);
            }}
          >
            수정완료
          </CommentUpdateButton>
        )}
        ;
        <CommentDeleteBtn
          onClick={() => {
            deleteHandler(user.id);
          }}
        >
          삭제
        </CommentDeleteBtn>
        {/* {toggleBtn ? (
            <>
              {areYouUser ? (
                <UpdateDeleteBody>
                  {!editBox ? (
                    <CommentUpdateBtn
                      onClick={() => {
                        editHandler(user.comment);
                      }}
                    >
                      <BsPencil />
                      수정
                    </CommentUpdateBtn>
                  ) : (
                    <CommentUpdateBtn
                      onClick={() =>
                        completeHandler(user, editValue, user.userId)
                      }
                    >
                      완료
                    </CommentUpdateBtn>
                  )}

                  <CommentDeleteBtn
                    onClick={() => {
                      deleteHandler(user.id);
                    }}
                  >
                    <BsFillTrashFill />
                    삭제
                  </CommentDeleteBtn>
                </UpdateDeleteBody>
              ) : (
                <UpdateDeleteBody>
                  <CommentPoliceBtn onClick={() => ClickPolice(user.id)}>
                    <BsFlag />
                    신고
                  </CommentPoliceBtn>
                </UpdateDeleteBody>
              )}
            </>
          ) : (
            <NoneDiv></NoneDiv>
          )} */}
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

  border-radius: 12px;
`;

const CommentUserName = styled.p`
  width: 100px;
  height: 20px;
  background-color: #d9d9d9;
`;
const CommentText = styled.p``;
const CommentUserInput = styled.input`
  margin: 8px 0 8px 0;
`;

const CommentUserDate = styled.p`
  font-size: 12px;
  font-weight: 400;
`;

const CommentUpdateButton = styled.button`
  width: 80px;
  height: 30px;
`;
