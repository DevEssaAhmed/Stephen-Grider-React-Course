import React from 'react';
import Accordion from '../components/Accordion';

const AccordionPage = () => {
  const items = [
    {
      id: 1,
      label: 'Can I use React on Project?',
      content: 'React is being used everywhere',
    },
    {
      id: 2,
      label: 'Can I use JavaScript on Project?',
      content: 'React is being used everywhere',
    },
    {
      id: 3,
      label: 'Can I use CSS on Project?',
      content: 'React is being used everywhere',
    },
  ];
  return <Accordion items={items} />;
};

export default AccordionPage;
