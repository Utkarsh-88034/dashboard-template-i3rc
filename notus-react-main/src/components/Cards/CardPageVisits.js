import React, { useEffect, useRef, useState } from "react";
// import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listVoters } from "actions/voterActions";
import DataTable from "react-data-table-component";
import { useGetTableData } from "hooks/use-get-table-data";
import filters from "helpers/filters";
import { getAllElectionData } from "actions/voterActions";
// components

export default function CardPageVisits() {
  // Fetching Voter List
  const dispatch = useDispatch();

  const electionList = useSelector((state) => state.electionList);
  const { elections } = electionList;

  const voterList = useSelector((state) => state.voterList);
  const { loading, voters, error } = voterList;
  const [columnsVoter, setColumnsVoter] = useState();
  const [rowsVoter, setRowsVoter] = useState();

  const [columnsElection, setColumnsElection] = useState();
  const [rowsElection, setRowsElection] = useState();

  const ageFilterRef = useRef();
  useEffect(() => {
    dispatch(listVoters());
    dispatch(getAllElectionData());
  }, []);

  let votersTable = useGetTableData(voters);
  let electionTable = useGetTableData(elections);

  const selectableFields = (voters, elections) => {
    if (voters?.length > 0 && elections?.length > 0) {
      const fieldList1 = Object.keys(voters[0].Upload_data);
      for (let i = 0; i < fieldList1.length; i++) {
        fieldList1[i] = fieldList1[i].replace(/_/g, " ");
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
  }, [votersTable]);

  // useEffect(() => {
  //   setRowsElection(electionTable.rowsData);
  //   setColumnsElection(electionTable.columnsData);
  // }, [electionTable]);
  // const newRowData = useFilters('Gender', 'F', rowsData);

  const filterSubmitHandler = (e) => {
    e.preventDefault();
    const filterValue = ageFilterRef.current.value;
    setRowsVoter(filters("Gender", filterValue, votersTable.rowsData));
  };

  const fields = selectableFields(voters, elections);

  return (
    <>
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
              margin: "10px",
              backgroundColor: "cyan",
              padding: "10px",
            }}
          >
            Filter
          </button>
        </form>

        <form style={{ display: "flex", flexDirection: "column" }}>
          <label>Select Fields</label>
          <select>
            {fields?.fieldList1?.map((field, id) => (
              <option value={id}>{field}</option>
            ))}
          </select>
          <select>
            {fields?.fieldList1?.map((field, id) => (
              <option value={id}>{field}</option>
            ))}
          </select>
          <select>
            {fields?.fieldList1?.map((field, id) => (
              <option value={id}>{field}</option>
            ))}
          </select>
          <select>
            {fields?.fieldList1?.map((field, id) => (
              <option value={id}>{field}</option>
            ))}
          </select>
          <select>
            {fields?.fieldList1?.map((field, id) => (
              <option value={id}>{field}</option>
            ))}
          </select>
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
