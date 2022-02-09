import { listVoters } from 'actions/voterActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import filters from './filters';

const chartFilteredData = (data, voters, edl) => {
  const filterColumns = [
    'Lok_Sabha_Name',
    'Vidhan_Sabha_Name',
    'polling_Booth_number',
    'Village_Name',
    'Name',
    'Voter_ID',
  ];
  const filterSubmit = (column, filterValue, rowData) => {
    const newRowData = [];

    rowData?.map((row) => {
      if (
        row.Upload_data[column]
          .toString()
          .toLowerCase()
          .startsWith(filterValue.toString().toLowerCase())
      ) {
        newRowData.push(row);
      }
    });
    return newRowData;
  };
  const filter = (data, filterColumns, rowData) => {
    let rows = rowData;
    for (let i = 0; i < data.length; i++) {
      if (data[i] && data[i] != '') {
        rows = filterSubmit(filterColumns[i], data[i], rows);
      }
    }
    return rows;
  };
  const filteredRow = filter(data, filterColumns, voters);
  const electionIdArr = [];

  filteredRow.map((row) => {
    electionIdArr.push(row.Election_Data_ID[0]);
  });
  const filteredData = [];
  edl.map((ele) => {
    if (electionIdArr.includes(ele._id.toString())) {
      filteredData.push(ele);
    }
  });

  return filteredData;
};

export default chartFilteredData;
