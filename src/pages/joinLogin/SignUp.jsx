import React, { useRef, useState } from 'react';
import {
  SignUpBody,
  SignUpForm,
  SignUpTitleLogo,
  SignUpTitle,
  SignUpInputBody,
  SignUpEmailInput,
  SignUpPasswordInput,
  SignUpLouteBody,
  SignUpBtn,
  LouteSignUpPageBtn,
  EmailBody,
  PasswordBody,
  SignUpInputSection,
  EmailText,
  PasswordText,
  NickNameBody,
  NickNameText,
  SignUpNickNameInput,
  WarnigText,
  WarnigTextBody,
  CheckPasswordBody,
  CheckPasswordText,
  CheckSignUpPasswordInput,
} from './SignUpstyle';
import { CiFaceSmile } from 'react-icons/ci';
import { emailRegex, pwRegex } from '../../common/utils';
import { useNavigate } from 'react-router';
import { createUserWithEmailAndPassword, updateProfile } from '@firebase/auth';
import { authService, db } from '../../common/firebase';
import { doc, setDoc } from '@firebase/firestore';

const SignUp = () => {
  // 이메일
  const [email, setEmail] = useState('');
  const emailRef = useRef(null);

  // 비밀번호
  const [password, setPassword] = useState('');
  const pwRef = useRef(null);

  // 비밀번호 확인
  const [checkPassword, setCheckPassword] = useState('');
  const pwCheckRef = useRef(null);

  // 닉네임
  const [nickName, setNickName] = useState('');
  const nickNameRef = useRef(null);

  // 경고문
  const [warningText, setWarningText] = useState('');

  const navigate = useNavigate();

  // 로딩중일때
  const [loding, setLoding] = useState(false);

  //  유효성 검사
  const validateInputs = () => {
    if (!email) {
      setWarningText('이메일을 입력해주세요.');
      emailRef.current.focus();
      return true;
    }
    if (!password) {
      setWarningText('비밀번호를 입력해주세요.');
      pwRef.current.focus();
      return true;
    }
    if (checkPassword !== password) {
      setWarningText('비밀번호를 다시 확인해주세요.');
      pwCheckRef.current.focus();
      return true;
    }
    if (nickName === '') {
      setWarningText('닉네임을 입력해주세요.');
      nickNameRef.current.focus();
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

  // 회원가입 버튼 클릭
  const handleSignUp = () => {
    if (validateInputs()) {
      return;
    }

    createUserWithEmailAndPassword(authService, email, password)
      .then((res) => {
        setLoding(true);
        if (authService.currentUser)
          setDoc(doc(db, 'user', res.user.uid), {
            uid: res.user.uid,
            email: email,
            profileImg: 'https://imhannah.me/common/img/default_profile.png',
          });

        updateProfile(authService.currentUser, {
          displayName: nickName,
        });

        console.log('회원가입성공');
        setLoding(false);
        setEmail('');
        setPassword('');
        setCheckPassword('');
        setNickName('');
        navigate('/');
      })
      .catch((err) => {
        setLoding(false);
        if (err.message.includes('already-in-use')) {
          setWarningText('이미 사용중인 아이디입니다.');
        }
      });
  };

  //  회원가입 페이지로 이동
  const navigationLoginPage = () => {
    navigate('/login');
  };
  return (
    <SignUpBody>
      <SignUpForm>
        <SignUpTitleLogo>
          <>
            <CiFaceSmile style={{ width: 70, height: 70 }} />
          </>
        </SignUpTitleLogo>
        <SignUpTitle>MoCo에 오신 것을 환영합니다. !!</SignUpTitle>

        <SignUpInputBody>
          <SignUpInputSection>
            <EmailBody>
              <EmailText>이메일</EmailText>
              <SignUpEmailInput
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
              />
            </EmailBody>
            <PasswordBody>
              <PasswordText>비밀번호</PasswordText>
              <SignUpPasswordInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={pwRef}
              />
            </PasswordBody>
            <CheckPasswordBody>
              <CheckPasswordText>재확인</CheckPasswordText>
              <CheckSignUpPasswordInput
                type="password"
                value={checkPassword}
                onChange={(e) => setCheckPassword(e.target.value)}
                ref={pwCheckRef}
              />
            </CheckPasswordBody>
            <NickNameBody>
              <NickNameText>닉네임</NickNameText>
              <SignUpNickNameInput
                type="text"
                value={nickName}
                onChange={(e) => setNickName(e.target.value)}
                ref={nickNameRef}
              />
            </NickNameBody>
          </SignUpInputSection>
        </SignUpInputBody>

        <WarnigTextBody>
          <WarnigText>{warningText}</WarnigText>
        </WarnigTextBody>

        <SignUpLouteBody>
          <LouteSignUpPageBtn onClick={navigationLoginPage}>
            로그인 화면으로
          </LouteSignUpPageBtn>
          <SignUpBtn onClick={handleSignUp} disabled={loding}>
            회원가입
          </SignUpBtn>
        </SignUpLouteBody>
      </SignUpForm>
    </SignUpBody>
  );
};

export default SignUp;
