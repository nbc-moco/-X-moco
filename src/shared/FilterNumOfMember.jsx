// 제한인원이 아니라, 모집 여부로 바꿔야함

import Select from 'react-select';
import { useState } from 'react';

const FilterNumOfMember = () => {
  const options = [
    { value: '1명', label: '1명' },
    { value: '2명', label: '2명' },
    { value: '3명', label: '3명' },
  ];
  const [text, setText] = useState('');
  const handleSelect = (e) => {
    setText(e);
  };

  return (
    <Select
      options={options}
      placeholder="제한 인원"
      onChange={handleSelect}
      value={text}
    />
  );
};

export default FilterNumOfMember;
