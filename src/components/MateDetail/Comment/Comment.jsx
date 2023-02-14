import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { doc, updateDoc } from 'firebase/firestore';
import { db, authService } from '../../../common/firebase';
import CustomConfirmUI from './CustomUi';
// import { uuidv4 } from '@firebase/util';
import {
  CommentContainer,
  CommentContainHeader,
  CommentWrap,
  CommentUserName,
  CommentText,
  CommentUserInput,
  CommentUserDate,
  CommentUpdateButton,
  CommentDeleteBtn,
} from './CommentStyle';

const Comment = ({ user }) => {
  // 유저 정보
  // const [nickname, setNickname] = useState('');
  // const [profileImg, setGetProfileImg] = useState('');
  // comment 컬렉션 데이터 저장
  const [comment, setComment] = useState('');
  // const [createdDate, setCreatedDate] = useState('');
  const [editBox, setEditBox] = useState(false);
  const [editValue, setEditValue] = useState(user.comment);
  const [userInput, setUserInput] = useState(false);
  const [toggleBtn, setToggleBtn] = useState(false);
  const [areYouUser, setAreYouUser] = useState(false);

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  // 버튼을 누를 시 userid와 currentuid비교
  const ToggleDropDown = (userId) => {
    const currentUid = authService?.currentUser?.uid;

    if (toggleBtn === false) {
      if (userId === currentUid) {
        setAreYouUser(true);
      }
      setToggleBtn(true);
    } else if (toggleBtn === true) {
      if (userId === currentUid) {
        setAreYouUser(false);
      }
      setToggleBtn(false);
    }
  };

  // 수정&수정완료&삭제
  const editHandler = (comment) => {
    setEditValue(comment);
    setEditBox(true);
  };

  const completeHandler = async (user, comment) => {
    setEditBox(false);
    await updateDoc(doc(db, 'comments', user.id), { comment: comment });
    setToggleBtn(false);
  };

  const deleteHandler = (id) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return <CustomConfirmUI onClose={onClose} id={id} />;
      },
    });
  };

  return (
    <CommentContainer>
      <CommentContainHeader>댓글</CommentContainHeader>
      {/* 댓글 내용 */}
      <CommentWrap>
        <CommentUserName>{user.nickname}</CommentUserName>
        {!editBox ? (
          <CommentText>{user.comment}</CommentText>
        ) : (
          <CommentUserInput
            type="text"
            value={editValue}
            onChange={(e) => handleChange(e)}
          />
        )}
        <CommentUserDate>{user.createddate}</CommentUserDate>
        {!editBox ? (
          <CommentUpdateButton
            onClick={() => {
              editHandler(user.comment);
            }}
          >
            수정하기
          </CommentUpdateButton>
        ) : (
          <CommentUpdateButton
            onClick={() => {
              completeHandler(user, editValue, user.uid);
            }}
          >
            수정완료
          </CommentUpdateButton>
        )}

        <CommentDeleteBtn
          onClick={() => {
            deleteHandler(user.id);
          }}
        >
          삭제
        </CommentDeleteBtn>
      </CommentWrap>
    </CommentContainer>
  );
};

export default Comment;
