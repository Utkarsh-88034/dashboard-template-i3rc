import React from "react";

// Chart & Graph Imports
import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChartHorizontal from "components/Cards/CardBarChartHorizontal";
import CardBarChartVertical from "components/Cards/CardBarChartVertical";
import CardPieChart from "components/Cards/CardPieChar";
import PieRechartComponent from "components/Cards/CardPieChar";

// Components
import TypeCard from "components/Type Cards/TypeCard";

// Router Imports
import { Link } from "react-router-dom";

// Importing Logic of JSX
import DashboardLogic from "./DashboardLogic";

export default function Dashboard() {
  // Importing Data from Logic File
  const {
    parameterMeanData,
    impactMeanData,
    data,
    NationalIssueData,
    LocalIssueData,
    votedMPData,
    votedMLAData,
    willVoteData,
    gainLossMLAData,
    gainLossMPData,
    infleunceData,
    needTransporatationData,
    loyaltyData,
    religiousData,
  } = DashboardLogic();

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <Link to="/admin/dashboard/voter-mapping">
          <TypeCard
            icon={"fas fa-users"}
            title={"Voter Mapping"}
            color="#5261c7"
          />
        </Link>
        <Link to="/admin/dashboard/disposition">
          <TypeCard
            icon={"fas fa-user-tie"}
            title={"Disposition"}
            color="#d384f0"
          />
        </Link>
        <Link to="/admin/dashboard/blw">
          <TypeCard
            icon={"fas fa-briefcase"}
            title={"Booth Level workers"}
            color="#61964a"
          />
        </Link>
        <Link to="/admin/dashboard/ctv">
          <TypeCard
            icon={"fas fa-link"}
            title={"Connect to your voters"}
            color="#ed9a6d"
          />
        </Link>

        <Link to="/admin/dashboard/solution">
          <TypeCard
            icon={"fas fa-question"}
            title={"D day Solution"}
            color="#eb6767"
          />
        </Link>
      </div>

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

      <CardPieChart data={needTransporatationData} />
    </>
  );
}
