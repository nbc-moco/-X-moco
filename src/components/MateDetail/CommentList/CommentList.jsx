import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { collection, onSnapshot, query } from 'firebase/firestore';
import Comment from '../Comment/Comment';
import styled from '@emotion/styled';

const CommentList = () => {
  // 데이터 실시간 변경 확인
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const postCollectionRef = collection(db, 'comment');
    const q = query(postCollectionRef);
    const getPost = onSnapshot(q, (snapshot) => {
      const testComment = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(testComment);
    });
    return getPost;
  }, []);
  // console.log(comments);

  return (
    <CommentListBody>
      {comments.map((user) => {
        return <Comment key={user.uid} user={user} />;
      })}
    </CommentListBody>
  );
};
export default CommentList;

const CommentListBody = styled.div``;
