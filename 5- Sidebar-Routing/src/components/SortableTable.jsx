import React, { useState } from 'react';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import Table from './Table';
import useSort from '../hooks/use-sort';

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );
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
          onClick={() => setSortColumn(column.label)}
        >
          <div className='flex items-center'>
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

export default SortableTable;
