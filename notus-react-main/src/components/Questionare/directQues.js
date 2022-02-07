import React, { useEffect, useRef, useState } from "react";
import Lok_Sabha from "../../assets/data/up";
import CardPageVisits from "components/Cards/CardPageVisits";
import { useDispatch, useSelector } from "react-redux";
import { useGetTableData } from "hooks/use-get-table-data";
import filters from "helpers/filters";
import { listVoters } from "actions/voterActions";

const DirectQues = ({ backBtn, setedit }) => {
  const [filter, setFilter] = useState(false);
  const lokSabhaRef = useRef();
  const vidhanSabhaRef = useRef();
  const pollingBoothRef = useRef();
  const villageNameRef = useRef();
  const wardNumberRef = useRef();
  const voterIdRef = useRef();
  const data = [];

  const dispatch = useDispatch();
  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;

  //states

  const [columnsVoter, setColumnsVoter] = useState();
  const [rowsVoter, setRowsVoter] = useState();
  const [selectedFields, setSelectedFields] = useState([]);
  const [rowCopy, setRowCopy] = useState();

  const [name, setName] = useState();
  const [pollingBoothNo, setPollingBoothNo] = useState();
  const [lokSabha, setLokSabha] = useState();
  const [vidhanSabha, setVidhanSabha] = useState();
  const [villageName, setVillageName] = useState();
  const [voterID, setVoterID] = useState();

  useEffect(() => {
    dispatch(listVoters());
  }, [dispatch]);

  let votersTable = useGetTableData(voters, selectedFields);

  useEffect(() => {
    setRowsVoter(votersTable.rowsData);
    setRowCopy(votersTable.rowsData);
    setColumnsVoter(votersTable.columnsData);
  }, [votersTable.rowsData, votersTable.columnsData]);
  const filterColumns = [
    "Lok_Sabha_Name",
    "Vidhan_Sabha_Name",
    "polling_Booth_number",
    "Village_Name",
    "Name",
    "Voter_ID",
  ];
  const onSubmit = () => {
    data.push(
      lokSabha,
      vidhanSabha,
      pollingBoothNo,
      villageName,
      name,
      voterID
    );
    const newRowsVoter = filters(data, filterColumns, rowCopy);
    setRowsVoter(newRowsVoter);
  };

  useEffect(() => {
    onSubmit();
  }, [lokSabha, vidhanSabha, name, voterID, pollingBoothNo, villageName]);

  const editVoter = () => {
    setedit(rowsVoter[0].id);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          width: "max-content",
        }}
        onClick={backBtn}
      >
        <i
          style={{
            margin: " 1.5rem 0",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            fontSize: "1.2rem",
          }}
          className="fas fa-chevron-left"
        ></i>
        Back
      </div>

      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          margin: " 2rem",
        }}
      >
        <div
          style={{
            margin: "10px",
            width: "30rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ margin: " 0 10px" }}>Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              height: "35px",
              width: "250px",
              border: "1px solid black",
            }}
          />
        </div>
        <div
          style={{
            margin: "10px",
            width: "30rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ margin: " 0 10px" }}>Voter ID:</label>
          <input
            onChange={(e) => {
              setVoterID(e.target.value);
            }}
            type="number"
            style={{
              height: "35px",
              width: "250px",
              border: "1px solid black",
            }}
          />
        </div>
        <div
          style={{
            margin: "10px",
            width: "30rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ margin: " 0 10px" }}>Lok Sabha Name:</label>
          <input
            onChange={(e) => {
              setLokSabha(e.target.value);
            }}
            list="list"
            style={{
              height: "35px",
              width: "250px",
              border: "1px solid black",
            }}
          />
          <datalist id="list">
            {Lok_Sabha.map((data) => (
              <option>{data["Lok Sabha Name"]}</option>
            ))}
          </datalist>
        </div>
        <div
          style={{
            margin: "10px",
            width: "30rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ margin: " 0 10px" }}>Vidhan Sabha Name:</label>
          <input
            onChange={(e) => {
              setVidhanSabha(e.target.value);
            }}
            list="list"
            style={{
              height: "35px",
              width: "250px",
              border: "1px solid black",
            }}
          />
          <datalist id="list">
            {Lok_Sabha.map((data) => (
              <option>{data["Lok Sabha Name"]}</option>
            ))}
          </datalist>
        </div>
        <div
          style={{
            margin: "10px",
            width: "30rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ margin: " 0 10px" }}>Polling Booth Number:</label>
          <input
            type={"text"}
            onChange={(e) => {
              setPollingBoothNo(e.target.value);
            }}
            style={{
              height: "35px",
              width: "250px",
              border: "1px solid black",
            }}
          />
        </div>
        <div
          style={{
            margin: "10px",
            width: "30rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <label style={{ margin: " 0 10px" }}>Village Name:</label>
          <input
            onChange={(e) => {
              setVillageName(e.target.value);
            }}
            list="list"
            style={{
              height: "35px",
              width: "250px",
              border: "1px solid black",
            }}
          />
          <datalist id="list">
            {Lok_Sabha.map((data) => (
              <option>{data["Lok Sabha Name"]}</option>
            ))}
          </datalist>
        </div>
      </form>
      <CardPageVisits columnsVoter={columnsVoter} rowsVoter={rowsVoter} />
      {rowsVoter?.length == 1 ? (
        <button
          onClick={editVoter}
          style={{
            margin: " 1.5rem 0",
            padding: "0.5rem 1rem",
            color: "white",
            backgroundColor: "rgb(2, 132, 199)",
            borderRadius: "4px",
            width: "100%",
          }}
        >
          Confirm Voter
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default DirectQues;
