import { useEffect, useState } from 'react';
import HomeAllBtn from '../../components/home/HomeAllBtn';
import HomeGuideText from '../../components/home/HomeGuideText';
import HomeBanner from '../../components/home/HomeBanner';
import HomeMeetingList from '../../components/home/meeting/HomeMeetingList';
import HomeNewMeetingList from '../../components/home/meeting/newmeeting/HomeNewMeetingList';
import { useQueries } from 'react-query';
import { authService, db } from '../../common/firebase';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';

const Home = () => {
  // user정보와 post정보 비교하여 추천(맞춤형) 리스트 구현
  // const result = useQueries([
  //   {
  //     queryKey: ['user'],
  //     queryFn: getUser
  //   },
  //   {
  //     queryKey: ['post'],
  //     queryFn: getPost
  //   }
  // ]);
  // useEffect(() => {
  //   console.log(result); // [{rune 정보, data: [], isSucces: true ...}, {spell 정보, data: [], isSucces: true ...}]
  // const loadingFinishAll = result.some(result => result.isLoading);
  // console.log(loadingFinishAll); // loadingFinishAll이 false이면 최종 완료
  // }, [result])
  
  // useEffect(() => {
  //   console.log(result[0].data[0].moreInfo.u_location)
  //   console.log(result[1].data)
  // }, [])
  const currentUser = authService.currentUser;
  const [postList, setPostList] = useState([]);
  const [userList, setUserList] = useState([]);
  // const [recommendList, setRecommendList] = useState([]);
  // const [currentUserData, setCurrentUserData] = useState([]);
  const currentUserData = userList.filter((item) => item.uid === currentUser?.uid)
  const recommendTechList = postList.filter((item) =>
    !item.isDeleted &&
    item.partyStack.includes(currentUserData[0]?.moreInfo?.u_stack.toString())
  );
  const recommendTimeList = postList.filter((item) =>
    !item.isDeleted &&
    item.partyTime.includes(currentUserData[0]?.moreInfo?.u_time)
  );
  const recommendLocationList = postList.filter((item) =>
    !item.isDeleted &&
    item.partyLocation.includes(currentUserData[0]?.moreInfo?.u_location)
  );
  
  console.log(recommendTechList);
  console.log(recommendTimeList);
  console.log(recommendLocationList);
  
  useEffect(() => {
    const postCollectionRef = collection(db, 'post');
    const q = query(
      postCollectionRef,
      orderBy('createdAt', 'desc')
      );
    const getPost = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPostList(postData)
    })
    return getPost;
  },[])
  
  //postList -> 로그인 안 됐을 시 안보이게
  useEffect(() => {
    const userCollectionRef = collection(db, 'user');
    const q = query(userCollectionRef);
    const getUser = onSnapshot(q, (snapshot) => {
      const userData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUserList(userData)
    })
    return getUser;
  },[])
  console.log(postList)
  console.log(userList)
  

  
  return (
    <>
      <HomeBanner />
      <HomeGuideText />
      <HomeMeetingList 
        recommendTechList={recommendTechList}
        recommendTimeList={recommendTimeList} 
        recommendLocationList={recommendLocationList}
      />
      <HomeNewMeetingList postList={postList} />
      <HomeAllBtn />
    </>
  );
};

export default Home;


