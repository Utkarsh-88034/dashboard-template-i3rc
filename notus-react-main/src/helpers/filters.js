const filterSubmit = (column, filterValue, rowData) => {
  const newRowData = [];

  rowData?.map((row) => {
    if (
      row[column]
        .toString()
        .toLowerCase()
        .startsWith(filterValue.toString().toLowerCase())
    ) {
      newRowData.push(row);
    }
  });
  return newRowData;
};
const filters = (data, filterColumns, rowData) => {
  let rows = rowData;
  for (let i = 0; i < data.length; i++) {
    if (data[i] && data[i] != '') {
      rows = filterSubmit(filterColumns[i], data[i], rows);
    }
  }
  return rows;
};

export default filters;
