import React, { useEffect, useRef, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listVoters } from 'actions/voterActions';
import DataTable from 'react-data-table-component';
import { useGetTableData } from 'hooks/use-get-table-data';
import filters from 'helpers/filters';
import { getAllElectionData } from 'actions/voterActions';
import selectedColumns from 'helpers/selectedColumns';
// components

export default function CardPageVisits({ columnsVoter, rowsVoter }) {
  // Fetching Voter List

  const customStyles = {
    rows: {
      style: {
        minHeight: '52px', // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };

  return (
    <>
      <>
        <DataTable
          columns={columnsVoter}
          data={rowsVoter}
          customStyles={customStyles}
          pagination
        />
      </>
      <>
        {/* <>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <label>Select Fields</label>
            <select>
              {fields?.fieldList2?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {fields?.fieldList2?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {fields?.fieldList2?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {fields?.fieldList2?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {fields?.fieldList2?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
          </form>
          {console.log(columnsElection, rowsElection)}
          <DataTable columns={columnsElection} data={rowsElection} />
        </> */}
      </>
    </>
  );
}
