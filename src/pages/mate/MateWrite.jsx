import React, { useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles
import styled from '@emotion/styled';
import FilterTime from './FilterTime';
import FilterNumOfMe from './FilterNumOfMember';
import FilterLocation from './FilterLocation';
import { Checkbox } from 'antd';
import { useState } from 'react';

const MateWrite = () => {
  const [isNoMeeting, setIsNoMeeting] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const quillRef = useRef(null);
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
  const onChange = (e) => {
    setIsNoMeeting(!isNoMeeting);
    setIsDisabled(!isDisabled);
  };
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
      <EditingBox>
        <PartyInfoBox>
          <PartyTitleBox>
            <h3>모임명</h3>
            <PartyTitle maxLength={10} placeholder="12자 이내로 작성해주세요" />
          </PartyTitleBox>

          <TechStackBox>
            <h3>기술스택</h3>
            <TechStacks>
              {stacks.map((item) => (
                <Tech onClick={() => console.log(item)}>{item}</Tech>
              ))}
            </TechStacks>
          </TechStackBox>

          <MeetingTimeandPeopleBox>
            <MeetingTimeBox>
              <h3 style={{ marginBottom: 20 }}>모임 시간대</h3>
              <FilterTime />
            </MeetingTimeBox>
            <PeopleBox>
              <h3 style={{ marginBottom: 20 }}>모집 인원</h3>
              <FilterNumOfMe />
            </PeopleBox>
          </MeetingTimeandPeopleBox>

          <LocationBox>
            <LocationInfo>
              <h3 style={{ display: 'inline' }}>모임 지역</h3>
              <span style={{ color: 'GrayText' }}>
                비대면 체크 시, 지역 설정을 할 수 없습니다
              </span>
            </LocationInfo>
            <Location>
              <LocationSelect>
                <FilterLocation isDisabled={isDisabled} />
              </LocationSelect>
              <NoMeeting>
                <Checkbox onChange={onChange}>비대면을 원해요</Checkbox>
              </NoMeeting>
            </Location>
          </LocationBox>
        </PartyInfoBox>

        <EditorBox>
          <h3 style={{ marginBottom: 20 }}>모임 설명</h3>
          <ReactQuill
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
          <WriteButton>모임 개설하기</WriteButton>
        </WriteButtonBox>
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
  width: 300px;
`;

const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LocationInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Location = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const LocationSelect = styled.div`
  width: 300px;
`;

const NoMeeting = styled.div``;

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
