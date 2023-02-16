import React from 'react';
import CardSection from '../../../shared/CardSection';
import {
  MyCommentBody,
  MyCommetTitle,
  MyCommentList,
} from './MyPageCommentStyle';

const MyPageComment = () => {
  return (
    <MyCommentBody>
      <MyCommetTitle>내가 쓴 댓글</MyCommetTitle>
      <MyCommentList></MyCommentList>
    </MyCommentBody>
  );
};

export default MyPageComment;
