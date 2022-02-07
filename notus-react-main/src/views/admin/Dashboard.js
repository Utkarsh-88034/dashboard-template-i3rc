import React, { useEffect } from "react";

// components

import CardLineChart from "components/Cards/CardLineChart.js";
import CardBarChart from "components/Cards/CardBarChart.js";
import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";
import Example from "components/Cards/CardBarChart";
import { ResponsiveContainer } from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { listVoters } from "actions/voterActions";

export default function Dashboard() {
  //
  //
  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listVoters());
  }, [dispatch]);

  return (
    <>
      <div className="mt-6">
        <div className="flex flex-wrap">
          <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
            <CardLineChart />
          </div>
          <div className="w-full xl:w-4/12 px-4">
            <CardBarChart voters={voters} />
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full xl:w-4/12 px-4">
            <CardSocialTraffic />
          </div>
        </div>
      </div>
      {/* <CardBarChart /> */}
    </>
  );
}
