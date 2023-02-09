import styled from '@emotion/styled';
import { useState } from 'react';
import HomeBanner from '../../components/home/HomeBanner';
import HomeCategoryList from '../../components/home/HomeCategoryList';
import HomePlace from '../../components/home/HomePlace';

const Home = () => {
  const [testList, setTestList] = useState([1, 2, 3, 4, 5]);
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
        <InnerBox>......</InnerBox>
        <HomeCategoryList category={testcategoryList} />
      </Box>
      <HomePlace testList={testList} />
    </div>
  );
};

export default Home;

const Box = styled.div`
  height: 232px;
  width: 1200px;
  background-color: yellow;
  margin: 0 auto;
  position: relative;
`;
const InnerBox = styled.div`
  background-color: aqua;
  width: 447px;
  height: 32px;
`;
