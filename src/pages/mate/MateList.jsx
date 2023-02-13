import styled from '@emotion/styled';
import CardSection from '../../shared/CardSection';

const MateList = () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      {/* 카드 리스트 */}
      <CardListContainer>
        <CardList>
          {testArray.map((item) => (
            <CardSection />
          ))}
        </CardList>
      </CardListContainer>
    </>
  );
};

export default MateList;

const CardListContainer = styled.section`
  max-width: 1200px;
  margin: auto;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  > * {
    flex-grow: 1;
    flex-shrink: 1;
  }
`;
