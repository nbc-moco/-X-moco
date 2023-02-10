import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadString,
} from 'firebase/storage';
import React, { useEffect, useRef, useState } from 'react';
import { RiFolderUserFill } from 'react-icons/ri';
import { authService, storage } from '../../../common/firebase';
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
  ProfileNickNameBtn,
  NickNameCompleteBtn,
  ProfileRemoveBtnBody,
  ProfileRemoveBtn,
  ProfileFooterBody,
  ProfileCompleteBtn,
} from './ProfileStyle';
import { v4 } from 'uuid';

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

  // 유저 확인
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setCurrentUser(authService.currentUser.uid);
        setNickName(authService.currentUser.displayName);
        setPhotoURL(authService.currentUser.photoURL);
      }
    });
  }, [currentUser, nickName, photoURL]);

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
    window.location.replace('/mypage');
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
      setNewPhotoURL(imgUrl);
    };
  };

  // 완료 버튼
  const completeProfileBtn = async () => {
    const imgRef = ref(storage, authService.currentUser.uid + v4());

    const url = localStorage.getItem('imgUrl');

    const response = await uploadString(imgRef, url, 'data_url');
    const downloadUrl = getDownloadURL(response.ref)
      .then((res) => {
        updateProfile(authService.currentUser, {
          photoURL: res,
        });
        alert('프로필 업데이트 완료');
        window.location.replace('/mypage');
      })
      .catch(() => {
        alert('이미지 전송 실패');
      });
  };

  // 이미지 제거
  const deleteProfileImg = async () => {
    // await updateProfile(authService.currentUser, {
    //   photoURL: 'https://imhannah.me/common/img/default_profile.png',
    // });
    // alert('프로필 제거 완료');
    // window.location.replace('/mypage');
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
            src={newPhotoURL ? newPhotoURL : photoURL}
            // src={authService.currentUser?.photoURL}
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

          <ProfileRemoveBtnBody>
            <ProfileRemoveBtn onClick={deleteProfileImg}>
              이미지 제거
            </ProfileRemoveBtn>
          </ProfileRemoveBtnBody>
        </ProfileEditBody>

        <hr />

        <ProfileFooterBody>
          <ProfileCompleteBtn onClick={completeProfileBtn}>
            이미지 업로드
          </ProfileCompleteBtn>
        </ProfileFooterBody>
      </ProfileSection>
    </MyProfileBody>
  );
};

export default Profile;
