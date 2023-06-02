import React, { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';

const SortableTable = (props) => {
  const { config, data } = props;
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
    }
  };

  const getIcons = () => {
    if (label !== sortBy) {
    }
    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === 'asc') {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === 'desc') {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className='cursor-pointer hover:bg-gray-100'
          onClick={() => handleClick(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Only sort data if sortOrder && sortBy are not null
  // Make a copy of the 'data' prop
  // Find the correct sortValue Function and use if for sorting
  let sortedData = data;
  if (sortOrder && sortBy) {
    const column = config.find((column) => column.label === sortBy);
    const { sortValue } = column;
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === 'asc' ? 1 : -1;
      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return valueA - valueB;
      }
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
