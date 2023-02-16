import { onAuthStateChanged, updateProfile } from 'firebase/auth';

import React, { useEffect, useRef, useState } from 'react';
import { RiFolderUserFill } from 'react-icons/ri';
import { authService, db } from '../../../common/firebase';
import {
  MyProfileBody,
  ProfileSection,
  ProfileHeaderIcon,
  ProfileImageBody,
  ProfileImage,
  ProfileEditBody,
  EditNickNameInput,
  ProfileNickNameBody,
  ProfileNickName,
  ProfileMyEmailBox,
  ProfileMyEmail,
  ProfileNickNameBtn,
  NickNameCompleteBtn,
  ProfileMiddleSection,
  MiddleBody,
  ProfileStackBody,
  StackbodyTitle,
  StackbodyText,
  ProfileTechBody,
  TechBodyTitle,
  TechBodyImage,
  ProfileFooterBody,
  ProfileStackBtn,
} from './ProfileStyle';
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from '@firebase/firestore';
import { useNavigate } from 'react-router';

const Profile = () => {
  // 네이게이트
  const navigate = useNavigate();

  // 닉네임 수정 input 여부
  const [editNickNameBtn, setEditNickName] = useState(false);

  // 닉네임
  const [nickName, setNickName] = useState('');
  const [nickNamevalue, setNickNameValue] = useState('');

  // 현재 유저
  const [currentUser, setCurrentUser] = useState('');

  // 포토 URL
  const [newPhotoURL, setNewPhotoURL] = useState('');

  // 이미지 선택
  const inputImageRef = useRef();

  // 유저 정보 가져오기
  const [profileUserInfo, setProfileUserInfo] = useState([]);

  // 스택 정보 기져오기
  const [stackIsRemote, setStaclIsRemote] = useState('');
  const [stackPlace, setStackPlace] = useState('');
  const [stackTime, setStackTime] = useState('');

  const getUserStackInfo = () => {
    const q = query(
      collection(db, 'user'),
      where('uid', '==', authService.currentUser.uid),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newInfo = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfileUserInfo(newInfo);

      setStaclIsRemote(newInfo[0]?.moreInfo.u_isRemote);
      setStackPlace(newInfo[0]?.moreInfo.u_location);
      setStackTime(newInfo[0]?.moreInfo.u_time);
    });

    return unsubscribe;
  };

  // TODO: 스크랩 정보 가져오기

  // TODO: 내가 쓴 댓글 정보 가져오기

  // 유저 확인
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setCurrentUser(authService.currentUser.uid);
        setNickName(authService.currentUser.displayName);
        // setPhotoURL(authService.currentUser.photoURL);
        getUserStackInfo();
      }
    });
  }, [currentUser, nickName]);

  // 수정, 완료 토글
  const [clickEditBtn, setClickBtn] = useState(true);

  // 닉네임 수정 버튼 클릭시
  const edditNickName = () => {
    setClickBtn(false);
    setNickNameValue(nickName);
    setEditNickName(true);
  };

  // 닉네임 완료 버튼 클릭시
  const completeNickName = () => {
    updateProfile(authService.currentUser, {
      displayName: nickNamevalue,
    });
    alert('닉네임 수정 완료');
    setClickBtn(true);

    setTimeout(() => {
      window.location.replace('/mypage');
    }, 500);
  };

  // 이미지 선탣
  const profileHandler = () => {
    inputImageRef.current.click();
  };

  // 이미지 수정
  const onFileChange = async (e) => {
    const theFile = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(theFile);
    reader.onloadend = (e) => {
      const imgUrl = e.currentTarget.result;
      localStorage.setItem('imgUrl', imgUrl);
      updateDoc(doc(db, 'user', authService.currentUser.uid), {
        profileImg: imgUrl,
      });
      setNewPhotoURL(imgUrl);
    };
    alert('프로필 이미지 수정 완료');
  };

  // 맞춤 정보 수장
  const EditStackBtn = () => {
    navigate('/onboarding');
  };

  return (
    <MyProfileBody>
      <ProfileSection>
        <ProfileHeaderIcon>
          <RiFolderUserFill
            style={{ width: 30, height: 30 }}
            onClick={profileHandler}
          />
        </ProfileHeaderIcon>

        <ProfileImageBody>
          <ProfileImage
            src={
              profileUserInfo[0]?.profileImg
                ? profileUserInfo[0].profileImg
                : 'https://imhannah.me/common/img/default_profile.png'
            }
            width="150"
            height="150"
            alt=""
          />
          <input
            type="file"
            onChange={onFileChange}
            ref={inputImageRef}
            style={{ display: 'none' }}
            accept="image/*"
          />
        </ProfileImageBody>

        <ProfileEditBody>
          <ProfileNickNameBody>
            {editNickNameBtn ? (
              <EditNickNameInput
                value={nickNamevalue ? nickNamevalue : ''}
                onChange={(e) => setNickNameValue(e.target.value)}
              />
            ) : (
              <ProfileNickName>{nickName}</ProfileNickName>
            )}
            {clickEditBtn ? (
              <ProfileNickNameBtn onClick={edditNickName}>
                수정
              </ProfileNickNameBtn>
            ) : (
              <NickNameCompleteBtn onClick={completeNickName}>
                완료
              </NickNameCompleteBtn>
            )}
          </ProfileNickNameBody>
          <ProfileMyEmailBox>
            <ProfileMyEmail>{authService.currentUser?.email}</ProfileMyEmail>
          </ProfileMyEmailBox>
        </ProfileEditBody>

        <hr />

        <ProfileMiddleSection>
          <MiddleBody>
            <ProfileStackBody>
              <StackbodyTitle>온/오프라인</StackbodyTitle>
              <StackbodyText>
                {stackIsRemote ? '온라인' : '오프라인'}
              </StackbodyText>
            </ProfileStackBody>
            <ProfileStackBody>
              <StackbodyTitle>모임 장소</StackbodyTitle>
              <StackbodyText>서울시 {stackPlace}</StackbodyText>
            </ProfileStackBody>
            <ProfileStackBody>
              <StackbodyTitle>모임 시간</StackbodyTitle>
              <StackbodyText>{stackTime}</StackbodyText>
            </ProfileStackBody>
            <ProfileTechBody>
              <TechBodyTitle>기술 스택</TechBodyTitle>
              <TechBodyImage>
                <img
                  src="https://logo-download.com/wp-content/data/images/png/React-logo.png"
                  alt=""
                  width={50}
                  height={30}
                />
              </TechBodyImage>
            </ProfileTechBody>
          </MiddleBody>
        </ProfileMiddleSection>

        <ProfileFooterBody>
          <ProfileStackBtn onClick={EditStackBtn}>
            맞춤정보 수정
          </ProfileStackBtn>
        </ProfileFooterBody>
      </ProfileSection>
    </MyProfileBody>
  );
};

export default Profile;
