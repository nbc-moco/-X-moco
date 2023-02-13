import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { authService } from '../../common/firebase';
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
} from './style';

const Header = () => {
  // 헤더 로그인 토글
  const [loginToggle, setLoginToggle] = useState(true);

  // 헤더 닉네임 토글
  const [headerMyPage, setHeaderMyPage] = useState(false);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setLoginToggle(false);
        setHeaderMyPage(true);
      } else if (!user) {
        setLoginToggle(true);
        setHeaderMyPage(false);
      }
    });
  }, [setHeaderMyPage]);

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
        <HeaderIcon />
        <LoginRoute onClick={navigateLoginPage}>
          {loginToggle ? '로그인' : '로그아웃'}
        </LoginRoute>
        </TeamAndLoginBox>
        {/* <HeaderLoute>
          <MateLoute onClick={navigateMate}>메이트 찾기</MateLoute>
          <NavigateMypage onClick={navigateMyPage}>
            {headerMyPage ? (
              <>{authService.currentUser?.displayName ?? ''}</>
            ) : (
              ''
            )}
          </NavigateMypage>
          <LoginLoute onClick={navigateLoginPage}>
            {loginToggle ? '로그인' : '로그아웃'}
          </LoginLoute>
        </HeaderLoute> */}
      </HeaderInfoBody>
    </HeaderBody>
  );
};

export default Header;
