import { influence } from "Coding Notations/voter.status";

const Influence = (edl) => {
  const influenceObj = {
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

  edl.map((data) => {
    influenceObj[data.influence] += 1;
  });

  const values = Object.values(influence);
  const infleunceData = [];

  values.map((value, index) => {
    infleunceData.push({
      name: value,
      Count: influenceObj[index + 1],
    });
  });

  return { infleunceData };
};

export default Influence;
