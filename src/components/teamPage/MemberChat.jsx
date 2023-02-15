import React from 'react';
import styled from '@emotion/styled';

export default function MemberChat() {
  return (
    <>
      <ContentChatContainer>
        <ContentTitle>안녕</ContentTitle>
        <SideWrapper>
          <ContentChatArea></ContentChatArea>
        </SideWrapper>
      </ContentChatContainer>
    </>
  );
}

const ContentChatContainer = styled.div`
  height: 100%;
  width: 700px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ContentTitle = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  line-height: 34px;
  position: sticky;
  top: 0;
`;

export const SideWrapper = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding: 36px 0;
  width: 145px;
  position: sticky;
  top: 40px;
`;

const ContentChatArea = styled.div`
  width: 100%;
  height: 600px;
  background-color: black;
  border-radius: 20px;
`;
