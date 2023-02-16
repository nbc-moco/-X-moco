import { collection, query, onSnapshot, where } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import {
  GroupWrap,
  GroupHeader,
  GroupUserInfo,
  GroupImg,
  GroupUserId,
  GroupBox,
  GroupPerson,
  UserHr,
} from './MateDetailWritingstyle';

const MateDetailWriting = () => {
  const [post, setpost] = useState([]);
  useEffect(() => {
    const q = query(collection(db, 'post'), 'post/docs');
    const getPost = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setpost(postData);
    });
    return getPost;
  }, []);
  console.log(post);

  return (
    <GroupWrap>
      <GroupHeader>
        실험중
        {/* {post.partyPostTitile} */}
      </GroupHeader>
      <GroupUserInfo>
        <GroupImg />
        <GroupUserId>
          테스트
          {/* {post.nickName} */}
        </GroupUserId>
      </GroupUserInfo>
      <UserHr />
      <GroupBox>
        <GroupPerson>
          테스트
          {/* {post.partyDesc} */}
        </GroupPerson>
      </GroupBox>
    </GroupWrap>
  );
};

export default MateDetailWriting;
