import React from 'react';
import Table from '../components/Table';
import SortableTable from '../components/SortableTable';

const TablePage = () => {
  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Yellow', color: 'bg-yellow-500', score: 1 },
    { name: 'Green', color: 'bg-green-500', score: 4 },
  ];
  const config = [
    {
      label: 'Name',
      render: (fruit) => fruit.name,
      sortValue: (fruit) => fruit.name,
    },
    {
      label: 'Color',
      render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>,
    },
    {
      label: 'Score',
      render: (fruit) => fruit.score,
      sortValue: (fruit) => fruit.score,

      // header: () => <th className='bg-red-500'>Score</th>,
    },
  ];
  const keyFn = (fruit) => {
    return fruit.name;
  };
  return (
    <div>
      <SortableTable data={data} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
