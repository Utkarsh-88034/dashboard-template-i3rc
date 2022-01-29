import React, { useEffect, useRef, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listVoters } from 'actions/voterActions';
import DataTable from 'react-data-table-component';
import { useGetTableData } from 'hooks/use-get-table-data';
import filters from 'helpers/filters';
// components

export default function CardPageVisits() {
  const dispatch = useDispatch();
  const voterList = useSelector((state) => state.voterList);
  const { loading, voters, error } = voterList;
  const [columns, setColumns] = useState();
  const [rows, setRows] = useState();

  const ageFilterRef = useRef();
  useEffect(() => {
    dispatch(listVoters());
  }, []);

  let { rowsData, columnsData } = useGetTableData(voters);

  const selectableFields = (voters) => {
    if (voters?.length > 1) {
      const fieldList = Object.keys(voters[0].Upload_data);
      for (let i = 0; i < fieldList.length; i++) {
        fieldList[i] = fieldList[i].replace(/_/g, ' ');
      }
      return fieldList;
    }
  };

  useEffect(() => {
    setRows(rowsData);
    setColumns(columnsData);
  }, [rowsData, columnsData]);
  // const newRowData = useFilters('Gender', 'F', rowsData);

  const filterSubmitHandler = (e) => {
    e.preventDefault();
    const filterValue = ageFilterRef.current.value;
    setRows(filters('Gender', filterValue, rowsData));
  };
  return (
    <>
      {rows?.length > 0 && columns?.length > 0 ? (
        <>
          <form onSubmit={filterSubmitHandler}>
            <label>Filter Gender</label>
            <select ref={ageFilterRef}>
              <option>M</option>
              <option>F</option>
            </select>
            <button
              type="submit"
              style={{
                margin: '10px',
                backgroundColor: 'cyan',
                padding: '10px',
              }}
            >
              Filter
            </button>
          </form>

          <form style={{ display: 'flex', flexDirection: 'column' }}>
            <label>Select Fields</label>
            <select>
              {selectableFields(voters)?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {selectableFields(voters)?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {selectableFields(voters)?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {selectableFields(voters)?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
            <select>
              {selectableFields(voters)?.map((field, id) => (
                <option value={id}>{field}</option>
              ))}
            </select>
          </form>
          <DataTable columns={columns} data={rows} />
        </>
      ) : (
        ''
      )}
    </>
  );
}
