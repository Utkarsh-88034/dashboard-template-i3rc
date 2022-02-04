const filterSubmit = (column, filterValue, rowData) => {
  const newRowData = [];
  rowData?.map((row) => {
    if (row[column].toLowerCase() === filterValue.toLowerCase()) {
      newRowData.push(row);
    }
  });
  return newRowData;
};
const filters = (data, filterColumns, rowData) => {
  let rows = rowData;
  for (let i = 0; i < data.length; i++) {
    if (data[i] != '') {
      console.log(data[i]);
      rows = filterSubmit(filterColumns[i], data[i], rows);
    }
  }
  return rows;
};

export default filters;
