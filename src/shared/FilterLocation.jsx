import Select from 'react-select';
import { useState } from 'react';

const FilterLocation = ({ isDisabled }) => {
  const options = [
    { value: '마포구', label: '마포구' },
    { value: '용산구', label: '용산구' },
    { value: '종로구', label: '종로구' },
  ];
  const [text, setText] = useState('');
  const handleSelect = (e) => {
    setText(e);
  };

  return (
    <Select
      options={options}
      placeholder="지역"
      onChange={handleSelect}
      value={text}
      isDisabled={isDisabled}
    />
  );
};

export default FilterLocation;
