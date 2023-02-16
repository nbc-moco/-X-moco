import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { authService, db } from '../../../common/firebase';
import MyComment from './MyComment';
import {
  MyCommentBody,
  MyCommetTitle,
  MyCommentList,
} from './MyPageCommentStyle';

const MyPageComment = () => {
  // 댓글
  const [myComment, setMyComment] = useState([]);

  // 댓글 정보 가져오가
  const getMyCommnet = () => {
    const q = query(
      collection(db, 'comment'),
      // where('id', '==', authService.currentUser.uid),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMyComment(newInfo);
    });

    return unsubscribe;
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        getMyCommnet();
      }
    });
  }, []);

  return (
    <MyCommentBody>
      <MyCommetTitle>내가 쓴 댓글</MyCommetTitle>
      <MyCommentList>
        {myComment
          .filter((myItem) => myItem.id === authService.currentUser.uid)
          .map((myItem) => {
            return <MyComment myItem={myItem} key={myItem.id} />;
          })}
      </MyCommentList>
    </MyCommentBody>
  );
};

export default MyPageComment;
