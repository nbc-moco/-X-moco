import React, { useState } from 'react';
import styled from '@emotion/styled';
import MemberSide from '../../components/teamPage/MemberSide';
import MemberChat from '../../components/teamPage/MemberChat';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../common/firebase';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function TeamPage() {
  return (
    <>
      <JustContainer>
        <WholeContainer>
          <MemberSide />
          <DashBoardContainer>
            <DashboardHeaderWrap>
              <DashboardTitle>논현동 불주먹 모임(파이썬 부신다)</DashboardTitle>
              <ProjectBasicStatus>
                <ProjectPlace>
                  <ProjectPlaceTitlte>모임 장소</ProjectPlaceTitlte>
                  <ProjectPlaceName>서울 논현동</ProjectPlaceName>
                </ProjectPlace>
                <ProjectPlace>
                  <ProjectPlaceTitlte>모임 시간</ProjectPlaceTitlte>
                  <ProjectPlaceName>월, 수 / PM 19:00~21:00</ProjectPlaceName>
                </ProjectPlace>
              </ProjectBasicStatus>
            </DashboardHeaderWrap>
            <ContentContainerR>
              <ContentContainer>
                <ContenRuleAndPlace>
                  <ContentTitle>안녕</ContentTitle>
                  <ContentRule></ContentRule>
                  <ContentTitle>안녕</ContentTitle>
                  <ContentPlace>
                    <ContentPlaceCard>
                      <PlaceCardTitle>좋은 장소</PlaceCardTitle>
                      <PlaceCardText>개쩜</PlaceCardText>
                    </ContentPlaceCard>
                    <ContentPlaceCard>
                      <PlaceCardTitle>좋은 장소</PlaceCardTitle>
                      <PlaceCardText>개쩜</PlaceCardText>
                    </ContentPlaceCard>
                    <ContentPlaceCard>
                      <PlaceCardTitle>좋은 장소</PlaceCardTitle>
                      <PlaceCardText>개쩜</PlaceCardText>
                    </ContentPlaceCard>
                  </ContentPlace>
                </ContenRuleAndPlace>
              </ContentContainer>
            </ContentContainerR>
          </DashBoardContainer>
          <MemberChat />
        </WholeContainer>
      </JustContainer>
    </>
  );
}

const JustContainer = styled.div`
  font-family: var(--body-font);
  color: var(--body-color);
  background-position: center;
  background-size: cover;
  background-color: rgba(18, 21, 39, 0.86);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1em 2em;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const WholeContainer = styled.div`
  max-width: 1500px;
  max-height: 900px;
  height: 95vh;
  display: flex;
  overflow: hidden;
  width: 100%;
  border-radius: 20px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 20px 50px rgb(0 0 0 / 30%);
  position: relative;
`;

const DashBoardContainer = styled.div`
  position: relative;
  padding: 50px 40px;
  color: var(--color-text, #333333);
  background-color: var(--color-bg, #fff);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const DashboardHeaderWrap = styled.div`
  width: 100%;
  box-shadow: inset 0 -1px 0 0 #dde3ea;
  padding-left: 10px;
  padding-right: 16px;
`;

const DashboardTitle = styled.p`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const ProjectBasicStatus = styled.div`
  display: flex;
  height: 50px;
`;

const ProjectPlace = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;
`;

const ProjectPlaceTitlte = styled.span`
  font-size: 18px;
  line-height: 32px;
  font-weight: 700;
  margin-right: 20px;
`;

const ProjectPlaceName = styled.span`
  position: relative;
  padding-right: 24px;
`;

const ContentContainer = styled.div`
  flex: 3;
  margin: 10px;
`;

const ContenRuleAndPlace = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentRule = styled.div`
  background-color: #31abbd;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 250px;
  padding: 30px;
  border-radius: 20px;
  align-self: stretch;
  overflow: hidden;
  position: relative;
`;

const ContentTitle = styled.a`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 20px;
  margin-top: 20px;
`;

const ContentPlace = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

const ContentPlaceCard = styled.div`
  position: relative;
  background-color: var(--video-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s;
  height: 250px;
  background-color: black;
`;

const PlaceCardTitle = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 1.4em;
  padding: 12px 20px 0;
  overflow: hidden;
  background-color: var(--video-bg);
  z-index: 9;
  position: relative;
`;

const PlaceCardText = styled.p`
  font-size: 12px;
  padding: 12px 20px 20px;
  background-color: var(--video-bg);
  position: relative;
`;

const ContentContainerR = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow-x: hidden;
`;
