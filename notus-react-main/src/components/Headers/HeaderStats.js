import React, { useEffect } from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import { useDispatch, useSelector } from "react-redux";
import { listVoters } from "actions/voterActions";
import { getAllElectionData } from "actions/voterActions";

import { counterVoter } from "helpers/counter";
import { counterElection } from "helpers/counter";

export default function HeaderStats() {
  // Fetching All Data
  // const dispatch = useDispatch();

  // const voterList = useSelector((state) => state.voterList);
  // const { voters } = voterList;

  // const electionList = useSelector((state) => state.electionList);
  // const { elections } = electionList;

  // useEffect(() => {
  //   dispatch(listVoters());
  //   dispatch(getAllElectionData());
  // }, [dispatch]);

  // Counting Values

  // Gender
  // const male = counterVoter(voters, 'Gender', 'Male');
  // const female = counterVoter(voters, 'Gender', 'Female');
  // const other = counterVoter(voters, 'Gender', 'Other');

  // Active Voters

  // const activeVoters = counterVoter(voters, 'Voter_status', 1);
  // const needTransportation = counterElection(
  //   elections,
  //   'need_transportation',
  //   1
  // );

  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-0 pb-32 pt-12 ">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Gender Count"
                  statTitle={`Male: ${male}   Female: ${female}  \t Other: ${other}`}
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div> */}
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Active Voters"
                  statTitle={""}
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="Need Transportation"
                  statTitle={""}
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
