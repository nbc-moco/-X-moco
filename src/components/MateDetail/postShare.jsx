import { collection, query, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { db } from '../../../common/firebase';

const postShare = () => {
  const [post, setpost] = useState([]);

  useEffect(() => {
    const postCollectionRef = collection(db, 'post');
    const q = query(postCollectionRef);
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

  return <></>;
};

export default postShare;
