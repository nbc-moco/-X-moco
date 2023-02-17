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
import OnboardingPage from '../pages/onboarding/OnboardingPage';
import Search from '../pages/search/Search';
import TeamPage from '../pages/teampage/TeamPage';
import MateEdit from '../pages/mate/MateEdit';

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
        <Route path="/matedetail/:id" element={<MateDetail />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/teampage/:id" element={<TeamPage />} />
        <Route path="/mate" element={<MateList />} />
        <Route path="/write" element={<MateWrite />} />
        <Route path="/edit/:id" element={<MateEdit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
