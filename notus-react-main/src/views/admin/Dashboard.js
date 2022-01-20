import React, { useCallback, useEffect } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardPageVisits from "components/Cards/CardPageVisits.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { listVoters } from "actions/voterActions";



export default function Dashboard() {


  // Fetching Voter List
  const dispatch = useDispatch()

const voterList = useSelector((state) => state.voterList);
const { loading, voters, error } = voterList;
console.log(voters);

const getVoterListHandler = useCallback(
  async (e) => {
    dispatch(listVoters());
  },
  []
);

useEffect(() => {
  getVoterListHandler();
}, [])


  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}
