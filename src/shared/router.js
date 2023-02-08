import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MateList from '../pages/mate/MateList';
import Home from './../pages/home/Home';
import MateDetail from './../pages/mate/MateDetail';

const Router = () => {
  // path 이름은 보통 소문자로 하니, 저희도 소문자로 통일하겠습니다
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matedetail" element={<MateDetail />} />
        <Route path="/mate" element={<MateList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
