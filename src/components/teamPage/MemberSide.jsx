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
import { authService, db } from '../../common/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';

export default function MemberSide() {
  const [nickName, setNickName] = useState('');
  const [profileImg, setProfileImg] = useState('');

  // 이미지 정보 가져오기
  const [teamProfileUserInfo, setTeamProfileUserInfo] = useState([]);

  const teamGetUserInfo = () => {
    const q = query(
      collection(db, 'user'),
      where('uid', '==', authService.currentUser.uid),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeamProfileUserInfo(newInfo);
    });
    return unsubscribe;
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setNickName(authService.currentUser.displayName);
        setProfileImg(authService.currentUser.photoURL);
        teamGetUserInfo();
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
              src={
                teamProfileUserInfo[0]?.profileImg
                  ? teamProfileUserInfo[0].profileImg
                  : 'https://imhannah.me/common/img/default_profile.png'
              }
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
          <MemberInfoProfileImg
            src={
              teamProfileUserInfo[0]?.profileImg
                ? teamProfileUserInfo[0].profileImg
                : 'https://imhannah.me/common/img/default_profile.png'
            }
          />

          <MemberInfoProfileInfo>
            <MemberInfoProfileName>정다인</MemberInfoProfileName>
            <MemberInfoProfilePosition>멤버 </MemberInfoProfilePosition>
          </MemberInfoProfileInfo>
        </MemberInfoProfile>
      </MemberSidebar>
    </>
  );
}
