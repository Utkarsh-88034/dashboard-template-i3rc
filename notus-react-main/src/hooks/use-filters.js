import React from 'react';

const useFilters = (column, filterValue, rowData) => {
  const newRowData = [];
  rowData?.map((row) => {
    if (row[column] === filterValue) {
      newRowData.push(row);
    }
  });
  if (newRowData.length == 0) {
    newRowData.push({
      Address: 'No User',
      Age: 'No User',
      Gender: 'No User',
      Name: 'No User',
      Voter_ID: 'No User',
    });
  }
  return newRowData;
};

export default useFilters;
