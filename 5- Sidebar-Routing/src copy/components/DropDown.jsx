import { useEffect, useState, useRef } from 'react';

import { GoChevronDown, GoChevronRight } from 'react-icons/go';
import Panel from './Panel';

const DropDown = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }
      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);
    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    // setIsOpen(!isOpen);
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    // Close Dropdown
    setIsOpen(false);
    // What option did the user click on??

    onChange(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div
        className='p-1 rounded cursor-pointer hover:bg-sky-100'
        onClick={() => handleOptionClick(option)}
        key={option.value}
      >
        {option.label}
      </div>
    );
  });
  // let content = 'Select...';
  // if (selection) {
  //   content = selection.label;
  // }
  return (
    <div ref={divEl} className='relative w-48'>
      <Panel
        className='flex items-center justify-between cursor-pointer'
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className='text-lg' />
      </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOptions}</Panel>}
    </div>
  );
};
//   return (
//     <div className='relative w-48'>
//       <div
//         className='flex items-center justify-between cursor-pointer'
//         onClick={handleClick}
//       >
//         {value?.label || 'Select...'}
//         <GoChevronDown className='text-lg' />
//       </div>
//       {isOpen && (
//         <div className='absolute top-full'>
//           {renderedOptions}
//         </div>
//       )}
//     </div>
//   );
// };

export default DropDown;
