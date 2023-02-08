import React from 'react';
import MateDetail from './../pages/mate/MateDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Wrap>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MateDetail" element={<MateDetail />} />
        </Routes>
      </Wrap>
    </BrowserRouter>
  );
};
