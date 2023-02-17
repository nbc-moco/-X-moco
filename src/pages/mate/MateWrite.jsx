import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import styled from '@emotion/styled';
import Select from 'react-select';
import { Checkbox } from 'antd';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { now } from '../../common/utils/date';
import { uuidv4 } from '@firebase/util';
import { locations } from '../../data/locations';
import { people } from '../../data/people';
import { stacks } from '../../data/stacks';
import { times } from '../../data/times';
import { opens } from '../../data/opens';
import { db, authService } from '../../common/firebase';
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';

const MateWrite = () => {
  // 파베 인증
  const currentUser = authService.currentUser;
  const quillRef = useRef(null);
  // 유저 닉네임 - 프로필 가져오기 상태
  const [nickName, setNickName] = useState('');
  const [profileImg, setGetProfileImg] = useState('');
  // 글쓰기 페이지에서 유저가 입력한 데이터를 저장하는 상태
  const [partyName, setPartyname] = useState('');
  const [partyStack, setPartyStack] = useState([]);
  const [partyTime, setPartyTime] = useState('');
  const [partyNum, setPartyNum] = useState('');
  const [partyLocation, setPartyLocation] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [partyIsOpen, setPartyIsOpen] = useState(true);
  const [partyPostTitile, setPartyPostTitle] = useState('');
  const [partyDesc, setPartyDesc] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  // 작성글 버튼 클릭 상태
  const [isClicked, setIsClicked] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const [postId, setPostId] = useState('5PCFPb2hSQt9Sq8nFL5c');

  // 유저 닉네임 - 프로필 가져오기 함수
  const getUserInfo = () => {
    if (currentUser !== null) {
      const displayName = currentUser.displayName;
      const photoURL = currentUser.photoURL;
      setNickName(displayName);
      setGetProfileImg(photoURL);
    }
  };

  // 기술 스택 선택 핸들러 함수
  const handlePartyStack = (stack) => {
    if (partyStack.includes(stack)) {
      setPartyStack(partyStack.filter((item) => item !== stack));
    } else {
      setPartyStack([...partyStack, stack]);
    }
  };

  // 비대면 모임 체크박스 핸들러 함수
  const handleisRemote = (e) => {
    setIsRemote(!isRemote);
    setIsDisabled(!isDisabled);
  };

  // 모집글 게시 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'post'), {
        partyName,
        partyStack,
        partyTime,
        partyNum,
        partyLocation,
        partyIsOpen,
        isRemote,
        partyPostTitile,
        partyDesc,
        nickName,
        profileImg,
        createdDate: now(),
        postId: uuidv4(),
        uid: currentUser.uid,
        isDeleted: false,
        createdAt: Date.now(),
      });
      console.log('업로드 성공');
    } catch (error) {
      console.log(error);
    }
  };

  // ! 모집글 수정 함수
  const handleEditPost = async () => {
    try {
      await updateDoc(doc(db, 'post', postId), {
        partyName,
        partyStack,
        partyTime,
        partyNum,
        partyLocation,
        partyIsOpen,
        isRemote,
        partyPostTitile,
        partyDesc,
      });
      console.log('수정 성공');
    } catch (error) {
      console.log(error);
    }
  };

  // ! 모집글 삭제 함수 (표면상 삭제이지만, 팀페이지에서 글의 정보를 가져가 사용하기 때문에 비활성화 처리합니다)
  // 팀페이지에서는 모달로.
  const handleDelete = async () => {
    try {
      await updateDoc(doc(db, 'post', postId), {
        isDeleted: true,
      });
      console.log('삭제 성공');
    } catch (error) {
      console.log(error);
    }
  };

  // 모집글 수정 함수

  // 모집

  useEffect(() => {
    if (!currentUser) return;
    getUserInfo();
    console.log(currentUser);
  }, [currentUser]);

  return (
    <WritePageContainer>
      <GuideTextsBox>
        <PageTitle>
          <h2>모각코 모임 개설</h2>
        </PageTitle>
        <PageInfo>
          모임 개설을 위해 정보와 상세한 설명을 입력해주세요 🙌
        </PageInfo>
      </GuideTextsBox>
      <EditingBox onSubmit={handleSubmit}>
        <PartyInfoBox>
          <PartyTitleBox>
            <h3>모임명</h3>
            <PartyTitle
              type="text"
              value={partyName}
              onChange={(e) => setPartyname(e.target.value)}
              maxLength={10}
              placeholder="12자 이내로 작성해주세요"
            />
          </PartyTitleBox>

          <TechStackBox>
            <h3>기술스택</h3>
            <TechStacks>
              {stacks.map((stack, idx) => (
                <Tech
                  style={{
                    backgroundColor: partyStack.includes(stack)
                      ? '#f7f7f7'
                      : 'white',
                  }}
                  key={idx}
                  onClick={() => handlePartyStack(stack)}
                >
                  {stack}
                </Tech>
              ))}
            </TechStacks>
          </TechStackBox>

          <MeetingTimeandPeopleBox>
            <MeetingTimeBox>
              <h3 style={{ marginBottom: 20 }}>모임 시간대</h3>
              <Select
                options={times}
                placeholder={!partyTime ? '모임 시간대' : partyTime}
                onChange={(time) => setPartyTime(time.value)}
                value={partyTime}
              />
            </MeetingTimeBox>
            <PeopleBox>
              <h3 style={{ marginBottom: 20 }}>모집 인원</h3>
              <Select
                options={people}
                placeholder={!partyNum ? '모집 인원' : partyNum}
                onChange={(num) => setPartyNum(num.value)}
                value={partyNum}
              />
            </PeopleBox>
          </MeetingTimeandPeopleBox>

          <MeetingTimeandPeopleBox>
            <MeetingTimeBox>
              <h3 style={{ marginBottom: 20 }}>모집 여부</h3>
              <Select
                options={opens}
                placeholder={partyIsOpen === true ? '모집 중' : '모집 완료'}
                onChange={(open) => setPartyIsOpen(open.value)}
                value={partyIsOpen}
              />
            </MeetingTimeBox>
            <PeopleBox>
              <h3 style={{ display: 'inline' }}>모집 지역</h3>
              <Checkbox
                style={{ marginBottom: 20, marginLeft: 10 }}
                onChange={handleisRemote}
              >
                비대면을 원해요
              </Checkbox>
              <Select
                options={locations}
                placeholder={!partyLocation ? '모집 지역' : partyLocation}
                onChange={(loc) => setPartyLocation(loc.value)}
                value={partyLocation}
                isDisabled={isDisabled}
              />
            </PeopleBox>
          </MeetingTimeandPeopleBox>
        </PartyInfoBox>

        <EditorBox>
          <PostTitleBox>
            <h3 style={{ marginBottom: 20 }}>모집글 제목</h3>
            <PostTitle
              type="text"
              value={partyPostTitile}
              onChange={(e) => setPartyPostTitle(e.target.value)}
              placeholder="글 제목을 작성하세요"
            ></PostTitle>
          </PostTitleBox>
          <h3 style={{ marginBottom: 20 }}>모임 설명</h3>
          <ReactQuill
            value={partyDesc}
            onChange={setPartyDesc}
            ref={quillRef}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline'],
                [
                  { list: 'ordered' },
                  { list: 'bullet' },
                  { indent: '-1' },
                  { indent: '+1' },
                ],
              ],
            }}
          />
        </EditorBox>

        <WriteButtonBox>
          <WriteButton
            onClick={() => {
              setIsClicked(!isClicked);
            }}
            style={{
              backgroundColor: isClicked ? '#f7f7f7' : 'white',
            }}
            type="submit"
          >
            모집글 올리기
          </WriteButton>
        </WriteButtonBox>
        <button onClick={handleDelete}>삭제</button>
      </EditingBox>
    </WritePageContainer>
  );
};

