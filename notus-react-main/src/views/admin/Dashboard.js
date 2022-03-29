import React, { useEffect, useState } from "react";

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
import TypeCard from "components/Type Cards/TypeCard";
import { Link } from "react-router-dom";
import { listVotersLkn } from "actions/voterActions";
import { getAllElectionDataLkn } from "actions/voterActions";
import { listVotersVdn } from "actions/voterActions";

export default function Dashboard() {
  //
  //

  const [voters, setVoters] = useState();
  const [edl, setEdl] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const voterListLkn = useSelector((state) => state.voterListLkn);
  const { votersLkn } = voterListLkn;

  const electionListLkn = useSelector((state) => state.electionListLkn);
  const { edlLkn } = electionListLkn;

  const dispatch = useDispatch();
  console.log(voters, edl);
  useEffect(() => {
    if (userInfo.user.lok_sabha_access.length > 0) {
      if (votersLkn) {
        setVoters(votersLkn.final_data);
      }
      if (edlLkn) {
        setEdl(edlLkn);
      }
    }
  }, [votersLkn]);

  useEffect(() => {
    // acc to user access

    if (userInfo.user.lok_sabha_access.length > 0) {
      let lknAccess = "";
      userInfo.user.lok_sabha_access.map((lkn, index) => {
        if (index < userInfo.user.lok_sabha_access.length - 1) {
          lknAccess += `lkn${index + 1}=${lkn}&`;
        } else {
          lknAccess += `lkn${index + 1}=${lkn}`;
        }
      });
      dispatch(listVotersLkn(lknAccess));
      dispatch(getAllElectionDataLkn(lknAccess));
    } else if (userInfo.user.vidhan_sabha_access.length > 0) {
      // call for vidhan sabaha
      // voterdatavdn?state=ahmd&vdn=8&vdn1=5
      userInfo.user.vidhan_sabha_access.map((vdn, index) => {
        let vdnAccess = "";
        vdnAccess += `state=${vdn.state}&`;
        vdn.vdns.map((singleVdn) => {
          if (index < vdn.vdns.length - 1) {
            vdnAccess += `vdn${index + 1}=${singleVdn}&`;
          } else {
            vdnAccess += `vdn${index + 1}=${singleVdn}`;
          }
        });
        // console.log(vdnAccess);
        dispatch(listVotersVdn(vdnAccess));
        // dispatch(getAllElectionData());
      });
    } else if (userInfo.user.ward_no_access.length > 0) {
      // call for ward no
      dispatch(listVoters());
      dispatch(getAllElectionData());
    } else {
      console.log("CHeck something you might not be ghetting ");
    }
  }, [dispatch]);

  // const males = counterVoter(voters, "Gender", "Male");
  // const females = counterVoter(voters, "Gender", "Female");

  // Issues
  const { NationalIssueData, LocalIssueData } = graphIssueDataGenerator(edl);

  // const data = [
  //   {
  //     name: "Female",
  //     Count: females,
  //   },
  //   {
  //     name: "Male",
  //     Count: males,
  //   },
  // ];
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

      {/* <div
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
      </div> */}

      {/* <CardPieChart data={needTransporatationData} /> */}
    </>
  );
}
