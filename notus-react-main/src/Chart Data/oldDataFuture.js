import { q18 } from 'Coding Notations/voter.status';
import { q14 } from 'Coding Notations/voter.status';
import { counterElection } from 'helpers/counter';

const { q15 } = require('Coding Notations/voter.status');

const oldDataCalculator = (edl) => {
  let loyaltyObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };
  const counterLoyalty = (data, countingValue) => {
    var count = 0;
    if (data) {
      data.map((voter) => {
        voter.old_data_for_future_reference.loyalty[0] == countingValue &&
          count++;
      });
    }

    return count;
  };
  const loyaltyKeys = Object.keys(loyaltyObj);
  loyaltyKeys.map((key) => {
    let loyalty = counterLoyalty(edl, key);
    loyaltyObj[key] = loyalty;
  });

  const loyaltyData = [
    {
      name: q15[1],
      value: loyaltyObj[1],
    },
    {
      name: q15[2],
      value: loyaltyObj[2],
    },
    {
      name: q15[3],
      value: loyaltyObj[3],
    },
    {
      name: q15[4],
      value: loyaltyObj[4],
    },
    {
      name: q15[5],
      value: loyaltyObj[5],
    },
  ];

  const religiousObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };

  const religiousKeys = Object.keys(religiousObj);

  religiousKeys.map((key) => {
    let countOfReligious = counterElection(edl, 'religious', key);
    religiousObj[key] = countOfReligious;
  });

  const religiousData = [];

  religiousKeys.map((key) => {
    const config = {
      name: q18[key],
      value: religiousObj[key],
    };
    religiousData.push(config);
  });

  let votedLastMPObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  // console.log(edl[0].old_data_for_future_reference.loyalty[0]);
  const counterVotedMP = (data, countingValue) => {
    var count = 0;
    if (data) {
      data.map((voter) => {
        voter.old_data_for_future_reference.Voted_for_mp[0] == countingValue &&
          count++;
      });
    }

    return count;
  };
  const votedMPKeys = Object.keys(votedLastMPObj);
  votedMPKeys.map((key) => {
    let votedMP = counterVotedMP(edl, key);
    votedLastMPObj[key] = votedMP;
  });

  const votedMPData = [];

  votedMPKeys.map((key) => {
    const config = {
      name: q14[key],
      Count: votedLastMPObj[key],
    };
    votedMPData.push(config);
  });

  let votedLastMP2Obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  // console.log(edl[0].old_data_for_future_reference.loyalty[0]);
  const counterVotedMP2 = (data, countingValue) => {
    var count = 0;
    if (data) {
      data.map((voter) => {
        voter.old_data_for_future_reference.Voted_for_mp[1] == countingValue &&
          count++;
      });
    }

    return count;
  };
  const votedMP2Keys = Object.keys(votedLastMP2Obj);
  votedMP2Keys.map((key) => {
    let votedMP2 = counterVotedMP2(edl, key);
    votedLastMP2Obj[key] = votedMP2;
  });

  const votedMP2Data = [];

  votedMP2Keys.map((key) => {
    const config = {
      name: q14[key],
      Count: votedLastMP2Obj[key],
    };
    votedMP2Data.push(config);
  });

  let votedLastMLAObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  // console.log(edl[0].old_data_for_future_reference.loyalty[0]);
  const counterVotedMLA = (data, countingValue) => {
    var count = 0;
    if (data) {
      data.map((voter) => {
        voter.old_data_for_future_reference.Voted_for_mla[0] == countingValue &&
          count++;
      });
    }
    return count;
  };
  const votedMLAKeys = Object.keys(votedLastMLAObj);
  votedMLAKeys.map((key) => {
    let votedMLA = counterVotedMLA(edl, key);
    votedLastMLAObj[key] = votedMLA;
  });

  const votedMLAData = [];

  votedMLAKeys.map((key) => {
    const config = {
      name: q14[key],
      Count: votedLastMLAObj[key],
    };
    votedMLAData.push(config);
  });

  let votedLastMLA2Obj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  // console.log(edl[0].old_data_for_future_reference.loyalty[0]);
  const counterVotedMLA2 = (data, countingValue) => {
    var count = 0;
    if (data) {
      data.map((voter) => {
        voter.old_data_for_future_reference.Voted_for_mla[1] == countingValue &&
          count++;
      });
    }

    return count;
  };
  const votedMLA2Keys = Object.keys(votedLastMLA2Obj);
  votedMLA2Keys.map((key) => {
    let votedMLA2 = counterVotedMLA2(edl, key);
    votedLastMLA2Obj[key] = votedMLA2;
  });

  const votedMLA2Data = [];

  votedMLA2Keys.map((key) => {
    const config = {
      name: q14[key],
      Count: votedLastMLA2Obj[key],
    };
    votedMLA2Data.push(config);
  });

  const gainLossMPData = [];
  const gainLossMLAData = [];

  votedMLAKeys.map((key) => {
    const config = {
      name: q14[key],
      Count: parseInt(votedLastMLAObj[key]) - parseInt(votedLastMLA2Obj[key]),
    };
    gainLossMLAData.push(config);
  });

  votedMPKeys.map((key) => {
    const config = {
      name: q14[key],
      Count: parseInt(votedLastMPObj[key]) - parseInt(votedLastMP2Obj[key]),
    };
    gainLossMPData.push(config);
  });

  let willVoteObj = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  // console.log(edl[0].old_data_for_future_reference.loyalty[0]);
  const counterWillVote = (data, countingValue) => {
    var count = 0;
    if (data) {
      data.map((voter) => {
        voter.old_data_for_future_reference.Will_vote[0] == countingValue &&
          count++;
      });
    }

    return count;
  };
  const willVoteKeys = Object.keys(willVoteObj);
  willVoteKeys.map((key) => {
    let willVote = counterWillVote(edl, key);
    willVoteObj[key] = willVote;
  });

  const willVoteData = [];

  willVoteKeys.map((key) => {
    const config = {
      name: q14[key],
      Count: willVoteObj[key],
    };
    willVoteData.push(config);
  });

  console.log(gainLossMLAData);

  return {
    willVoteData,
    votedMLAData,
    votedMPData,
    loyaltyData,
    religiousData,
    gainLossMLAData,
    gainLossMPData,
  };
};

export default oldDataCalculator;
