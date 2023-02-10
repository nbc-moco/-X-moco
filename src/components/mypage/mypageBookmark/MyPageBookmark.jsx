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
      <MyBookmarkTitle>북마크</MyBookmarkTitle>
      <MyBookmarkList>
        <CardSection />
      </MyBookmarkList>
    </MyBookmarkBody>
  );
};

export default MyPageBookmark;
