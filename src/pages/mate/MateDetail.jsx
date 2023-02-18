import React from 'react';
import styled from '@emotion/styled';
import MateDetailWriting from '../../components/MateDetail/MateDetailWrite/MateDetailWriting';
import DetailRecruit from './../../components/MateDetail/detailRecruit/DetailRecruit';
import AddComment from '../../components/MateDetail/AddComment/AddComment';
import CommentList from '../../components/MateDetail/CommentList/CommentList';
import { db } from '../../common/firebase';
import { doc, updateDoc } from 'firebase/firestore';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Modal } from 'antd';
import { useState } from 'react';

const MateDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const handleMoveToEdit = () => {
    navigate(`/edit/${id}`);
  };

  // ! 모집글 삭제 함수 (표면상 삭제이지만, 팀페이지에서 글의 정보를 가져가 사용하기 때문에 비활성화 처리합니다)
  // 팀페이지에서는 모달로.
  const handleDelete = async () => {
    try {
      await updateDoc(doc(db, 'post', id), {
        isDeleted: true,
      });
      console.log('삭제 성공');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MateDetailWrap>
      <MateDetailContainer>
        <MateDetailWriting />
        <div onClick={handleDelete}>삭제</div>
        <div onClick={handleMoveToEdit}>수정</div>
      </MateDetailContainer>
      <CommentWrap>
        <CommentList />
        <AddComment />
      </CommentWrap>
      <DetailRecruit />
    </MateDetailWrap>
  );
};
export default MateDetail;

const MateDetailWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 400px 230px 150px;
  // min-height: 100vh;
  height: 100%;
`;
const MateDetailContainer = styled.div`
  width: 100%;
`;
const CommentWrap = styled.div`
  width: 100%;
`;

// !

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
