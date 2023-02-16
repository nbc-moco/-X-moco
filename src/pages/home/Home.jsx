import { useEffect, useState } from 'react';
import HomeAllBtn from '../../components/home/HomeAllBtn';
import HomeGuideText from '../../components/home/HomeGuideText';
import HomeBanner from '../../components/home/HomeBanner';
import HomeMeetingList from '../../components/home/meeting/HomeMeetingList';
import HomeNewMeetingList from '../../components/home/meeting/newmeeting/HomeNewMeetingList';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../common/firebase';


const Home = () => {
  const [testList, setTestList] = useState([]);
  const [testUserList, setTestUserList] = useState([]);

  //user 정보
  // let userObj = {...testUserList};
  // console.log(userObj)
  
  useEffect(() => {
    const userCollectionRef = collection(db, 'user');
    const w = query(userCollectionRef);
    const getUser = onSnapshot(w, (snapshot) => {
      const newUser = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setTestUserList(newUser)
    })
    return getUser;
  },[])
  console.log(testUserList)
  

  useEffect(() => {
    const postCollectionRef = collection(db, 'post');
    const q = query(postCollectionRef);
    const getPost = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTestList(postData.filter((item) =>
        // item.partyStack.some(i => i === "React") ||
        // item.partyLocation.includes("용산구") ||
        item.partyStack.includes("Python")
      ))
    })
    return getPost;
  },[])
  console.log(testList)
  
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


