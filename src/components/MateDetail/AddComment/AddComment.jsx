import React, { useEffect, useState, ChangeEvent, MouseEvent } from 'react';
import {
  AddCommentListWrap,
  AddCommentListAll,
  AddCommentListTwo,
  AddInputContent,
  AddCommentText,
  AddCommentBtn,
  AddIconBtn,
  AddCommentPlusGit,
  AddCommentDiv,
  AddInputDiv,
  AddCommentBtnDiv,
  BookMark,
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
import CommentList from '../CommentList/CommentList';
import { onAuthStateChanged } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from '../../GlobalComponents/AlertUI/AlertUI';

const AddComment = ({ comment }) => {
  const [commentText, setCommentText] = useState('');

  const AddCommentTextChange = () => {
    setCommentText(comment.target.value);
  };

  // 데이터 올리기
  const NewDate = new Date().toLocaleDateString('kr');

  const AddCommentButton = async () => {
    comment.preventDefault();
    const newComment = {
      comment: commentText,
      createdAt: new Date(),
      date: NewDate,
    };
    if (!authService.currentUser) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'로그인을 해주세요.'} onClose={onClose} />;
        },
      });

      setCommentText('');
    } else if (commentText !== '') {
      await addDoc(collection(db, 'comments'), newComment);

      setCommentText('');
    } else if (commentText === '') {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'댓글을 입력해주세요.'} onClose={onClose} />;
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
              <AddCommentBtn onClick={AddCommentButton}>댓글등록</AddCommentBtn>
            </AddCommentBtnDiv>
          </AddCommentListTwo>
        </AddCommentListWrap>
      </AddCommentListAll>
    </>
  );
};

export default AddComment;
