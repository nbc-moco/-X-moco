import Select from 'react-select';
import { useState } from 'react';
import { locations } from '../data/locations';

const FilterLocation = ({ isDisabled, onSelectedLoaction }) => {
  const [selectedLocation, setSelectedLoaction] = useState('');
  const handleSelect = (location) => {
    setSelectedLoaction(location);
    onSelectedLoaction(location);
  };

  return (
    <Select
      options={locations}
      placeholder="지역"
      onChange={handleSelect}
      value={selectedLocation}
      isDisabled={isDisabled}
      isClearable={true}
    />
  );
};

export default FilterLocation;
