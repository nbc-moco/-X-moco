import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MyCommentsBox,
  MyCommentOfComment,
  MyCommentDate,
  MyCommentCommentTitle,
} from './MyPageCommentStyle';

const MyComment = ({ myItem }) => {
  const navigate = useNavigate();
  const navigateComment = () => {
    navigate(`/matedetail/${myItem.mateDetailId}`);
  };
  return (
    <MyCommentsBox onClick={navigateComment}>
      <MyCommentOfComment>{myItem.comment}</MyCommentOfComment>
      <MyCommentDate>{myItem.date}</MyCommentDate>
      <MyCommentCommentTitle>{myItem.commentTitle}</MyCommentCommentTitle>
    </MyCommentsBox>
  );
};

export default MyComment;
