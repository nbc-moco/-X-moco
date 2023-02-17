import React, { useState } from 'react';
import styled from '@emotion/styled';
import MemberSide from '../../components/teamPage/MemberSide';
import MemberChat from '../../components/teamPage/chat/MemberChat';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { authService, db } from '../../common/firebase';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import ContentRule from './ContentRule';
import ContentBoard from './ContentBoard';
import { onAuthStateChanged } from 'firebase/auth';

export default function TeamPage() {
  const { id } = useParams();
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      if (user) {
        const postCollectionRef = collection(db, 'post');
        const q = query(postCollectionRef);
        const getPost = onSnapshot(q, (snapshot) => {
          const testPost = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setPostList(testPost);
        });
        return getPost;
      }
    });
  }, []);

  return (
    <>
      <JustContainer>
        <WholeContainer>
          <MemberSide />
          <DashBoardContainer>
            {postList
              .filter((item) => item.id === id)
              .map((item) => {
                return (
                  <>
                    <DashboardHeaderWrap>
                      <DashboardTitle>{item.partyName}</DashboardTitle>
                      <ProjectBasicStatus>
                        <ProjectPlace>
                          <ProjectPlaceTitlte>모임 장소</ProjectPlaceTitlte>
                          <ProjectPlaceName>
                            {item.partyLocation ? item.partyLocation : '비대면'}
                          </ProjectPlaceName>
                        </ProjectPlace>
                        <ProjectPlace>
                          <ProjectPlaceTitlte>모임 시간</ProjectPlaceTitlte>
                          <ProjectPlaceName>
                            {item.partyTime ? item.partyTime : '무관'}
                          </ProjectPlaceName>
                        </ProjectPlace>
                      </ProjectBasicStatus>
                    </DashboardHeaderWrap>
                    <ContentContainerR>
                      <ContentContainer>
                        <ContenRuleAndPlace>
                          <ContentTitle>📍 모임 장소</ContentTitle>
                          <ContentCard>
                            <PlaceCardTitle>좋은 장소</PlaceCardTitle>
                            <PlaceCardText>개쩜</PlaceCardText>
                          </ContentCard>
                          <ContentTitle>📌 모임 공지</ContentTitle>
                          <ContentRule />
                        </ContenRuleAndPlace>
                      </ContentContainer>
                      <ContentChatContainer>
                        <ContentChat>
                          <ContentTitle>안녕</ContentTitle>
                          <ContentBoard />
                        </ContentChat>
                      </ContentChatContainer>
                    </ContentContainerR>
                  </>
                );
              })}
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
  flex: 2.5;
  margin: 10px;
`;

const ContenRuleAndPlace = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentRuleee = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 30px;
  border-radius: 20px;
  align-self: stretch;
  overflow: hidden;
  position: relative;
  padding-left: 8px;
  font-size: 15px;
  border: 1px solid rgb(150, 150, 150);
  :focus-visible {
    outline: none;
  }
`;

const ContentTitle = styled.a`
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 20px;
  margin-top: 20px;
`;

const ContentCard = styled.div`
  position: relative;
  background-color: var(--video-bg);
  border-radius: 20px;
  overflow: hidden;
  transition: 0.4s;
  height: 200px;
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

const ContentChat = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;

const ContentChatContainer = styled.div`
  flex: 2;
  margin: 10px;
`;

const ContentChatArea = styled.div`
  width: 100%;
  height: 63vh;
  background-color: black;
  border-radius: 20px;
`;
