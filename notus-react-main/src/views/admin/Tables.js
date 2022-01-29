import React, { useCallback } from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import CardPageVisits from "components/Cards/CardPageVisits";
import { useDispatch, useSelector } from "react-redux";
import { listVoters } from "actions/voterActions";
import { getAllElectionData } from "actions/voterActions";

export default function Tables() {
  // Fetching Voter List
  const dispatch = useDispatch();

  const voterList = useSelector((state) => state.voterList);
  const { loading, voters, error } = voterList;

  const electionList = useSelector((state) => state.electionList);
  const { elections } = electionList;

  const getVoterListHandler = useCallback(async () => {
    dispatch(listVoters());
    dispatch(getAllElectionData());
  }, []);

  // Counting Gender

  return (
    <>
      <div className="flex flex-wrap mt-4">
        <CardPageVisits />
      </div>
      <div>
        <button
          style={{
            margin: " 2rem 0",
            padding: "0.5rem 1rem",
            border: "1px solid black",
            color: "white",
            backgroundColor: "black",
            borderRadius: "4px",
          }}
          onClick={() => getVoterListHandler()}
        >
          Get Voters
        </button>
      </div>
    </>
  );
}
