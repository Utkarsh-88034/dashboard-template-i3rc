import { getAllElectionData } from "actions/voterActions";
import { listVoters } from "actions/voterActions";
import Lok_Sabha from "assets/data/up";
import oldDataCalculator from "Chart Data/oldDataFuture";
import { impactCalculator } from "Chart Data/parameterImpactData";
import { parameterCalculator } from "Chart Data/parameterImpactData";
import CardBarChartVertical from "components/Cards/CardBarChartVertical";
import PieRechartComponent from "components/Cards/CardPieChar";
import chartFilteredData from "helpers/chartData";
import { counterElection } from "helpers/counter";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const VoterMapping = () => {
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

  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;
  const electionList = useSelector((state) => state.electionList);
  const { edl } = electionList;

  useEffect(() => {
    // console.log(edl);
    setVoterData(edl);
  }, [edl]);

  const yes = counterElection(edl, "need_transportation", 1);
  const no = counterElection(edl, "need_transportation", 2);

  const needTransporatationData = [
    {
      name: "Yes",
      value: yes,
    },
    {
      name: "No",
      value: no,
    },
  ];
  const {
    willVoteData,
    votedMLAData,
    votedMPData,
    loyaltyData,
    religiousData,
    gainLossMLAData,
    gainLossMPData,
  } = oldDataCalculator(voterData);

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

  const parameterMeanData = parameterCalculator(edl);
  const impactMeanData = impactCalculator(edl);
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
      <div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical
            data={votedMPData}
            color={"#ffce63"}
            width={200}
          />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical
            data={votedMLAData}
            color={"#7c75ff"}
            width={200}
          />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical
            data={willVoteData}
            color={"#ff75b6"}
            width={200}
          />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical
            data={gainLossMPData}
            color={"#a79cdb"}
            width={200}
          />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical
            data={gainLossMLAData}
            color={"#9fdb9c"}
            width={200}
          />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <PieRechartComponent data={needTransporatationData} />
        </div>

        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <PieRechartComponent data={religiousData} />
        </div>
      </div>
    </>
  );
};

export default VoterMapping;
