// 제한인원이 아니라, 모집 여부로 바꿔야함

import Select from 'react-select';
import { useState } from 'react';
import { people } from '../data/people';

const FilterNumOfMember = ({ onSelectedPeople }) => {
  const [selectedNum, setSelectedNum] = useState('');
  const handleSelect = (numOfMember) => {
    setSelectedNum(numOfMember);
    onSelectedPeople(numOfMember);
  };

  return (
    <Select
      options={people}
      placeholder="제한 인원"
      onChange={handleSelect}
      value={selectedNum}
      isClearable={true}
    />
  );
};

export default FilterNumOfMember;
