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

// const { data, isLoading, isError, error} = useQuery('post', getUser)

  // if (isLoading) {            // //return문 바로 위에 써주기
  //   return <div>로딩중</div>;
  // }
  // if (isError) {
  //   return alert("에러", error);
  // }