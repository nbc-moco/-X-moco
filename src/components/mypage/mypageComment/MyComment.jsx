import React from 'react';
import {
  MyCommentsBox,
  MyCommentOfComment,
  MyCommentDate,
  MyCommentCommentTitle,
} from './MyPageCommentStyle';

const MyComment = ({ myItem }) => {
  return (
    <MyCommentsBox>
      <MyCommentOfComment>{myItem.comment}</MyCommentOfComment>
      <MyCommentDate>{myItem.date}</MyCommentDate>
      <MyCommentCommentTitle>{myItem.commentTitle}</MyCommentCommentTitle>
    </MyCommentsBox>
  );
};

export default MyComment;
