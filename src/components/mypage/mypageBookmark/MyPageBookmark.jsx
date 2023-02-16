import React from 'react';
import CardSection from '../../../shared/CardSection';
import {
  MyBookmarkBody,
  MyBookmarkTitle,
  MyBookmarkList,
} from './MyPageBookmarkStyle';

const MyPageBookmark = () => {
  return (
    <MyBookmarkBody>
      <MyBookmarkTitle>스크랩</MyBookmarkTitle>
      <MyBookmarkList>{/* <CardSection /> */}</MyBookmarkList>
    </MyBookmarkBody>
  );
};

export default MyPageBookmark;

// TODO: 북마크 할 카드를 누를 때 updateDoc으로 아이다 값을 넣어주고, 마이페이지에서 해당 아이디
//  값을 필터링 해서 가져온다
