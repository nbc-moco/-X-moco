import { collection, getDocs, query, where } from "firebase/firestore";
import { authService, db } from "../firebase";

export const getUser = async () => {
    const currentUser = authService.currentUser;
    const q = query(
      collection(db, 'user'),
      where('uid', '==', currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    const userInfo = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data());
      userInfo.push(
        doc.data()
      )
    })
    // setTestUserList(userInfo)
    return userInfo; // return 필수
};

export const getPost = async () => {
    const q = query(
      collection(db, 'post'),
    );
    const querySnapshot = await getDocs(q);
    const postInfo = [];
    querySnapshot.forEach((doc) => {
      // console.log(doc.id, '=>', doc.data());
      postInfo.push(
        doc.data()
      )
    })
    return postInfo;
};
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


// const { data, isLoading, isError, error} = useQuery('post', getUser)
// const postData = useQuery('post', getPost)
// const userData = useQuery('user', getUser)
// console.log('작성글 데이터', postData.data)
// console.log('유저 데이터', userData.data)

  // if (isLoading) {            // //return문 바로 위에 써주기
  //   return <div>로딩중</div>;
  // }
  // if (isError) {
  //   return alert("에러", error);
  // }