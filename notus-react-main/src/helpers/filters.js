const filterSubmit = (column, filterValue, rowData) => {
  const newRowData = [];
  rowData?.map((row) => {
    if (typeof row[column] == "string" && typeof filterValue == "string") {
      if (row[column].toLowerCase() === filterValue.toLowerCase()) {
        newRowData.push(row);
      }
    } else {
      if (row[column] === filterValue) {
        newRowData.push(row);
      }
    }
  });
  return newRowData;
};
const filters = (data, filterColumns, rowData) => {
  let rows = rowData;
  for (let i = 0; i < data.length; i++) {
    if (data[i] != "") {
      rows = filterSubmit(filterColumns[i], data[i], rows);
    }
  }
  return rows;
};

export default filters;
