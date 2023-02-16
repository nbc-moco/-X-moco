import { useEffect } from 'react';
import HomeAllBtn from '../../components/home/HomeAllBtn';
import HomeGuideText from '../../components/home/HomeGuideText';
import HomeBanner from '../../components/home/HomeBanner';
import HomeMeetingList from '../../components/home/meeting/HomeMeetingList';
import HomeNewMeetingList from '../../components/home/meeting/newmeeting/HomeNewMeetingList';
import { useQueries } from 'react-query';
import { getPost, getUser } from '../../common/utils/getApi';
// import { collection, getDocs, onSnapshot, query, where } from 'firebase/firestore';
// import { authService, db } from '../../common/firebase';


const Home = () => {
  // user정보와 post정보 비교하여 추천(맞춤형) 리스트 구현
  const result = useQueries([
    {
      queryKey: ['user'],
      queryFn: getUser
    },
    {
      queryKey: ['post'],
      queryFn: getPost
    }
  ]);
  useEffect(() => {
    console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  const loadingFinishAll = result.some(result => result.isLoading);
  console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
  }, [result])
  console.log(result[0].data[0].moreInfo.u_time)
  console.log(result[1].data)
  // const recommendList = result[1].data[0].filter((item) => 
  //   item.partyLocation.includes(result[0].data[0].moreInfo.u_location)
  // )
  // console.log('추천리스트', recommendList)

  

  
  // useEffect(()=>{
  //   getPost();
  // },[])
  // useEffect(() => {
  //   const postCollectionRef = collection(db, 'post');
  //   const q = query(postCollectionRef);
  //   const getPost = onSnapshot(q, (snapshot) => {
  //     const postData = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));
  //     setTestList(postData.filter((item) =>
  //       // item.partyStack.some(i => i === "React") ||
  //       // item.partyLocation.includes("용산구") ||
  //       item.partyStack.includes("Python")
  //     ))
  //   })
  //   return getPost;
  // },[])
  

  // if (isLoading) {
  //   return <div>로딩중</div>
  // }
  // if (isError) {
  //   return alert('에러', error)
  // }
  
  return (
    <>
      <HomeBanner />
      <HomeGuideText />
      <HomeMeetingList />
      <HomeNewMeetingList />
      <HomeAllBtn />
    </>
  );
};

export default Home;


