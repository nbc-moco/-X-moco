import styled from '@emotion/styled';
import { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const MateWrite = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  // 드랍다운 메뉴 구현하기
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onDropdownOpen = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <WriteContainer>
      <FieldOptionsBox>
        {/* 모집 구분 */}
        <RecruitmentCategoryBox>
          <RecruitmentCategoryTitle>모집 구분</RecruitmentCategoryTitle>
          <RecuitmentCategoryBtn_Mogakco>모각코</RecuitmentCategoryBtn_Mogakco>
          <RecuitmentCategoryBtn_Project>
            프로젝트
          </RecuitmentCategoryBtn_Project>
        </RecruitmentCategoryBox>

        {/* 모집 인원 */}
        <RecruitmentNumberBox>
          <RecruitmentNumberTitle>모집 인원</RecruitmentNumberTitle>
          <RecruitmentNumberBtn_1>1명</RecruitmentNumberBtn_1>
          <RecruitmentNumberBtn_2>2명</RecruitmentNumberBtn_2>
          <RecruitmentNumberBtn_3>3명 이상</RecruitmentNumberBtn_3>
        </RecruitmentNumberBox>

        {/* 사용 스택 */}
        <StacksToUseBox>
          <StacksToUseTitle>사용 스택</StacksToUseTitle>
          <StacksToUseBtn_JS>JS</StacksToUseBtn_JS>
          <StacksToUseBtn_React>React</StacksToUseBtn_React>
          <StacksToUseBtn_Svelt>Svelt</StacksToUseBtn_Svelt>
          <StacksToUseBtn_Nodejs>Nodejs</StacksToUseBtn_Nodejs>
          <StacksToUseBtn_Nextjs>Nextjs</StacksToUseBtn_Nextjs>
          <StacksToUseBtn_TS>TS</StacksToUseBtn_TS>
        </StacksToUseBox>

        <MeetingLocationBox>
          <MeetingLocationTitle>모임 장소</MeetingLocationTitle>
        </MeetingLocationBox>

        <CommunicationToolBox>
          <CommunicationToolTitle>연락 방법</CommunicationToolTitle>
          <CommunicationToolBtn_openkakao>
            카카오 오픈 채팅
          </CommunicationToolBtn_openkakao>
          <CommunicationToolBtn_chatting>
            실시간 채팅
          </CommunicationToolBtn_chatting>
          <CommunicationToolBtn_etc>기타</CommunicationToolBtn_etc>
        </CommunicationToolBox>

        <PartyNameBox>
          <PartyNameTitle>모임명</PartyNameTitle>
          <PartyNameInput />
        </PartyNameBox>
      </FieldOptionsBox>

      <StatusBox>
        <SatusTitle>모임 상태</SatusTitle>
        <StatusBtn_Ing>모집 중</StatusBtn_Ing>
        <StatusBtn_End>모집 완료</StatusBtn_End>
      </StatusBox>
      <EditorBox>
        <EditorSection>
          <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            toolbar={{
              options: ['inline', 'blockType'],
            }}
          />
        </EditorSection>
      </EditorBox>
      <WriteBtn>작성 완료하기</WriteBtn>
    </WriteContainer>
  );
};

export default MateWrite;

const WriteContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;
// 필드 옵션 박스
const FieldOptionsBox = styled.div``;

// 모집 구분
const RecruitmentCategoryBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;

const RecruitmentCategoryTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;

const RecuitmentCategoryBtn_Mogakco = styled.button`
  margin-right: 10px;
`;
const RecuitmentCategoryBtn_Project = styled.button`
  margin-right: 10px;
`;

// 모집 인원
const RecruitmentNumberBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;
const RecruitmentNumberTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;
const RecruitmentNumberBtn_1 = styled.button`
  margin-right: 10px;
`;
const RecruitmentNumberBtn_2 = styled.button`
  margin-right: 10px;
`;
const RecruitmentNumberBtn_3 = styled.button`
  margin-right: 10px;
`;

// 사용 스택
const StacksToUseBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;
const StacksToUseTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;
const StacksToUseBtn_JS = styled.button`
  margin-right: 10px;
`;
const StacksToUseBtn_React = styled.button`
  margin-right: 10px;
`;
const StacksToUseBtn_Svelt = styled.button`
  margin-right: 10px;
`;
const StacksToUseBtn_Nodejs = styled.button`
  margin-right: 10px;
`;
const StacksToUseBtn_Nextjs = styled.button`
  margin-right: 10px;
`;
const StacksToUseBtn_TS = styled.button`
  margin-right: 10px;
`;

// 모임 장소
const MeetingLocationBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;
const MeetingLocationTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;

// 연락 방법
const CommunicationToolBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;
const CommunicationToolTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;
const CommunicationToolBtn_openkakao = styled.button`
  margin-right: 10px;
`;
const CommunicationToolBtn_chatting = styled.button`
  margin-right: 10px;
`;
const CommunicationToolBtn_etc = styled.button`
  margin-right: 10px;
`;

// 모임명
const PartyNameBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;
const PartyNameTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;
const PartyNameInput = styled.input``;

// 에디터 박스
const EditorBox = styled.div``;
const EditorSection = styled.div`
  height: 500px;
  border: 1px solid gray;
  margin-bottom: 70px;
`;

// 모집 상태 박스
const StatusBox = styled.div`
  border: 1px solid black;
  margin-bottom: 70px;
`;
const SatusTitle = styled.div`
  margin-bottom: 30px;
  font-size: 24px;
`;
const StatusBtn_Ing = styled.button`
  margin-right: 10px;
`;

const StatusBtn_End = styled.button`
  margin-right: 10px;
`;

// 작성 완료 버튼
const WriteBtn = styled.button`
  font-size: 20px;
  width: 300px;
  height: 60px;
  margin: 0 auto;
`;
