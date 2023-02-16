import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Pagination } from 'antd';
import CardSection from '../../shared/CardSection';
import FilterTech from '../../shared/FilterTech';
import FilterLocation from '../../shared/FilterLocation';
import FilterTime from '../../shared/FilterTime';
import FilterNumOfMember from '../../shared/FilterNumOfMember';
import { db } from '../../common/firebase';
import { query, onSnapshot, collection } from 'firebase/firestore';

const MateList = () => {
  const [cardAll, setCardAll] = useState([]);
  const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  const getPostData = async () => {
    const postCollectionRef = collection(db, 'post');

    const q = query(postCollectionRef);
    // collection
    const getPost = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCardAll(data);
    });
  };

  console.log(cardAll);
  useEffect(() => {
    getPostData();
  }, []);

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
          <SortByRecommend>북마크순</SortByRecommend>
          <SortByNew>최신순</SortByNew>
        </SortBox>
      </ViewOptions>

      {/* 카드 리스트 */}
      <CardListContainer>
        <CardList>
          {cardAll.map((item) => (
            <CardSection item={item} />
          ))}
        </CardList>
      </CardListContainer>

      {/* 페이지 */}
      <PaginationContainer>
        <Pagination defaultCurrent={6} total={500} />
      </PaginationContainer>
    </>
  );
};

export default MateList;

// 필터 & 정렬
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

// 카드 리스트
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

// 페이지네이션
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem;
`;
