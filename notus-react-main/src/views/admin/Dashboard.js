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

  console.log(infleunceData);

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

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ width: "50%", minWidth: "400px" }}>
          <CardBarChartHorizontal data={data} color={"#d692fc"} />
        </div>

        <div style={{ width: "50%", minWidth: "400px" }}>
          <CardBarChartVertical data={NationalIssueData} color={"#78bff5"} />
        </div>
        <div style={{ width: "50%", minWidth: "400px" }}>
          <CardBarChartVertical data={LocalIssueData} color={"#92f79e"} />
        </div>
        <div style={{ width: "50%", minWidth: "400px" }}>
          <CardBarChartVertical
            data={infleunceData}
            width={300}
            color={"#ff6969"}
          />
        </div>
      </div>

      <CardPieChart data={needTransporatationData} />
    </>
  );
}
