import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { RiFolderUserFill } from 'react-icons/ri';
import { authService, db, storage } from '../../../common/firebase';
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
  ProfileCompleteBtn,
  ProfileStackBtn,
} from './ProfileStyle';
import { v4 } from 'uuid';
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from '@firebase/firestore';

const Profile = () => {
  // 닉네임 수정 input 여부
  const [editNickNameBtn, setEditNickName] = useState(false);

  // 닉네임
  const [nickName, setNickName] = useState('');
  const [nickNamevalue, setNickNameValue] = useState('');

  // 현재 유저
  const [currentUser, setCurrentUser] = useState('');

  // 포토 URL
  const [photoURL, setPhotoURL] = useState('');
  const [newPhotoURL, setNewPhotoURL] = useState('');

  // 이미지 선택
  const inputImageRef = useRef();

  // 유저 정보 가져오기
  const [profileUserInfo, setProfileUserInfo] = useState([]);

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
    });
    return unsubscribe;
  };

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
              <StackbodyText>오프라인</StackbodyText>
            </ProfileStackBody>
            <ProfileStackBody>
              <StackbodyTitle>모임 장소</StackbodyTitle>
              <StackbodyText>서울시 영등포구</StackbodyText>
            </ProfileStackBody>
            <ProfileStackBody>
              <StackbodyTitle>모임 시간</StackbodyTitle>
              <StackbodyText>평일 오후</StackbodyText>
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
          <ProfileStackBtn>맞춤정보</ProfileStackBtn>
        </ProfileFooterBody>
      </ProfileSection>
    </MyProfileBody>
  );
};

export default Profile;
