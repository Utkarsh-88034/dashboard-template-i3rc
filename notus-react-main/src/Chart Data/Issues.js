import { sumOfArray } from "helpers/object";
import { getKeyByValue } from "helpers/object";
import { removeFromArray } from "helpers/object";

const graphIssueDataGenerator = (edl) => {
  const NationalIssueNo = {
    0: 1,
    1: 2,
    2: 14,
    3: 15,
    4: 30,
    5: 5,
    6: 10,
    7: 20,
    8: 0,
    9: 0,
    10: 25,
    11: 0,
    12: 0,
    other: 1,
  };
  if (edl) {
    edl.map((data) => {
      NationalIssueNo[data.National_five_issues.Issue_1] += 1;
      NationalIssueNo[data.National_five_issues.Issue_2] += 1;
      NationalIssueNo[data.National_five_issues.Issue_3] += 1;
      NationalIssueNo[data.National_five_issues.Issue_4] += 1;
      NationalIssueNo[data.National_five_issues.Issue_5] += 1;
    });
  }

  const LocalIssueNo = {
    0: 1,
    1: 2,
    2: 14,
    3: 15,
    4: 3,
    5: 5,
    6: 10,
    7: 20,
    8: 0,
    9: 0,
    10: 25,
    11: 0,
    12: 0,
    other: 1,
  };
  if (edl) {
    edl.map((data) => {
      LocalIssueNo[data.Local_five_issues.Issue_1] += 1;
      LocalIssueNo[data.Local_five_issues.Issue_2] += 1;
      LocalIssueNo[data.Local_five_issues.Issue_3] += 1;
      LocalIssueNo[data.Local_five_issues.Issue_4] += 1;
      LocalIssueNo[data.Local_five_issues.Issue_5] += 1;
    });
  }

  const calculateTopFive = (issueNo) => {
    let issueKey = Object.keys(issueNo);
    let issueValue = Object.values(issueNo);
    const max1 = Math.max(...issueValue);
    issueValue = removeFromArray(issueValue, max1);
    const max2 = Math.max(...issueValue);
    issueValue = removeFromArray(issueValue, max2);
    const max3 = Math.max(...issueValue);
    issueValue = removeFromArray(issueValue, max3);
    const max4 = Math.max(...issueValue);
    issueValue = removeFromArray(issueValue, max4);

    let top5Issues = {};

    let key1 = getKeyByValue(issueNo, max1);
    top5Issues[key1] = issueNo[key1];
    issueNo[key1] = -1;
    let key2 = getKeyByValue(issueNo, max2);
    top5Issues[key2] = issueNo[key2];
    issueNo[key2] = -1;
    let key3 = getKeyByValue(issueNo, max3);
    top5Issues[key3] = issueNo[key3];
    issueNo[key3] = -1;
    let key4 = getKeyByValue(issueNo, max4);
    top5Issues[key4] = issueNo[key4];
    issueNo[key4] = -1;

    issueValue = Object.values(issueNo);
    const otherMax = sumOfArray(issueValue) + 4;
    top5Issues["other"] = otherMax;
    let top5IssueCounts = Object.values(top5Issues);
    top5IssueCounts.pop();
    top5IssueCounts.sort();
    return [top5Issues, top5IssueCounts];
  };
  const top5NIssues = calculateTopFive(NationalIssueNo);

  const NationalIssueData = [
    {
      name: "Issue 1",
      Count: top5NIssues[1][3],
    },
    {
      name: "Issue 2",
      Count: top5NIssues[1][2],
    },
    {
      name: "Issue 3",
      Count: top5NIssues[1][1],
    },
    {
      name: "Issue 4",
      Count: top5NIssues[1][0],
    },
    {
      name: "Other",
      Count: top5NIssues[0]["other"],
    },
  ];

  const top5LIssues = calculateTopFive(LocalIssueNo);

  const LocalIssueData = [
    {
      name: "Issue 1",
      Count: top5LIssues[1][3],
    },
    {
      name: "Issue 2",
      Count: top5LIssues[1][2],
    },
    {
      name: "Issue 3",
      Count: top5LIssues[1][1],
    },
    {
      name: "Issue 4",
      Count: top5LIssues[1][0],
    },
    {
      name: "Other",
      Count: top5LIssues[0]["other"],
    },
  ];
  return { NationalIssueData, LocalIssueData, top5NIssues, top5LIssues };
};

export { graphIssueDataGenerator };
