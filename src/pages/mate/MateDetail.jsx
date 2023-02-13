import React from 'react';
import styled from '@emotion/styled';
import Comment from '../../components/MateDetail/Comment';
import MateDetailWriting from '../../components/MateDetail/MateDetailWriting';
import MateDetailInfo from '../../components/MateDetail/MateDetailInfo';

const MateDetail = () => {
  return (
    <MateDetailWrap>
      <MateDetailContainer>
        <MateDetailInfo />
        <MateDetailWriting />
      </MateDetailContainer>
      <MapWrap>
        <MapTitle>위치</MapTitle>
        <MapDummy></MapDummy>
      </MapWrap>
      <CommentWrap>
        <Comment />
      </CommentWrap>
    </MateDetailWrap>
  );
};

export default MateDetail;

const MateDetailWrap = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0px 300px 230px 300px;
  min-height: 100vh;
  height: 100%;
`;
const MateDetailContainer = styled.div`
  width: 100%;
`;
const MapWrap = styled.div`
  width: 100%;
`;
const MapTitle = styled.p`
  width: 50px;
  height: 30px;
  margin-top: 70px;
  font-size: 24px;
  font-weight: 500;
`;

const MapDummy = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 30px;
  background-color: #bfbaff;
`;
const CommentWrap = styled.div`
  width: 100%;
`;
