import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import {
  HeaderBody,
  HeaderInfoBody,
  HeaderLogo,
  HeaderLoute,
  MateLoute,
  LoginLoute,
} from './style';

const Header = () => {
  const locationNow = useLocation();

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate('/');
  };

  const navigateLoginPage = () => {
    navigate('/login');
  };

  const navigateMate = () => [navigate('/matedetail')];

  if (locationNow.pathname === '/login' && locationNow.pathname === '/signup')
    return null;

  return (
    <HeaderBody>
      <HeaderInfoBody>
        <HeaderLogo onClick={navigateHome}>모각코</HeaderLogo>
        <HeaderLoute>
          <MateLoute onClick={navigateMate}>메이트 찾기</MateLoute>
          <LoginLoute onClick={navigateLoginPage}>로그인</LoginLoute>
        </HeaderLoute>
      </HeaderInfoBody>
    </HeaderBody>
  );
};

export default Header;
