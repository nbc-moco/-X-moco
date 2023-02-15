import React from 'react';
import {
  MemberSidebar,
  MemberInfoTitle,
  SideWrapper,
  MemberInfoProfile,
  MemberInfoProfileImg,
  MemberInfoProfileInfo,
  MemberInfoProfileTitle,
  MemberInfoProfileName,
  MemberInfoProfilePosition,
  MembersInfoProfileTitle,
} from './style';
import { useEffect, useState } from 'react';
import { authService } from '../../common/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export default function MemberSide() {
  const [nickName, setNickName] = useState('');
  const [profileImg, setProfileImg] = useState('');

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setNickName(authService.currentUser.displayName);
        setProfileImg(authService.currentUser.photoURL);
      } else if (!user) {
        return;
      }
    });
  }, [nickName, profileImg]);

  return (
    <>
      <MemberSidebar>
        <MemberInfoTitle>멤버 정보 👀 (6)</MemberInfoTitle>
        <SideWrapper>
          <MemberInfoProfileTitle>프로필</MemberInfoProfileTitle>
          <MemberInfoProfile>
            <MemberInfoProfileImg
              src={profileImg ? profileImg : '/assets/default_profile.png'}
            />
            <MemberInfoProfileInfo>
              <MemberInfoProfileName>
                {nickName ?? '익명'}
              </MemberInfoProfileName>
              <MemberInfoProfilePosition>팀장</MemberInfoProfilePosition>
            </MemberInfoProfileInfo>
          </MemberInfoProfile>
        </SideWrapper>
        <MembersInfoProfileTitle>팀원 (5)</MembersInfoProfileTitle>
        <MemberInfoProfile>
          <MemberInfoProfileImg />
          <MemberInfoProfileInfo>
            <MemberInfoProfileName>정다인</MemberInfoProfileName>
            <MemberInfoProfilePosition>멤버 </MemberInfoProfilePosition>
          </MemberInfoProfileInfo>
        </MemberInfoProfile>
      </MemberSidebar>
    </>
  );
}
