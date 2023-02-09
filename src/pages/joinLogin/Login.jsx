import React, { useRef, useState } from 'react';
import {
  LoginBody,
  LoginForm,
  LoginTitleLogo,
  LoginTitle,
  LoginInputBody,
  LoginEmailInput,
  LoginPasswordInput,
  LoginLogo,
  GoogleLogo,
  GithubLogo,
  LoginLouteBody,
  LoginBtn,
  LouteSignUpPageBtn,
  EmailBody,
  PasswordBody,
  LoginInputSection,
  EmailText,
  PasswordText,
  WarnigTextBody,
  WarnigText,
  ToggleEmailBtn,
  ToggleEmailBack,
} from './Loginstyle';
import { CiFaceSmile } from 'react-icons/ci';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import { emailRegex, pwRegex } from '../../common/utils';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from '@firebase/auth';
import { authService, db } from '../../common/firebase';
import { doc, setDoc } from '@firebase/firestore';

const Login = () => {
  // 이메일
  const emailRef = useRef(null);
  const [email, setEmail] = useState('');

  // 비밀번호
  const [password, setPassword] = useState('');
  const pwRef = useRef(null);

  // 걍고문자
  const [warningText, setWarningText] = useState('');

  const navigate = useNavigate();

  // 유효성 검시
  const validateInputs = () => {
    if (!email) {
      setWarningText('email을 입력해주세요.');
      emailRef.current.focus();
      return true;
    }
    if (!password) {
      setWarningText('password를 입력해주세요.');
      pwRef.current.focus();
      return true;
    }
    const matchedEmail = email.match(emailRegex);
    const matchedPw = password.match(pwRegex);

    if (matchedEmail === null) {
      setWarningText('이메일 형식에 맞게 입력해 주세요.');
      emailRef.current.focus();
      return true;
    }
    if (matchedPw === null) {
      setWarningText(
        '비밀번호는 8자리 이상 영문자, 숫자, 특수문자 조합이어야 합니다.',
      );
      pwRef.current.focus();
      return true;
    }
  };

  // 하단 토글 버튼
  const [emailLogin, setEmailLogin] = useState(true);
  const [toggleText, setToggleText] = useState(true);

  // 로그인 토글
  const ToggleSocial = () => {
    if (toggleText === true) {
      setEmailLogin(false);
      setToggleText(false);
    } else if (toggleText === false) {
      setEmailLogin(true);
      setToggleText(true);
    }
  };

  // 로그인 버튼 클릭
  const LogginBtnHandle = () => {
    if (validateInputs()) {
      return;
    }

    signInWithEmailAndPassword(authService, email, password)
      .then(() => {
        console.log('로그인성공');
        setEmail('');
        setPassword('');
        navigate('/');
      })
      .catch((err) => {
        console.log('err.message:', err.message);
        if (err.message.includes('user-not-found')) {
          setWarningText('회원이 아닙니다. 회원가입을 먼저 진행해 주세요.');
        }
        if (err.message.includes('wrong-password')) {
          setWarningText('비밀번호가 틀렸습니다.');
        }
      });
  };

  // 구글 로그인
  const gooleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authService, provider)
      .then((res) => {
        navigate('/');
        setDoc(doc(db, 'user', res.user.uid), {
          uid: res.user.uid,
          email: res.user.email,
          nickname: res.user.displayName,
          bookmarkId: [],
          profileImg: res.user.photoURL,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 깃허브 로그인
  const githubLogin = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(authService, provider)
      .then((res) => {
        navigate('/');
        setDoc(doc(db, 'user', res.user.uid), {
          uid: res.user.uid,
          email: res.user.email,
          nickname: res.user.displayName,
          bookmarkId: [],
          profileImg: res.user.photoURL,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  회원가입 페이지로 이동
  const navigateSignUpPage = () => {
    navigate('/signup');
  };
  return (
    <LoginBody>
      <LoginForm>
        <LoginTitleLogo>
          <>
            <CiFaceSmile style={{ width: 70, height: 70 }} />
          </>
        </LoginTitleLogo>
        <LoginTitle>MoCo에 오신 것을 환영합니다. !!</LoginTitle>

        {emailLogin ? (
          <LoginLogo>
            <GoogleLogo onClick={gooleLogin}>
              <FcGoogle style={{ width: 110, height: 110 }} />
            </GoogleLogo>
            <GithubLogo onClick={githubLogin}>
              <FaGithub style={{ width: 110, height: 110 }} />
            </GithubLogo>
          </LoginLogo>
        ) : (
          <>
            <LoginInputBody>
              <LoginInputSection>
                <EmailBody>
                  <EmailText>이메일</EmailText>
                  <LoginEmailInput
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={emailRef}
                  />
                </EmailBody>
                <PasswordBody>
                  <PasswordText>비밀번호</PasswordText>
                  <LoginPasswordInput
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={pwRef}
                  />
                </PasswordBody>
              </LoginInputSection>
            </LoginInputBody>

            <WarnigTextBody>
              <WarnigText>{warningText}</WarnigText>
            </WarnigTextBody>

            <LoginLouteBody>
              <LoginBtn onClick={LogginBtnHandle}>로그인</LoginBtn>
              <LouteSignUpPageBtn onClick={navigateSignUpPage}>
                회원가입
              </LouteSignUpPageBtn>
            </LoginLouteBody>
          </>
        )}

        <div onClick={ToggleSocial}>
          {toggleText ? (
            <ToggleEmailBtn>이메일로 로그인</ToggleEmailBtn>
          ) : (
            <ToggleEmailBack>뒤로가기</ToggleEmailBack>
          )}
        </div>
      </LoginForm>
    </LoginBody>
  );
};

export default Login;
