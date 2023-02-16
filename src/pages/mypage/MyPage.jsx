import React from 'react';
import MyPageBookmark from '../../components/mypage/mypageBookmark/MyPageBookmark';
import MyPageComment from '../../components/mypage/mypageComment/MyPageComment';
import Profile from '../../components/mypage/profile/Profile';
import {
  MyPageBody,
  MySection,
  MyProfilSection,
  MyInfoSection,
} from './MyPagestyle';

const MyPage = () => {
  return (
    <MyPageBody>
      <MySection>
        <MyProfilSection>
          <Profile />
        </MyProfilSection>
        <MyInfoSection>
          <MyPageBookmark />
          <MyPageComment />
        </MyInfoSection>
      </MySection>
    </MyPageBody>
  );
};

export default MyPage;
