import React, { useRef } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { useEffect } from 'react';
import { times } from '../../data/times';
import { locations } from '../../data/locations';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { authService, db } from '../../common/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function OnboardingPage() {
  const [isRemote, setIsRemote] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  // 인풋값
  const [userStack, setUserStack] = useState([]);
  const [userTime, setUserTime] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');

  const stacks = [
    'JavsScript',
    'Python',
    'Java',
    'Go',
    'Typescript',
    'Node.js',
    'Spring',
    'Rust',
    'Next.js',
    'Svelt',
    'Vue',
    'React',
  ];

  // 기술 스택 선택 핸들러 함수
  const handleStack = (stack) => {
    if (userStack.includes(stack)) {
      setUserStack(userStack.filter((item) => item !== stack));
    } else {
      setUserStack([...userStack, stack]);
    }
  };

  // 비대면 모임 체크박스 핸들러 함수
  const handleisRemote = (e) => {
    setIsRemote(!isRemote);
    setIsDisabled(!isDisabled);
  };

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        const auth2 = getAuth();
        const getUserName = async () => {
          setCurrentUserName(auth2.currentUser.displayName);
          console.log('user', currentUserName);
        };
        getUserName();
      }
    });
  }, []);

  // 네비게이트
  const navigate = useNavigate();

  const updateIntroduce = async () => {
    const auth = getAuth();
    const user = auth.currentUser.uid;
    const userDoc = doc(db, 'user', String(user));
    const newField = {
      moreInfo: {
        u_stack: userStack,
        u_time: userTime,
        u_location: userLocation,
        u_isRemote: isRemote,
      },
    };
    try {
      await updateDoc(userDoc, newField);
      console.log('user', user);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('end');
    }
    navigate('/');
  };

  // 온보딩 수정하기
  const editIntroduce = async () => {
    const auth = getAuth();
    const user = auth.currentUser.uid;
    const userDoc = doc(db, 'user', String(user));
    const newField = {
      moreInfo: {
        u_stack: userStack,
        u_time: userTime,
        u_location: userLocation,
        u_isRemote: isRemote,
      },
    };
    try {
      await updateDoc(userDoc, newField);
      console.log('user', user);
    } catch (e) {
      console.log(e);
    } finally {
      console.log('end');
    }
    navigate('/mypage');
  };

  return (
    <>
      <JustContainer>
        <WholeContainer>
          <PhraseTitle>
            맞춤 모임 추천을 위해 {currentUserName ? currentUserName : '익명'}
            님의 정보를 알려주세요 🙌
          </PhraseTitle>
          <AreaContainer>
            <h3>기술 스택</h3>
            <SetStacks>
              {stacks.map((techitem, idx) => (
                <Stacks
                  style={{
                    backgroundColor: userStack.includes(techitem)
                      ? '#f7f7f7'
                      : 'white',
                  }}
                  key={idx}
                  onClick={() => handleStack(techitem)}
                >
                  {techitem}
                </Stacks>
              ))}
            </SetStacks>
          </AreaContainer>
          <AreaContainer>
            <h3>선호 시간 설정</h3>
            <FilterContainer>
              <Select
                options={times}
                placeholder={!userTime ? '모임 시간대' : userTime}
                onChange={(time) => setUserTime(time.value)}
                value={userTime}
              />
            </FilterContainer>
          </AreaContainer>
          <AreaContainer>
            <h3>선호 지역 설정</h3>
            <FilterPlaceContainer>
              <FilterContainerOnly>
                <Select
                  options={locations}
                  placeholder={!userLocation ? '모집 지역' : userLocation}
                  onChange={(loc) => setUserLocation(loc.value)}
                  value={userLocation}
                  isDisabled={isDisabled}
                />
              </FilterContainerOnly>
              <Checkbox style={{ marginLeft: 20 }} onChange={handleisRemote}>
                비대면을 원해요
              </Checkbox>
            </FilterPlaceContainer>
          </AreaContainer>
          <IntroSubmitBtnBox>
            <>
              <IntroSubmitBtn onClick={updateIntroduce} type="submit">
                제출하기
              </IntroSubmitBtn>
            </>
            <>
              <IntroEditBtn onClick={editIntroduce}>수정하기</IntroEditBtn>
            </>
          </IntroSubmitBtnBox>
        </WholeContainer>
      </JustContainer>
    </>
  );
}

const JustContainer = styled.div`
  font-family: var(--body-font);
  color: var(--body-color);
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em 2em;
  width: 100%;
`;

const WholeContainer = styled.div`
  max-width: 1240px;
  height: 95%;
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid black;
  position: relative;
  padding: 150px;
  margin: 100px;
`;

const PhraseTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 100px;
`;

const AreaContainer = styled.div`
  margin-bottom: 100px;
`;

const SetStacks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Stacks = styled.div`
  border-radius: 30px;
  border: 1px solid #b9b9b9;
  font-size: 15px;
  text-align: center;
  padding: 12px 0;
  width: 130px;
  cursor: pointer;
`;

const FilterContainer = styled.div`
  margin-top: 20px;
  width: 400px;
  margin-bottom: 100px;
`;

const FilterContainerOnly = styled.div`
  width: 400px;
`;

const FilterPlaceContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 100px;
  align-items: center;
  display: flex;
`;

const IntroSubmitBtnBox = styled.div`
  margin-left: 40%;
`;

const IntroSubmitBtn = styled.button`
  width: 180px;
  height: 50px;

  font-size: 1.3rem;

  background: #0002;
  border: none;
  border-radius: 10px;

  display: block;

  margin-top: 20px;
`;

const IntroEditBtn = styled.div`
  width: 180px;
  height: 50px;

  font-size: 1.1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 20px;

  cursor: pointer;
`;
