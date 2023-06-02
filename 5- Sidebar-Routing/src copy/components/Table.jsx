import React from 'react';

const Table = ({ data, config }) => {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return (
        <React.Fragment key={column.label}> {column.header()}</React.Fragment>
      );
    }
    return <th key={column.label}>{column.label}</th>;
  });

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className='p-2' key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });
    return (
      <tr className='border-b' key={keyFn(rowData)}>
        {renderedCells}
        {/* <td className='p-3'>{rowData.name}</td>
        <td className='p-3'>
          <div className={`p-3 m-2 ${rowData.color}`}></div>
        </td>
        <td className='p-3'>{rowData.score}</td> */}
      </tr>
    );
  });

  return (
    <table className='table-auto border-spacing-2 '>
      <thead>
        <tr className='border-b-2'>
          {/* <th>Fruits</th>
          <th>Color</th>
          <th>Score</th> */}
          {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
