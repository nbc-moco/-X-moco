import { doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';
import { useParams } from 'react-router-dom';
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

// getDoc 사용 doc
const MateDetailWriting = () => {
  const { id } = useParams();
  const [post, setpost] = useState([]);

  //useEffect에선 async사용할 수 없음
  const getPost = async () => {
    const q = doc(db, 'post', id);
    const postData = await getDoc(q);
    //비동기
    setpost(postData.data());
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <GroupWrap>
        <GroupHeader>{post.partyPostTitile}</GroupHeader>
        <GroupUserInfo>
          <GroupImg />
          <GroupUserId>{post.nickName}</GroupUserId>
        </GroupUserInfo>
        <UserHr />
        <GroupBox>
          <GroupPerson>{post.partyDesc}</GroupPerson>
        </GroupBox>
      </GroupWrap>
    </>
  );
};

export default MateDetailWriting;
