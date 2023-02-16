import Select from 'react-select';
import { useState } from 'react';

const FilterTech = () => {
  const options = [
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Next.js', label: 'Next.js' },
  ];
  const [text, setText] = useState('');
  const handleSelect = (e) => {
    setText(e);
  };

  return (
    <Select
      isMulti
      options={options}
      closeMenuOnSelect={false}
      placeholder="기술 스택"
      onChange={handleSelect}
      value={text}
      // unstyled={true}
    />
  );
};

export default FilterTech;
