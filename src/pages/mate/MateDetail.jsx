import React from 'react';
import styled from '@emotion/styled';
import MateDetailWriting from '../../components/mateDetail/mateDetailWrite/MateDetailWriting';
import DetailRecruit from '../../components/mateDetail/mateDetailWrite/detailRecruit/DetailRecruit';
import AddComment from '../../components/mateDetail/addComment/AddComment';
import CommentList from '../../components/mateDetail/commentList/CommentList';

const MateDetail = () => {
  return (
    <MateDetailWrap>
      <MateDetailContainer>
        <MateDetailWriting />
      </MateDetailContainer>
      <CommentWrap>
        {/* 더미데이터 */}
        <CommentList />
        <AddComment />
        {/* Editor 값 가져오기 */}
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
