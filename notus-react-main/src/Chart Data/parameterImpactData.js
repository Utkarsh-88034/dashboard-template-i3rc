const parameterCalculator = (edl) => {
  const statementMeanCalculator = (edl, statement) => {
    if (edl) {
      const noOfVoters = edl.length;
      let sum = 0;
      edl.map((voter) => {
        if (voter.Parameters_to_vote) {
          sum += voter.Parameters_to_vote[statement];
        }
      });
      return sum / noOfVoters;
    }
    return 0;
  };

  const statement1 = statementMeanCalculator(edl, 'always_vote_for_elections');
  const statement2 = statementMeanCalculator(
    edl,
    'always_vote_for_most_deserving'
  );
  const statement3 = statementMeanCalculator(
    edl,
    'chose_to_vote_after_after_duly_considering_the_candidate'
  );
  const statement4 = statementMeanCalculator(
    edl,
    'i_believe_one_should_keep_changing_their_vote'
  );
  const statement5 = statementMeanCalculator(
    edl,
    'i_debate_and_discuss_with_my_family_and_friends_and_also_do_research'
  );
  const statement6 = statementMeanCalculator(
    edl,
    'i_have_voted_by_getting_influenced_by_campaigns'
  );
  const statement7 = statementMeanCalculator(
    edl,
    'i_have_voted_by_getting_influenced_by_party_workers'
  );
  const statement8 = statementMeanCalculator(
    edl,
    'i_wait_till_last_time_to_decide_my_vote'
  );
  const statement9 = statementMeanCalculator(
    edl,
    'keep_changing_my_vote_based_on_candidates_every_years'
  );
  const statement10 = statementMeanCalculator(edl, 'loyal_to_only_one_party');
  const statement11 = statementMeanCalculator(
    edl,
    'my_whole_family_loyal_to_only_one_party'
  );
  const statement12 = statementMeanCalculator(
    edl,
    'vote_for_any_candidate_that_will_help_me_personally'
  );
  const statement13 = statementMeanCalculator(
    edl,
    'will_vote_for_anyone_whom_i_am_comforatble_with'
  );
  const statement14 = statementMeanCalculator(
    edl,
    'wont_hesitate_to_vote_any_new_party_or_candidate_if_deserving'
  );

  const parameterMeanData = [
    {
      name: '1',
      Mean: statement1,
    },
    {
      name: '2',
      Mean: statement2,
    },
    {
      name: '3',
      Mean: statement3,
    },
    {
      name: '4',
      Mean: statement4,
    },
    {
      name: '5',
      Mean: statement5,
    },
    {
      name: '6',
      Mean: statement6,
    },
    {
      name: '7',
      Mean: statement7,
    },
    {
      name: '8',
      Mean: statement8,
    },
    {
      name: '9',
      Mean: statement9,
    },
    {
      name: '10',
      Mean: statement10,
    },
    {
      name: '11',
      Mean: statement11,
    },
    {
      name: '12',
      Mean: statement12,
    },
    {
      name: '13',
      Mean: statement13,
    },
    {
      name: '14',
      Mean: statement14,
    },
  ];
  return parameterMeanData;
};

const impactCalculator = (edl) => {
  const statementMeanCalculator = (edl, statement) => {
    if (edl) {
      const noOfVoters = edl.length;
      let sum = 0;

      edl.map((voter) => {
        if (voter.Impact_on_voting) {
          sum += voter.Impact_on_voting[statement];
        }
      });
      return sum / noOfVoters;
    }
    return 0;
  };

  const statement1 = statementMeanCalculator(
    edl,
    'based_on_suggestion_of_my_community'
  );
  const statement2 = statementMeanCalculator(
    edl,
    'based_on_suggestion_of_my_problem'
  );
  const statement3 = statementMeanCalculator(
    edl,
    'is_candidate_active_in_my_area'
  );
  const statement4 = statementMeanCalculator(
    edl,
    'is_candidate_available_in_my_area'
  );
  const statement5 = statementMeanCalculator(edl, 'is_candidate_from_my_area');
  const statement6 = statementMeanCalculator(
    edl,
    'is_candidate_help_us_solve_problem'
  );
  const statement7 = statementMeanCalculator(
    edl,
    'is_candidate_known_for_years'
  );
  const statement8 = statementMeanCalculator(
    edl,
    'is_candidate_nonCorrupt_or_honest'
  );
  const statement9 = statementMeanCalculator(
    edl,
    'is_candidate_of_my_community_or_caste_or_religion'
  );
  const statement10 = statementMeanCalculator(edl, 'is_candidate_popular');
  const statement11 = statementMeanCalculator(
    edl,
    'is_candidate_with_strong_ideology'
  );
  const statement12 = statementMeanCalculator(
    edl,
    'will_analyse_past_of_the_candidate'
  );

  const impactMeanData = [
    {
      name: '1',
      Mean: statement1,
    },
    {
      name: '2',
      Mean: statement2,
    },
    {
      name: '3',
      Mean: statement3,
    },
    {
      name: '4',
      Mean: statement4,
    },
    {
      name: '5',
      Mean: statement5,
    },
    {
      name: '6',
      Mean: statement6,
    },
    {
      name: '7',
      Mean: statement7,
    },
    {
      name: '8',
      Mean: statement8,
    },
    {
      name: '9',
      Mean: statement9,
    },
    {
      name: '10',
      Mean: statement10,
    },
    {
      name: '11',
      Mean: statement11,
    },
    {
      name: '12',
      Mean: statement12,
    },
  ];
  return impactMeanData;
};

export { parameterCalculator, impactCalculator };
