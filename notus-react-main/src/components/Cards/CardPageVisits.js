import React, { useEffect, useRef, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { listVoters } from 'actions/voterActions';
import DataTable from 'react-data-table-component';
import { useGetTableData } from 'hooks/use-get-table-data';
import filters from 'helpers/filters';
import { getAllElectionData } from 'actions/voterActions';
// components

export default function CardPageVisits() {
  // Fetching Voter List
  const dispatch = useDispatch();

  const electionList = useSelector((state) => state.electionList);
  const { elections } = electionList;

  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;
  const [columnsVoter, setColumnsVoter] = useState();
  const [rowsVoter, setRowsVoter] = useState();

  // const [columnsElection, setColumnsElection] = useState();
  // const [rowsElection, setRowsElection] = useState();

  const ageFilterRef = useRef();
  useEffect(() => {
    dispatch(listVoters());
    dispatch(getAllElectionData());
  }, [dispatch]);

  let votersTable = useGetTableData(voters);
  // let electionTable = useGetTableData(elections);

  const selectableFields = (voters, elections) => {
    if (voters?.length > 0 && elections?.length > 0) {
      const fieldList1 = Object.keys(voters[0].Upload_data);
      for (let i = 0; i < fieldList1.length; i++) {
        fieldList1[i] = fieldList1[i].replace(/_/g, ' ');
      }

      // const fieldList2 = Object.keys(elections[0]);
      // for (let i = 0; i < fieldList2.length; i++) {
      //   fieldList2[i] = fieldList2[i].replace(/_/g, " ");
      // }

      return {
        fieldList1,
        // fieldList2,
      };
    }
  };

  useEffect(() => {
    setRowsVoter(votersTable.rowsData);
    setColumnsVoter(votersTable.columnsData);
  }, [votersTable.rowsData, votersTable.columnsData]);

  // useEffect(() => {
  //   setRowsElection(electionTable.rowsData);
  //   setColumnsElection(electionTable.columnsData);
  // }, [electionTable]);
  // const newRowData = useFilters('Gender', 'F', rowsData);

  const filterSubmitHandler = (e) => {
    e.preventDefault();
    const filterValue = ageFilterRef.current.value;
    const newRowsVoter = filters('Gender', filterValue, votersTable.rowsData);
    console.log(newRowsVoter);
    setRowsVoter(newRowsVoter);
    console.log(rowsVoter);
  };

  const fields = selectableFields(voters, elections);

  return (
    <>
      <>
        <form onSubmit={filterSubmitHandler}>
          <label style={{ margin: '15px' }}>Filter Gender</label>
          <select ref={ageFilterRef}>
            <option value="Male">M</option>
            <option value={'Female'}>F</option>
          </select>
          <button
            type="submit"
            style={{
              margin: '10px',
              backgroundColor: 'rgb(2, 132, 199)',
              padding: '10px',
              color: 'white',
            }}
          >
            Filter
          </button>
        </form>

        <form
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '1.5rem',
          }}
        >
          <label
            style={{ margin: '15px', fontWeight: 'bolder', fontSize: '1.5rem' }}
          >
            Select Fields
          </label>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
            }}
          >
            {fields?.fieldList1?.map((field, id) => (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  margin: '10px 10px',
                  width: '15rem',
                  justifyContent: 'space-between',
                }}
              >
                <label style={{ margin: '0 5px' }}>{field}</label>
                <input type={'checkbox'} value={field} key={id} />
              </div>
            ))}
          </div>
          <button
            type="submit"
            style={{
              margin: '10px',
              backgroundColor: 'rgb(2, 132, 199)',
              padding: '10px',
              color: 'white',
            }}
          >
            Apply Fields
          </button>
        </form>
        <DataTable columns={columnsVoter} data={rowsVoter} />
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
