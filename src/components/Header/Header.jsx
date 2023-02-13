import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { authService } from '../../common/firebase';
import { clearUser, setUser } from '../../redux/config/user_action';
import {
  HeaderBody,
  HeaderInfoBody,
  HeaderLogo,
  HeaderLoute,
  MateLoute,
  LoginLoute,
  NavigateMypage,
} from './style';

const Header = () => {
  // 헤더 로그인 토글
  const [loginToggle, setLoginToggle] = useState(true);

  // 헤더  토글
  const [headerMyPage, setHeaderMyPage] = useState(false);

  // 유저 정보 스토어에 저장
  let dispatch = useDispatch();
  // const isLoading = useSelector((state) => state.user.isLoading);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        setLoginToggle(false);
        setHeaderMyPage(true);
        // dispatch(setUser(user));
      } else if (!user) {
        setLoginToggle(true);
        setHeaderMyPage(false);
        // dispatch(clearUser());
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
        <HeaderLogo onClick={navigateHome}>모각코</HeaderLogo>
        <HeaderLoute>
          <MateLoute onClick={navigateMate}>메이트 찾기</MateLoute>
          <NavigateMypage onClick={navigateMyPage}>
            {headerMyPage ? (
              <img
                src={
                  authService.currentUser?.photoURL
                    ? authService.currentUser.photoURL
                    : 'https://imhannah.me/common/img/default_profile.png'
                }
                style={{ width: 40, height: 40 }}
                alt=""
              />
            ) : (
              ''
            )}
          </NavigateMypage>
          <LoginLoute onClick={navigateLoginPage}>
            {loginToggle ? '로그인' : '로그아웃'}
          </LoginLoute>
        </HeaderLoute>
      </HeaderInfoBody>
    </HeaderBody>
  );
};

export default Header;
