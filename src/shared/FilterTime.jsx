import Select from 'react-select';
import { useState } from 'react';

const FilterTime = () => {
  const options = [
    { value: '평일/오전', label: '평일/오전' },
    { value: '평일/오후', label: '평일/오후' },
    { value: '주말/오후', label: '주말/오후' },
    { value: '주말/오전', label: '주말/오전' },
    { value: '무관', label: '무관' },
  ];
  const [text, setText] = useState('');
  console.log(text);
  const handleSelect = (e) => {
    setText(e);
  };

  return (
    <Select
      options={options}
      placeholder="시간대"
      onChange={handleSelect}
      value={text}
    />
  );
};

export default FilterTime;
