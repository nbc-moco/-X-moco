import styled from '@emotion/styled';
import CardSection from '../../shared/CardSection';
import FilterLocation from './FilterLocation';
import FilterNumOfMember from './FilterNumOfMember';
import FilterTech from './FilterTech';
import FilterTime from './FilterTime';

const MateList = () => {
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  return (
    <>
      {/* 필터 & 정렬 */}
      <ViewOptions>
        <FilterBox>
          <FilterTech />
          <FilterLocation />
          <FilterTime />
          <FilterNumOfMember />
        </FilterBox>
        <SortBox>
          <SortByRecommend>추천순</SortByRecommend>
          <SortByNew>최신순</SortByNew>
        </SortBox>
      </ViewOptions>

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

const ViewOptions = styled.div`
  max-width: 1200px;
  padding: 1em;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FilterBox = styled.div`
  display: flex;
  gap: 1em;
`;

const SortBox = styled.div`
  display: flex;
  gap: 1em;
`;

const SortByRecommend = styled.div`
  cursor: pointer;
`;
const SortByNew = styled.div`
  cursor: pointer;
`;

const CardListContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const CardList = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1em;
  > * {
    flex-grow: 1;
    flex-shrink: 1;
  }
`;
