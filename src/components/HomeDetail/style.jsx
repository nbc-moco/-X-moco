import styled from '@emotion/styled';

export const TabContainer = styled.div`
  max-width: 1100px;
  margin: 50px auto;
  padding: 0;
  position: sticky;
  top: 40px; /* 클래스 sticky인 요소 안에서 top값이 40이되면 sticky를 적용 */
  transition: top 0.1s ease 0s;
`;

export const Tabs = styled.div`
  height: 52px;
  border-bottom: 1px solid var(--grey-020);
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TabTitle = styled.div`
  width: 180px;
  cursor: pointer;
  height: 51px;
  position: relative;
  display: flex;
  justify-content: center;
`;
