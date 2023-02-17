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
import { useParams } from 'react-router-dom';
// 이메일로 가입 시, 글 작성이 안 된다는 이슈가 있었음. 확인 요망.

const MateEdit = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState([]);
  console.log(postData);

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

  const getPostData = async () => {
    const postRef = await doc(db, 'post', id);
    getDoc(postRef)
      .then((doc) => {
        if (doc.exists()) {
          console.log('Document data:', doc.data());
          setPostData(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log('No such document!');
        }
      })
      .catch((error) => {
        console.log('Error getting document:', error);
      });
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

  console.log(postData.partyName);

  // ! 모집글 수정 함수
  // const handleEditPost = async () => {
  //   try {
  //     await updateDoc(doc(db, 'post', id), {
  //       partyName: 'a',
  //       partyStack: ['b', 'c', 'd'],
  //       partyTime: 'c',
  //       partyNum: 'd',
  //       partyLocation: 'e',
  //       partyIsOpen: 'f',
  //       isRemote: 'g',
  //       partyPostTitile: 'h',
  //       partyDesc: 'i',
  //     });
  //     console.log('수정 성공');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!currentUser) return;
    getUserInfo();
    getPostData();
    console.log(currentUser);
  }, []);

  return (
    <WritePageContainer>
      <GuideTextsBox>
        <PageTitle>
          <h2>모임 글 수정하기</h2>
        </PageTitle>
      </GuideTextsBox>
      <EditingBox>
        <PartyInfoBox>
          <PartyTitleBox>
            <h3>모임명</h3>
            <PartyTitle
              type="text"
              // value={partyName}
              onChange={(e) => setPartyname(e.target.value)}
              maxLength={10}
              placeholder={postData.partyName}
              // defaultValue={postData.partyName}
            />
          </PartyTitleBox>

          <TechStackBox>
            <h3>기술스택</h3>
            <TechStacks>
              {/* 기존 선택 기술을 어떻게 보여주지? */}
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
                placeholder={!partyTime ? postData.partyTime : partyTime}
                onChange={(time) => setPartyTime(time.value)}
                value={partyTime}
              />
            </MeetingTimeBox>
            <PeopleBox>
              <h3 style={{ marginBottom: 20 }}>모집 인원</h3>
              <Select
                options={people}
                placeholder={!partyNum ? postData.partyNum : partyNum}
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
                // 모집 중 다시 보기
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
                defaultChecked={postData.isRemote}
              >
                비대면을 원해요
              </Checkbox>
              <Select
                options={locations}
                placeholder={
                  !partyLocation ? postData.partyLocation : partyLocation
                }
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
              // value={partyPostTitile}
              onChange={(e) => setPartyPostTitle(e.target.value)}
              placeholder="글 제목을 작성하세요"
              defaultValue={postData.partyPostTitile}
            ></PostTitle>
          </PostTitleBox>
          <h3 style={{ marginBottom: 20 }}>모임 설명</h3>
          <ReactQuill
            defaultValue={postData.partyDesc}
            // value={partyDesc}
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
            수정 완료하기
          </WriteButton>
        </WriteButtonBox>
      </EditingBox>
    </WritePageContainer>
  );
};

export default MateEdit;

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
