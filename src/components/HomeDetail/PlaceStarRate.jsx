import React, { useState } from 'react';
import { Rate } from 'antd';

export default function PlaceStarRate() {
  const [value, setValue] = useState(0);

  function handleChange(value) {
    setValue(value);
  }
  return <Rate onChange={handleChange} value={value} />;
}