export default MateWrite;

const WritePageContainer = styled.div`
  max-width: 977px;
  margin: auto;
  border: 1px solid black;
  padding: 45px;
`;

const GuideTextsBox = styled.div`
  margin-bottom: 50px;
`;

const PageTitle = styled.div`
  margin-bottom: 20px;
`;

const PageInfo = styled.div``;

const EditingBox = styled.form``;

const PartyInfoBox = styled.div`
  margin-bottom: 40px;
`;

const PartyTitleBox = styled.div`
  margin-bottom: 40px;
`;

const PartyTitle = styled.input`
  border-style: none;
  border-bottom: 0.5px solid #b9b9b9;
  outline-style: none;
  width: 877px;
  margin-top: 20px;
  font-size: 15px;
  padding: 10px 0;
`;

const TechStackBox = styled.div`
  margin-bottom: 40px;
`;

const TechStacks = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tech = styled.div`
  border-radius: 30px;
  border: 1px solid #b9b9b9;
  font-size: 15px;
  text-align: center;
  padding: 12px 0;
  width: 130px;
  cursor: pointer;
`;

const MeetingTimeandPeopleBox = styled.div`
  display: flex;
  gap: 170px;
  margin-bottom: 40px;
`;

const MeetingTimeBox = styled.div`
  width: 300px;
`;

const PeopleBox = styled.div`
  align-items: center;
  width: 300px;
`;

const PostTitleBox = styled.div`
  margin-bottom: 40px;
`;
const PostTitle = styled.input`
  border-style: none;
  border-bottom: 0.5px solid #b9b9b9;
  outline-style: none;
  font-size: 15px;
  padding: 10px 0;
  width: 877px;
`;

const EditorBox = styled.div``;

const WriteButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const WriteButton = styled.button`
  width: 200px;
  background-color: transparent;
  border: 1px solid #b9b9b9;
  padding: 20px;
  font-size: 15px;
  margin: auto;
`;
