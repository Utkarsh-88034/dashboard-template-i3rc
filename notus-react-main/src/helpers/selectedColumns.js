import React from 'react';

const selectedColumns = (column, fields) => {
  const newCol = [];
  column?.map((col) => {
    if (fields.includes(col.name)) {
      newCol.push(col);
    }
  });
  return newCol;
};

export default selectedColumns;
