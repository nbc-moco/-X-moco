import styled from '@emotion/styled';
import { useState } from 'react';
import HomeBanner from '../../components/home/HomeBanner';
import HomeCategoryList from '../../components/home/HomeCategoryList';
import HomePlace from '../../components/home/HomePlace';

const Home = () => {
  const [testList, setTestList] = useState([1, 2, 3, 4, 5, 6]);
  const [testcategoryList, setTestcategoryList] = useState([
    { name: '카테고리1' },
    { name: '카테고리2' },
    { name: '카테고리3' },
    { name: '카테고리4' },
    { name: '카테고리5' },
    { name: '카테고리6' },
  ]);
  return (
    <div>
      <HomeBanner />
      <Box>
        <InnerBox></InnerBox>
        <HomeCategoryList category={testcategoryList} />
      </Box>
      <HomePlace testList={testList} />
    </div>
  );
};

export default Home;

const Box = styled.div`
  height: 202px;
  width: 1200px;
  /* background-color: yellow; */
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;
const InnerBox = styled.div`
  background-color: #D9D9D9;
  width: 447px;
  height: 32px;
`;
