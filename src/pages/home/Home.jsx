import { useState } from 'react';
import HomeAllBtn from '../../components/home/HomeAllBtn';
import HomeGuideText from '../../components/home/HomeGuideText';
import HomeBanner from '../../components/home/HomeBanner';
import HomeMeetingList from '../../components/home/meeting/HomeMeetingList';
import HomeNewMeetingList from '../../components/home/meeting/newmeeting/HomeNewMeetingList';


const Home = () => {
  const [testList, setTestList] = useState([1, 2, 3, 4]);
  
  return (
    <>
      <HomeBanner />
      <HomeGuideText />
      <HomeMeetingList testList={testList} />
      <HomeNewMeetingList testList={testList} />
      <HomeAllBtn />
    </>
  );
};

export default Home;


