import { collection, onSnapshot, query, where } from '@firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { authService, db } from '../../common/firebase';
import {
  HeaderBody,
  HeaderInfoBody,
  HeaderLogo,
  NavigateMypage,
  LogoAndMateBox,
  MyCodingMate,
  TeamAndLoginBox,
  MakeTeam,
  HeaderIcon,
  LoginRoute,
  HeaderImage,
} from './style';

const Header = () => {
  // 헤더 로그인 토글
  const [loginToggle, setLoginToggle] = useState(true);

  // 헤더  토글
  const [headerMyPage, setHeaderMyPage] = useState(false);

  // 헤더 프로필 이미지
  const [headerProfile, setHeaderProfile] = useState('');

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

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setLoginToggle(false);
        setHeaderMyPage(true);
        setHeaderProfile(authService.currentUser.photoURL);
        getUserStackInfo();
      } else if (!user) {
        setLoginToggle(true);
        setHeaderMyPage(false);
      }
    });
  }, []);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateMyPage = () => {
    navigate('/mypage');
  };

  const navigateLoginPage = () => {
    if (loginToggle === true) {
      navigate('/login');
    } else if (loginToggle === false) {
      authService.signOut();
      navigate('/');
    }
  };

  const navigateMate = () => [navigate('/mate')];

  // 헤더 유무
  const locationNow = useLocation();
  if (locationNow.pathname === '/login' || locationNow.pathname === '/signup')
    return null;

  return (
    <HeaderBody>
      <HeaderInfoBody>
        <LogoAndMateBox>
          <HeaderLogo onClick={navigateHome}>MOCO</HeaderLogo>
          <MyCodingMate>내 코딩모임</MyCodingMate>
        </LogoAndMateBox>
        <TeamAndLoginBox>
          <MakeTeam>팀 개설하기</MakeTeam>
          <HeaderIcon />

          <NavigateMypage>
            {headerMyPage ? (
              <HeaderImage
                src={
                  profileUserInfo[0]?.profileImg
                    ? profileUserInfo[0].profileImg
                    : 'https://imhannah.me/common/img/default_profile.png'
                }
                alt=""
              />
            ) : (
              ''
            )}
          </NavigateMypage>

          <LoginRoute onClick={navigateLoginPage}>
            {loginToggle ? '로그인' : '로그아웃'}
          </LoginRoute>
        </TeamAndLoginBox>

        {/* <MateLoute onClick={navigateMate}>메이트 찾기</MateLoute> */}
      </HeaderInfoBody>
    </HeaderBody>
  );
};

export default Header;
