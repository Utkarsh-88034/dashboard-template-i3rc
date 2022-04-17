import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { counterVoter } from "helpers/counter";
import { getAllElectionData } from "actions/voterActions";
import { graphIssueDataGenerator } from "Chart Data/Issues";
import Influence from "Chart Data/Influence";
import { counterElection } from "helpers/counter";
import oldDataCalculator from "Chart Data/oldDataFuture";
import { parameterCalculator } from "Chart Data/parameterImpactData";
import { impactCalculator } from "Chart Data/parameterImpactData";
import { listVotersLkn } from "actions/voterActions";
import { getAllElectionDataLkn } from "actions/voterActions";
import { listVotersVdn } from "actions/voterActions";
import { listVotersWdn } from "actions/voterActions";
import { getAllElectionDataVdn } from "actions/voterActions";
import { getAllElectionDataWdn } from "actions/voterActions";

const DashboardLogic = () => {
  const [voters, setVoters] = useState();
  const [edl, setEdl] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const voterListLkn = useSelector((state) => state.voterListLkn);
  var { votersLkn } = voterListLkn;

  const voterListVdn = useSelector((state) => state.voterListVdn);
  var { votersVdn } = voterListVdn;

  const voterListWdn = useSelector((state) => state.voterListWdn);
  var { votersWdn } = voterListWdn;

  const electionListLkn = useSelector((state) => state.electionListLkn);
  const { edlLkn } = electionListLkn;

  const electionListVdn = useSelector((state) => state.electionListVdn);
  const { edlVdn } = electionListVdn;

  const electionListWdn = useSelector((state) => state.electionListWdn);
  const { edlWdn } = electionListWdn;

  const dispatch = useDispatch();

  useEffect(() => {
    // acc to user access call apis
    if (userInfo.user) {
      if (userInfo.user.lok_sabha_access.length > 0) {
        let lknAccessWithoutUnderscore = "";
        userInfo.user.lok_sabha_access.map((lkn, index) => {
          if (index < userInfo.user.lok_sabha_access.length - 1) {
            lknAccessWithoutUnderscore += `lkn${index + 1}=${lkn}&`;
          } else {
            lknAccessWithoutUnderscore += `lkn${index + 1}=${lkn}`;
          }
        });
        let lknAccess = lknAccessWithoutUnderscore.replace(/ /g, "__");
        dispatch(listVotersLkn(lknAccess));
        dispatch(getAllElectionDataLkn(lknAccess));
      } else if (userInfo.user.vidhan_sabha_access.length > 0) {
        // call for vidhan sabaha
        // voterdatavdn?state=ahmd&vdn=8&vdn1=5
        userInfo.user.vidhan_sabha_access.map((vdn, index) => {
          let vdnAccessWithoutUnderscore = "";
          vdnAccessWithoutUnderscore += `state=${vdn.state}&`;
          vdn.vdns.map((singleVdn) => {
            if (index < vdn.vdns.length - 1) {
              vdnAccessWithoutUnderscore += `vdn${index + 1}=${singleVdn}&`;
            } else {
              vdnAccessWithoutUnderscore += `vdn${index + 1}=${singleVdn}`;
            }
          });
          let vdnAccess = vdnAccessWithoutUnderscore.replace(/ /g, "__");
          // console.log(vdnAccess);
          dispatch(listVotersVdn(vdnAccess));
          dispatch(getAllElectionDataVdn(vdnAccess));
        });
      } else if (userInfo.user.ward_no_access.length > 0) {
        // call for ward no
        // ?state=ahmd&city=ahmd&wdn=5
        userInfo.user.ward_no_access.map((wdn, index) => {
          let wdnAccessWithoutUnderscores = "";
          wdnAccessWithoutUnderscores += `state=${wdn.state}&`;
          wdn.cities.map((city, index) => {
            wdnAccessWithoutUnderscores += `city=${city.city}&`;
            city.wdns.map((singleWdn, index) => {
              if (index < city.wdns.length - 1) {
                wdnAccessWithoutUnderscores += `wdn${index + 1}=${singleWdn}&`;
              } else {
                wdnAccessWithoutUnderscores += `wdn${index + 1}=${singleWdn}`;
              }
            });
          });
          let wdnAccess = wdnAccessWithoutUnderscores.replace(/ /g, "__");
          dispatch(listVotersWdn(wdnAccess));
          dispatch(getAllElectionDataWdn(wdnAccess));
        });
        dispatch(getAllElectionData());
      } else {
        console.log("Check something you might not be getting");
      }
    }
  }, [dispatch, userInfo]);

  useEffect(() => {
    if (votersLkn) {
      if (votersLkn.length > 0) {
        let tempVoters = [];
        votersLkn.map((singleCall, index) => {
          singleCall.map((singleVoterLkn, ind) => {
            tempVoters.push(singleVoterLkn);
          });
        });

        setVoters(tempVoters);
      }
    }
    if (votersVdn) {
      if (votersVdn.length > 0) {
        let tempVoters = [];
        votersVdn.map((singleCall, index) => {
          singleCall.map((singleVoterVdn, ind) => {
            tempVoters.push(singleVoterVdn);
          });
        });
        setVoters(tempVoters);
      }
    }
    if (votersWdn) {
      if (votersWdn.length > 0) {
        let tempVoters = [];
        votersWdn.map((singleCall, index) => {
          singleCall.map((singleVoterWdn, ind) => {
            tempVoters.push(singleVoterWdn);
          });
        });
        setVoters(tempVoters);
      }
    }
  }, [votersLkn, votersVdn, votersWdn]);

  useEffect(() => {
    if (edlLkn) {
      if (edlLkn.length > 0) {
        let tempEdl = [];
        edlLkn.map((singleCall, index) => {
          singleCall.map((singleEdl, ind) => {
            tempEdl.push(singleEdl);
          });
        });
        setEdl(tempEdl);
      }
    }
    if (edlVdn) {
      if (edlVdn.length > 0) {
        let tempEdl = [];
        edlVdn.map((singleCall, index) => {
          singleCall.map((singleEdl, ind) => {
            tempEdl.push(singleEdl);
          });
        });
        console.log(tempEdl);
        setEdl(tempEdl);
      }
    }
    if (edlWdn) {
      if (edlWdn.length > 0) {
        let tempEdl = [];
        edlWdn.map((singleCall, index) => {
          singleCall.map((singleEdl, ind) => {
            tempEdl.push(singleEdl);
          });
        });
        setEdl(tempEdl);
      }
    }
  }, [edlVdn, edlLkn, edlWdn]);
  console.log(voters, edl);

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

  return {
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
    edl,
    voters,
  };
};

export default DashboardLogic;
