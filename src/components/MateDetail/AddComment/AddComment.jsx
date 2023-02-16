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
  getDocs,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { authService, db } from '../../../common/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { confirmAlert } from 'react-confirm-alert';
import AlertUI from './AlertUi';

const AddComment = () => {
  const [commentText, setCommentText] = useState('');
  // 파베 인증
  const currentUser = authService.currentUser;

  // 유저 닉네임 - 프로필 가져오기 상태
  const [nickName, setNickName] = useState('');
  const [profileImg, setGetProfileImg] = useState('');

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
        console.log('로그인을 해주세요');
      }
    });
  }, [currentUserName, currentUserUid]);

  // 데이터 올리기
  const NewDate = new Date().toLocaleDateString('kr');

  // 유저 닉네임 - 프로필 가져오기 함수
  const getUserInfo = async () => {
    const q = query(
      collection(db, 'user'),
      where('uid', '==', currentUser.uid),
      // 댓글 내림차순
      orderBy('createdAt', 'desc'),
    );
    await getDocs(q).then((querySnapshot) => {
      const user = [];
      querySnapshot.forEach((doc) => {
        user.push({
          nickName: doc.data().nickname,
          profileImg: doc.data().profileImg,
        });
      });
      setNickName(user[0].nickName);
      setGetProfileImg(user[0].profileImg);
    });
  };

  // 모집

  useEffect(() => {
    if (!currentUser) return;
    getUserInfo();
    console.log(currentUser);
  }, [currentUser]);

  const AddCommentButton = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: commentText,
      userName: currentUser.displayName,
      userId: currentUserUid,
      createdAt: new Date(),
      date: NewDate,
      mateDetailId: '',
    };

    console.log(nickName.displayName);

    if (!authService.currentUser) {
      confirmAlert({
        customUI: ({ onClose }) => {
          return <AlertUI title={'로그인을 해주세요.'} onClose={onClose} />;
        },
      });
      setCommentText('');
    } else if (commentText !== '') {
      await addDoc(collection(db, 'comment'), newComment);
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
              <AddCommentBtn onClick={AddCommentButton}>등록하기</AddCommentBtn>
            </AddCommentBtnDiv>
          </AddCommentListTwo>
        </AddCommentListWrap>
      </AddCommentListAll>
    </>
  );
};

export default AddComment;
