import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MateList from '../pages/mate/MateList';
import Header from '../components/header/Header';
import Login from '../pages/joinLogin/Login';
import SignUp from '../pages/joinLogin/SignUp';
import MyPage from '../pages/mypage/MyPage';
import Home from './../pages/home/Home';
import MateDetail from './../pages/mate/MateDetail';
import MateWrite from '../pages/mate/MateWrite';

const Router = () => {
  // path 이름은 보통 소문자로 하니, 저희도 소문자로 통일하겠습니다
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/matedetail" element={<MateDetail />} />
        <Route path="/mate" element={<MateList />} />
        <Route path="/mate/write" element={<MateWrite />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
