import Select from 'react-select';
import { useState } from 'react';

const FilterTech = ({ onSelectedTech }) => {
  const options = [
    { value: 'Javascript', label: 'Javascript' },
    { value: 'React', label: 'React' },
    { value: 'Next.js', label: 'Next.js' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'Go', label: 'Go' },
    { value: 'Typescript', label: 'Typescript' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Spring', label: 'Spring' },
    { value: 'Rust', label: 'Rust' },
    { value: 'Svelt', label: 'Svelt' },
    { value: 'Vue', label: 'Vue' },
  ];

  const [selectedTech, setSlectedTech] = useState('');
  const handleSelect = (tech) => {
    setSlectedTech(tech);
    onSelectedTech(tech);
  };

  return (
    <Select
      isMulti
      options={options}
      closeMenuOnSelect={false}
      placeholder="기술 스택"
      onChange={handleSelect}
      value={selectedTech}
    />
  );
};

export default FilterTech;
