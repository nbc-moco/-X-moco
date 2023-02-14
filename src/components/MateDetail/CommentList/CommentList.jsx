import { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { collection, onSnapshot } from 'firebase/firestore';
import { CommentListBody } from './style';
import Comment from '../Comment';

const CommentList = ({ comment }) => {
  // 데이터 실시간 변경 확인
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const getPost = onSnapshot((snapshot) => {
      const testComment = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(testComment);
    });
    return getPost;
  }, []);

  return (
    <CommentListBody>
      {comments
        .filter((user) => user.uid === comment.uid)
        .map((user) => {
          return <Comment key={comment.uid} user={user.nickname} />;
        })}
    </CommentListBody>
  );
};
export default CommentList;
