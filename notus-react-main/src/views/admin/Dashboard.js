import React, { useEffect } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { ResponsiveContainer } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { listVoters } from "actions/voterActions";
import { counterVoter } from "helpers/counter";
import { getAllElectionData } from "actions/voterActions";
import { getKeyByValue } from "helpers/object";
import { removeFromArray } from "helpers/object";
import { sumOfArray } from "helpers/object";
import CardBarChartHorizontal from "components/Cards/CardBarChartHorizontal";
import CardBarChartVertical from "components/Cards/CardBarChartVertical";
import { graphIssueDataGenerator } from "Chart Data/Issues";
import Influence from "Chart Data/Influence";
import Example from "components/Cards/CardPieChar";
import { counterElection } from "helpers/counter";
import CardPieChart from "components/Cards/CardPieChar";
import PieRechartComponent from "components/Cards/CardPieChar";
import { q15 } from "Coding Notations/voter.status";
import { q18 } from "Coding Notations/voter.status";
import { q14 } from "Coding Notations/voter.status";
import oldDataCalculator from "Chart Data/oldDataFuture";
import { parameterCalculator } from "Chart Data/parameterImpactData";
import { impactCalculator } from "Chart Data/parameterImpactData";

export default function Dashboard() {
  //
  //
  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;

  const electionList = useSelector((state) => state.electionList);
  const { edl } = electionList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listVoters());
    dispatch(getAllElectionData());
  }, [dispatch]);

  const males = counterVoter(voters, "Gender", "Male");
  const females = counterVoter(voters, "Gender", "Female");

  // Issues
  const { NationalIssueData, LocalIssueData } = graphIssueDataGenerator(edl);

  const data = [
    {
      name: "Female",
      Count: females,
    },
    {
      name: "Male",
      Count: males,
    },
  ];
  const { infleunceData } = Influence(edl);

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
  console.log(edl);

  const {
    willVoteData,
    votedMLAData,
    votedMPData,
    loyaltyData,
    religiousData,
    gainLossMLAData,
    gainLossMPData,
  } = oldDataCalculator(edl);

  const parameterMeanData = parameterCalculator(edl);
  const impactMeanData = impactCalculator(edl);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          overflowX: "hidden",
          justifyContent: "space-evenly",
        }}
      >
        <div style={{ width: "100%", minWidth: "300px" }}>
          <CardLineChart data={parameterMeanData} color={"#f57a7a"} />
        </div>
        <div style={{ width: "100%", minWidth: "300px" }}>
          <CardLineChart data={impactMeanData} color={"#ccc"} />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartHorizontal data={data} color={"#d692fc"} />
        </div>

        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical data={NationalIssueData} color={"#78bff5"} />
        </div>

        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <CardBarChartVertical data={LocalIssueData} color={"#92f79e"} />
        </div>

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
          <CardBarChartVertical
            data={infleunceData}
            width={280}
            color={"#ff6969"}
          />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <PieRechartComponent data={needTransporatationData} />
        </div>
        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <PieRechartComponent data={loyaltyData} />
        </div>

        <div style={{ width: "100%", minWidth: "300px", maxWidth: "600px" }}>
          <PieRechartComponent data={religiousData} />
        </div>
      </div>

      {/* <CardPieChart data={needTransporatationData} /> */}
    </>
  );
}
