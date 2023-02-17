import styled from '@emotion/styled';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../common/firebase';
import SearchResultCard from './SearchResultCard';

const Search = () => {
  const params = useParams();
  const [searchData, setSearchData] = useState([]);
  
  // firestore에서 post 문서 받아오기
  useEffect(() => {
    const postCollectionRef = collection(db, 'post');
    const q = query(postCollectionRef);
    const getPost = onSnapshot(q, (snapshot) => {
      const newPost = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    setSearchData(newPost.filter((item) =>
        item.partyStack.includes(params.word) ||
        item.partyLocation.includes(params.word) ||
        item.partyTime.includes(params.word)
        ));
    });
    return getPost;
  }, [params.word]);
  console.log(searchData);

    //   const searched = searchData.filter((item) => 
    //     item.name.toLowerCase().includes(params.word)
    //     )
    // result = result.filter((item) =>item.FCLTY_NM.includes(search) ||  item.FCLTY_ROAD_NM_ADDR.includes(search)

  return (
    <SearchResultContainer>
      <SearchTitle>{params.word.toLowerCase()}</SearchTitle>
      <CardWrapper>
        {searchData.map((searchdata) => (
          <SearchResultCard key={searchdata.id} {...searchdata} />
        ))}
      </CardWrapper>
    </SearchResultContainer>
  );
};

export default Search;

const SearchResultContainer = styled.div`
  width: 1180px;
  margin: 0 auto;
  background-color: aliceblue;
`;
const SearchTitle = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #c8f1e8;
  gap: 20px 20px;
`;
