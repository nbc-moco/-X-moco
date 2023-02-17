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
  HeaderDropDownListBox,
  HeaderDropDownList,
  HeaderImageBox,
  HeaderImageText,
  HeaderDropDownListSection,
  DropDownListBody,
} from './style';
import { BsPersonFill } from 'react-icons/bs';

const Header = () => {
  // 헤더 로그인 토글
  const [loginToggle, setLoginToggle] = useState(true);

  // 헤더  토글
  const [headerMyPage, setHeaderMyPage] = useState(false);

  // 헤더 프로필 이미지
  const [headerProfile, setHeaderProfile] = useState('');

  // 헤더 닉네임
  const [headerNickName, setHeaderNickName] = useState('');

  // 드랍다운
  const [dropDownClick, setDropDownClick] = useState(false);

  // 헤더 드랍다운 생성유뮤
  const [isUserDropDown, setIsUserDropDown] = useState(false);

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
        setIsUserDropDown(true);
        setLoginToggle(false);
        setHeaderMyPage(true);
        setHeaderProfile(authService.currentUser.photoURL);
        setHeaderNickName(authService.currentUser.displayName);
        getUserStackInfo();
      } else if (!user) {
        setLoginToggle(true);
        setHeaderMyPage(false);
        setIsUserDropDown(false);
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

  // 헤더 로그인 페이지로 이동
  const navigateLoginPage = () => {
    if (loginToggle === true) {
      navigate('/login');
    }
  };

  // 검색 기능
  const [word, setWord] = useState('');
  const onChangeSearch = (e) => {
    setWord(e.target.value);
  }
  const onSubmit = () => {
    navigate(`/search/${word}`);
  };
  
  // const navigateMate = () => [navigate('/mate')];
  // 로그아웃
  const HeaderLogOut = () => {
    authService.signOut();
    window.location.replace('/');
  };

  const navigateMate = () => [navigate('/mate')];

  // 헤더 유무
  const locationNow = useLocation();
  if (locationNow.pathname === '/login' || locationNow.pathname === '/signup')
    return null; 

  const dropDownHandler = () => {
    if (dropDownClick === false) {
      setDropDownClick(true);
    } else {
      setDropDownClick(false);
    }
  };

  return (
    <HeaderBody>
      <HeaderInfoBody>
        <LogoAndMateBox>
          <HeaderLogo onClick={navigateHome}>MOCO</HeaderLogo>
          <MyCodingMate>내 코딩모임</MyCodingMate>
        </LogoAndMateBox>
        <div>
        <input onChange={onChangeSearch}/>
        <button 
          type='button'
          onClick={onSubmit}
        >
          검색
        </button>
        </div>
        <TeamAndLoginBox>
          <MakeTeam onClick={() => navigate('/write')}>팀 개설하기</MakeTeam>
          {/* <HeaderIcon /> */}
          <div onClick={dropDownHandler}>
            {dropDownClick ? (
              <>
                {isUserDropDown ? (
                  <NavigateMypage>
                    <BsPersonFill style={{ fontSize: '40px' }} />
                  </NavigateMypage>
                ) : (
                  ''
                )}
                <HeaderDropDownListBox style={{ position: 'absolute' }}>
                  <HeaderImageBox>
                    <HeaderImage
                      src={
                        profileUserInfo[0]?.profileImg
                          ? profileUserInfo[0].profileImg
                          : 'https://imhannah.me/common/img/default_profile.png'
                      }
                      alt=""
                    />
                    <HeaderImageText>
                      안녕하세요, {headerNickName}님🥰
                    </HeaderImageText>
                  </HeaderImageBox>
                  <HeaderDropDownListSection>
                    <DropDownListBody>
                      <HeaderDropDownList>하고싶은거</HeaderDropDownList>
                    </DropDownListBody>

                    <DropDownListBody onClick={navigateMyPage}>
                      <HeaderDropDownList>마이페이지</HeaderDropDownList>
                    </DropDownListBody>
                    <DropDownListBody onClick={HeaderLogOut}>
                      <HeaderDropDownList>로그아웃</HeaderDropDownList>
                    </DropDownListBody>
                  </HeaderDropDownListSection>
                </HeaderDropDownListBox>
              </>
            ) : (
              <NavigateMypage>
                <BsPersonFill style={{ fontSize: '40px' }} />
              </NavigateMypage>
            )}
          </div>

          {/* <NavigateMypage>
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
          <div>
            <ui>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ui>
          </div> */}
          <LoginRoute onClick={navigateLoginPage}>
            {loginToggle ? '로그인' : ''}
          </LoginRoute>
        </TeamAndLoginBox>

        {/* <MateLoute onClick={navigateMate}>메이트 찾기</MateLoute> */}
      </HeaderInfoBody>
    </HeaderBody>
  );
};

export default Header;
