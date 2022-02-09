import { getAllElectionData } from "actions/voterActions";
import { listVoters } from "actions/voterActions";
import Lok_Sabha from "assets/data/up";
import oldDataCalculator from "Chart Data/oldDataFuture";
import PieRechartComponent from "components/Cards/CardPieChar";
import chartFilteredData from "helpers/chartData";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const BoothLevel = () => {
  const [name, setName] = useState();
  const [pollingBoothNo, setPollingBoothNo] = useState();
  const [lokSabha, setLokSabha] = useState();
  const [vidhanSabha, setVidhanSabha] = useState();
  const [villageName, setVillageName] = useState();
  const [voterID, setVoterID] = useState();
  const [voterData, setVoterData] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listVoters());
    dispatch(getAllElectionData());
  }, [dispatch]);
  const electionList = useSelector((state) => state.electionList);
  const { edl } = electionList;
  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;

  useEffect(() => {
    // console.log(edl);
    setVoterData(edl);
  }, [edl]);

  const data = [];
  const onSubmit = () => {
    data.push(
      lokSabha,
      vidhanSabha,
      pollingBoothNo,
      villageName,
      name,
      voterID
    );
    const filteredData = chartFilteredData(data, voters, edl);
    setVoterData(filteredData);
    // setVoterData(newVoterData);
  };

  useEffect(() => {
    onSubmit();
  }, [lokSabha, vidhanSabha, name, voterID, pollingBoothNo, villageName]);

  const {
    willVoteData,
    votedMLAData,
    votedMPData,
    loyaltyData,
    religiousData,
    gainLossMLAData,
    gainLossMPData,
  } = oldDataCalculator(edl);
  return (
    <>
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
      <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
        <PieRechartComponent data={loyaltyData} />
      </div>
    </>
  );
};

export default BoothLevel;
