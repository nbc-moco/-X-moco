import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import blankProfile from '../images/blankProfile.webp';
// import { auth } from '../firebase';
// import uuid from 'react-uuid';

export const usePostCreate = (initialValue) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { posts } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState(initialValue.title);
  const [content, setContent] = useState(initialValue.content);
  const [imgUrl, setImgUrl] = useState(initialValue.imgUrl);
  const [imgDownloadUrl, setImagDownloadUrl] = useState(
    initialValue.imgDownloadUrl,
  );

  const changeTitle = (e) => {
    // e.preventDefault();
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    // e.preventDefault();
    setContent(e.target.value);
  };

  //task 추가 버튼
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // if (title === '' || content === '') return; // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    // user.length > 0 //로그인 해야만 디스패치 되도록 조건 처리
    //   ? dispatch(
    //       __addPost({
    //         userName: auth.currentUser
    //           ? auth.currentUser.displayName
    //           : user[0].email.split('@')[0],
    //         id: uuid(),
    //         title,
    //         content,
    //         isDone: false,
    //         userId: user[0].id,
    //         imgUrl: imgDownloadUrl ?? blankProfile,
    //         invitedId: user[0].invitedUid ?? '',
    //       }),
    //     )
    //   : alert('로그인해주세요');

    // setTitle('');
    // setContent('');
    // navigate('/');
  };

  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    if (posts) {
      posts.map((post) => setImgUrl(post.imgUrl));
    }
  }, [posts]);

  return [
    { title, content, imgUrl, imgDownloadUrl },
    changeTitle,
    changeContent,
    onSubmitHandler,
  ];
};
