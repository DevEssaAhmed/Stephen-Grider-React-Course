import { useEffect, useState } from 'react';
import DropDown from '../components/DropDown';

const DropDownPage = () => {
  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Green', value: 'green' },
    { label: 'Blue', value: 'blue' },
  ];
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  return (
    <div className='App'>
      <DropDown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};

export default DropDownPage;
