import React, { useEffect, useState } from 'react';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputContent,
  AddCommentText,
  AddCommentBtn,
  AddCommentDiv,
  AddInputDiv,
  AddCommentBtnDiv,
} from './style';
import {
  collection,
  getDoc,
  doc,
  deleteDoc,
  setDoc,
  addDoc,
} from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
// import AlertUI from '../../GlobalComponents/AlertUI/AlertUI';

const AddComment = ({ user }) => {
  const [commentText, setCommentText] = useState('');
  const [createdDate, setcreatedDate] = useState('');
  // const [changeColor, setChangeColor] = useState<string>(
  //   'rgba(32, 82, 149, 0.6)',
  // );

  const AddCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const [currentUserName, setCurrentUserName] = useState('');
  const [currentUserUid, setCurrentUserUid] = useState('');

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setCurrentUserName(authService.currentUser?.displayName);
        setCurrentUserUid(authService.currentUser?.uid);
      } else if (!user) {
        console.log('로그인 안됨.');
      }
    });
  }, [currentUserName, currentUserUid]);

  // 데이터 올리기
  const NewDate = new Date().toLocaleDateString('kr');

  const AddCommentButton = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: commentText,
      userName: user.nickname,
      userId: user.uid,
      createdAt: new Date(),
      date: NewDate,
    };
    if (!authService.currentUser) {
      confirmAlert({
        customUI: ({ onClose }) => {
          //  return <AlertUI title={'로그인을 해주세요.'} onClose={onClose} />;
        },
      });
      setCommentText('');
    } else if (commentText !== '') {
      await addDoc(collection(db, 'comments'), newComment);
      setCommentText('');
    } else if (commentText === '') {
      confirmAlert({
        customUI: ({ onClose }) => {
          //  return <AlertUI title={'댓글을 입력해주세요.'} onClose={onClose} />;
        },
      });
    }
  };

  return (
    <>
      <AddCommentListAll>
        <AddCommentListWrap>
          <AddCommentListTwo>
            <AddCommentText>
              <AddCommentDiv>댓글</AddCommentDiv>
              <AddInputDiv>
                <AddInputContent
                  onChange={AddCommentTextChange}
                  value={commentText}
                />
              </AddInputDiv>
            </AddCommentText>
            <AddCommentBtnDiv>
              <AddCommentBtn onClick={AddCommentButton}>등록하기</AddCommentBtn>
            </AddCommentBtnDiv>
          </AddCommentListTwo>
        </AddCommentListWrap>
      </AddCommentListAll>
    </>
  );
};

export default AddComment;
