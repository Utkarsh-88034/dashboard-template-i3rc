const counterVoter = (data, field, countingValue) => {
  var count = 0;

  data.map((voter) => voter.Upload_data[field] === countingValue && count++);
  return count;
};

const counterElection = (data, field, countingValue) => {
  var count = 0;

  data.map((voter) => voter[field] === countingValue && count++);
  return count;
};

export { counterVoter, counterElection };
