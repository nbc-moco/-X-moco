import React from 'react';
import {
  MemberSidebar,
  MemberInfoTitle,
  SideWrapper,
  MemberInfoProfile,
  MemberInfoProfileImg,
  MemberInfoProfileTitle,
  MemberInfoProfileName,
  MembersInfoProfileTitle,
  LeaderImgBox,
  MemberInfoHost,
  LeaderPosition,
  LeaderProfileInfo,
  HostBox,
  LeaderBox,
  LeaderName,
  LeaderInfoProfile,
} from './style';
import { useEffect, useState } from 'react';
import { authService, db } from '../../common/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import MemberList from './MemberList';
import { v4 } from 'uuid';

export default function MemberSide() {
  const [nickName, setNickName] = useState('');
  const [profileImg, setProfileImg] = useState('');

  // 팀 리더 정보
  const [teamLeaderInfo, setTeamLeaderInfo] = useState([]);

  // 팀 멤버 정보
  const [teamMemberInfo, setTeamMemberInfo] = useState([]);

  // 이미지 정보 가져오기
  const [teamProfileUserInfo, setTeamProfileUserInfo] = useState([]);

  // 멤버 숫자
  const [meberNumber, setMeberNumber] = useState(1);

  // 내 유저 정보 가져오기
  const teamGetMyUserInfo = () => {
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

  // 팀 유저 정보 가져오기
  const teamGetTeamUserInfo = () => {
    const q = query(collection(db, 'testTeam'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTeamLeaderInfo(newInfo[0]?.teamLeader);
      setTeamMemberInfo(newInfo[0]?.teamMember);
      setMeberNumber(newInfo[0]?.teamMember.length + 1);
    });
    return unsubscribe;
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setNickName(authService.currentUser.displayName);
        setProfileImg(authService.currentUser.photoURL);
        teamGetMyUserInfo();
        teamGetTeamUserInfo();
      } else if (!user) {
        return;
      }
    });
  }, [nickName, profileImg]);

  return (
    <MemberSidebar>
      <SideWrapper>
        <MemberInfoTitle>멤버 정보 👀</MemberInfoTitle>
        <MemberInfoProfileTitle>프로필</MemberInfoProfileTitle>
        <MemberInfoProfile>
          <MemberInfoProfileImg
            src={
              teamProfileUserInfo[0]?.profileImg
                ? teamProfileUserInfo[0].profileImg
                : 'https://imhannah.me/common/img/default_profile.png'
            }
          />
          <MemberInfoProfileName>{nickName ?? '익명'}</MemberInfoProfileName>
        </MemberInfoProfile>
      </SideWrapper>

      <MembersInfoProfileTitle>팀원 ( {meberNumber} )</MembersInfoProfileTitle>

      {/* 팅장 */}
      <LeaderInfoProfile>
        <HostBox>
          <MemberInfoHost
            src={teamLeaderInfo?.host ? teamLeaderInfo.host : ''}
          />
        </HostBox>

        <LeaderBox>
          <LeaderImgBox>
            <MemberInfoProfileImg
              src={
                teamLeaderInfo?.profileImg
                  ? teamLeaderInfo.profileImg
                  : 'https://imhannah.me/common/img/default_profile.png'
              }
            />
          </LeaderImgBox>

          <LeaderProfileInfo>
            <LeaderName>{teamLeaderInfo.nickname}</LeaderName>
            <LeaderPosition>{teamLeaderInfo.teamPosition}</LeaderPosition>
          </LeaderProfileInfo>
        </LeaderBox>
      </LeaderInfoProfile>
      {teamMemberInfo
        .filter((item) => item.isWait === false)
        .map((item) => {
          return <MemberList item={item} key={v4()} />;
        })}
    </MemberSidebar>
  );
}
