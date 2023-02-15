import React from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { times } from '../../data/times';
import { locations } from '../../data/locations';
import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../common/firebase';
import { getAuth } from 'firebase/auth';

export default function OnboardingPage() {
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
  const setPreferPlace = ['카페', '스터디룸', '스튜디오', '개인장소'];

  // 인풋값
  const [userStack, setUserStack] = useState([]);
  const [userPlace, setUserPlace] = useState([]);
  const [userTime, setUserTime] = useState('');
  const [userLocation, setUserLocation] = useState('');

  // 기술 스택 선택 핸들러 함수
  const handleStack = (stack) => {
    if (userStack.includes(stack)) {
      setUserStack(userStack.filter((item) => item !== stack));
    } else {
      setUserStack([...userStack, stack]);
    }
  };

  // 선호 장소 선택 핸들러 함수
  const handlePlaceStack = (placeitem) => {
    if (userPlace.includes(placeitem)) {
      setUserPlace(userPlace.filter((item) => item !== placeitem));
    } else {
      setUserPlace([...userPlace, placeitem]);
    }
  };

  // 자기소개 인풋
  const [inputIntroduce, setInputIntroduce] = useState('');

  // create
  const updateIntroduce = async () => {
    const auth = getAuth();
    const user = auth.currentUser.uid;
    const userDoc = doc(db, 'user', String(user));
    const newField = {
      moreInfo: {
        u_stack: userStack,
        u_time: userTime,
        u_location: userLocation,
        u_isRemote: false,
        u_preferPlace: userPlace,
        u_introduceself: inputIntroduce,
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
  };

  return (
    <>
      <JustContainer>
        <WholeContainer>
          <PhraseTitle>
            맞춤 모임 추천을 위해 정다인 님의 정보를 알려주세요 🙌
          </PhraseTitle>
          <AreaContainer>
            <h3>기술 스택</h3>
            <SetStacks>
              {stacks.map((techitem, idx) => (
                <Stacks key={idx} onClick={() => handleStack(techitem)}>
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
            <FilterContainer>
              <Select
                options={locations}
                placeholder={!userLocation ? '모집 지역' : userLocation}
                onChange={(loc) => setUserLocation(loc.value)}
                value={userLocation}
              />
            </FilterContainer>
          </AreaContainer>
          <AreaContainer>
            <h3>선호 장소 설정</h3>
            <SetStacks>
              {setPreferPlace.map((placeitem, idx) => (
                <Stacks key={idx} onClick={() => handlePlaceStack(placeitem)}>
                  {placeitem}
                </Stacks>
              ))}
            </SetStacks>
          </AreaContainer>
          <AreaContainer>
            <h3>자기소개</h3>
            <IntroduceContainer>
              <IntroduceInput
                type="text"
                placeholder="자기소개를 간단하게 입력해주세요 :)"
                value={inputIntroduce}
                onChange={(e) => {
                  setInputIntroduce(e.target.value);
                }}
              />
            </IntroduceContainer>
          </AreaContainer>
          <IntroSubmitBtn
            onClick={updateIntroduce}
            type="submit"
          ></IntroSubmitBtn>
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

const IntroduceContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  margin-bottom: 100px;
`;

const IntroduceInput = styled.input`
  width: 100%;
  height: 200px;
  font-size: 15px;
  border: 1px solid rgb(150, 150, 150);
  border-radius: 5px;
  padding-left: 8px;
  :focus-visible {
    outline: none;
  }
`;

const IntroSubmitBtn = styled.button`
  width: 100px;
  height: 100px;
`;
