import styled from '@emotion/styled';

export const MemberSidebar = styled.div`
  width: 220px;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  transition-duration: 0.2s;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const MemberInfoTitle = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 19px;
  font-weight: 600;
  line-height: 34px;
  position: sticky;
  top: 0;

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: 0;
    background: var(--theme-bg);
    width: 150px;
    height: 270px;
    z-index: -1;
    background-color: black;
  }
`;

export const SideWrapper = styled.div`
  border-bottom: 1px solid var(--border-color);
  padding: 36px 0;
  width: 145px;
  position: sticky;
  top: 40px;
`;

export const MemberInfoProfileTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.07em;
  margin-bottom: 24px;
  color: white;
`;

export const MembersInfoProfileTitle = styled.div`
  font-size: 12px;
  letter-spacing: 0.07em;
  margin-bottom: 24px;
  color: white;
  position: sticky;
  top: 205px;
`;

export const MemberInfoProfile = styled.div`
  align-items: center;
  display: flex;
  min-width: 0;
  margin-bottom: 20px;
`;

export const MemberInfoProfileImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  border: 1px solid black;
  object-fit: cover;
`;

export const MemberInfoProfileInfo = styled.div`
  margin-left: 15px;
  overflow: hidden;
  color: #fff;
`;

export const MemberInfoProfileName = styled.p`
  font-size: 13px;
`;

export const MemberInfoProfilePosition = styled.p`
  font-size: 13px;
  display: flex;
  margin-top: 2px;
`;
