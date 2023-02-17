import Select from 'react-select';
import { useState } from 'react';
import { times } from '../data/times';

const FilterTime = ({ onSelectedTime }) => {
  const [selectedTime, setSelectedTime] = useState('');
  const handleSelect = (time) => {
    setSelectedTime(time);
    onSelectedTime(time);
  };

  return (
    <Select
      options={times}
      placeholder="시간대"
      onChange={handleSelect}
      value={selectedTime}
      isClearable={true}
    />
  );
};

export default FilterTime;
