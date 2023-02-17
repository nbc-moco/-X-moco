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
  // 필터 옵션 상태
  const [selectedTech, setSelectedTech] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedNumOfMember, setSelectedNumOfMember] = useState('');
  // 정렬 옵션 상태
  const [selectedSort, setSelectedSort] = useState('');

  // selectedTech를 텍스트로 담아둠
  const selectedTechText = [...selectedTech]
    .map((item) => item.value)
    .join(',');

  // post 컬렉션 데이터 상태
  const [cardAll, setCardAll] = useState([]);

  // 필터 옵션 선택 핸들러
  const handleSelectTech = (tech) => {
    setSelectedTech(tech);
  };

  const handleSelectLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSelectTime = (time) => {
    setSelectedTime(time);
  };

  const handleSelectNumOfMember = (numOfMember) => {
    setSelectedNumOfMember(numOfMember);
  };

  // post 컬렉션에서 데이터 가져오는 함수
  const getPostData = async () => {
    const postCollectionRef = collection(db, 'post');
    const q = query(postCollectionRef);
    const getPost = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCardAll(data.filter((item) => item.isDeleted === false));
    });
  };

  let DATA = [...cardAll];

  // 기술을 여러 개 선택했을 때는 필터가 작동을 안 함
  if (selectedTech.length > 0) {
    DATA = DATA.filter((item) => item.partyStack.includes(selectedTechText));
  }

  if (selectedLocation) {
    DATA = DATA.filter((item) => item.partyLocation === selectedLocation.value);
  }

  if (selectedTime) {
    DATA = DATA.filter((item) => item.partyTime === selectedTime.value);
  }

  if (selectedNumOfMember) {
    DATA = DATA.filter((item) => item.partyNum === selectedNumOfMember.value);
  }

  if (selectedSort === 'byRecommend') {
    DATA = DATA.sort((a, b) => b.bookmark - a.bookmark);
  }

  if (selectedSort === 'byNewest') {
    DATA = DATA.sort((a, b) => b.createdAt - a.createdAt);
  }

  console.log(DATA);

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <>
      {/* 필터 & 정렬 */}
      <ViewOptions>
        <FilterBox>
          <FilterTech onSelectedTech={handleSelectTech} />
          <FilterLocation onSelectedLoaction={handleSelectLocation} />
          <FilterTime onSelectedTime={handleSelectTime} />
          <FilterNumOfMember onSelectedPeople={handleSelectNumOfMember} />
        </FilterBox>
        <SortBox>
          <SortByRecommend
            onClick={() => {
              setSelectedSort('byRecommend');
            }}
          >
            추천순
          </SortByRecommend>
          <SortByNew
            onClick={() => {
              setSelectedSort('byNewest');
            }}
          >
            최신순
          </SortByNew>
        </SortBox>
      </ViewOptions>

      {/* 카드 리스트 */}
      <CardListContainer>
        <CardList>
          {DATA.map((item) => (
            <CardSection key={item.id} item={item} />
          ))}
        </CardList>
      </CardListContainer>

      {/* 페이지 */}
      <PaginationContainer>
        <Pagination defaultCurrent={1} total={30} />
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
