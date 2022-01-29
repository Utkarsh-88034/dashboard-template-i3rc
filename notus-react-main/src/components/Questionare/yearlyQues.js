import { postYearlyVoterData } from 'actions/voterActions';
import SubmitConfirmationCard from 'components/Cards/SubmitConfirmationCard';
import React, { useState } from 'react';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';

const YearlyQues = ({ status, nextStep }) => {
  const [submitForm, setSubmitForm] = useState(false);
  const [renderModal, setRenderModal] = useState(false);

  const [q9INC, setQ9INC] = useState(1);
  const [q9BJP, setQ9BJP] = useState(1);
  const [q9BSP, setQ9BSP] = useState(1);
  const [q9SP, setQ9SP] = useState(1);
  const [q9TMC, setQ9TMC] = useState(1);
  const [q9Other, setQ9Other] = useState(1);
  const [showParameters, setShowParameters] = useState(false);

  const [NIssue1, setNIssue1] = useState(0);
  const [NIssue2, setNIssue2] = useState(0);
  const [NIssue3, setNIssue3] = useState(0);
  const [NIssue4, setNIssue4] = useState(0);
  const [NIssue5, setNIssue5] = useState(0);

  const [LIssue1, setLIssue1] = useState(0);
  const [LIssue2, setLIssue2] = useState(0);
  const [LIssue3, setLIssue3] = useState(0);
  const [LIssue4, setLIssue4] = useState(0);
  const [LIssue5, setLIssue5] = useState(0);

  const [PPAP1, setPPAP1] = useState(0);
  const [PPAP2, setPPAP2] = useState(0);
  const [PPAP3, setPPAP3] = useState(0);
  const [PPAP4, setPPAP4] = useState(0);

  const [HI1, setHI1] = useState(0);
  const [HI2, setHI2] = useState(0);
  const [HI3, setHI3] = useState(0);
  const [HI4, setHI4] = useState(0);

  const [POP1, setPOP1] = useState(0);
  const [POP2, setPOP2] = useState(0);
  const [POP3, setPOP3] = useState(0);
  const [POP4, setPOP4] = useState(0);

  const [VIS1, setVIS1] = useState(0);
  const [VIS2, setVIS2] = useState(0);
  const [VIS3, setVIS3] = useState(0);
  const [VIS4, setVIS4] = useState(0);

  const [APPR1, setAPPR1] = useState(0);
  const [APPR2, setAPPR2] = useState(0);
  const [APPR3, setAPPR3] = useState(0);
  const [APPR4, setAPPR4] = useState(0);

  const [CP1, setCP1] = useState(0);
  const [CP2, setCP2] = useState(0);
  const [CP3, setCP3] = useState(0);
  const [CP4, setCP4] = useState(0);

  const [WMC1, setWMC1] = useState(0);
  const [WMC2, setWMC2] = useState(0);
  const [WMC3, setWMC3] = useState(0);
  const [WMC4, setWMC4] = useState(0);

  const [INT1, setINT1] = useState(0);
  const [INT2, setINT2] = useState(0);
  const [INT3, setINT3] = useState(0);
  const [INT4, setINT4] = useState(0);

  const [LOC1, setLOC1] = useState(0);
  const [LOC2, setLOC2] = useState(0);
  const [LOC3, setLOC3] = useState(0);
  const [LOC4, setLOC4] = useState(0);

  const [HAR1, setHAR1] = useState(0);
  const [HAR2, setHAR2] = useState(0);
  const [HAR3, setHAR3] = useState(0);
  const [HAR4, setHAR4] = useState(0);

  const [MPPC1, setMPPC1] = useState(0);
  const [MPPC2, setMPPC2] = useState(0);
  const [MPPC3, setMPPC3] = useState(0);
  const [MPPC4, setMPPC4] = useState(0);

  const listOfLocalIssues = [];
  const listOfNationalIssues = [];

  // refs
  const influenceRef = useRef();

  const q7aRef = useRef();
  const q7bRef = useRef();
  const q7cRef = useRef();
  const q7dRef = useRef();
  const q7eRef = useRef();
  const q7fRef = useRef();
  const q7gRef = useRef();
  const q7hRef = useRef();
  const q7iRef = useRef();
  const q7jRef = useRef();
  const q7kRef = useRef();
  const q7lRef = useRef();
  const q7mRef = useRef();

  const q8aRef = useRef();
  const q8bRef = useRef();
  const q8cRef = useRef();
  const q8dRef = useRef();
  const q8eRef = useRef();
  const q8fRef = useRef();
  const q8gRef = useRef();
  const q8hRef = useRef();
  const q8iRef = useRef();
  const q8jRef = useRef();
  const q8kRef = useRef();
  const q8lRef = useRef();
  const q8mRef = useRef();
  const q8nRef = useRef();

  const q9INCRef = useRef();
  const INCname1Ref = useRef();
  const INCname2Ref = useRef();
  const INCname3Ref = useRef();

  const q9BJPRef = useRef();
  const BJPname1Ref = useRef();
  const BJPname2Ref = useRef();
  const BJPname3Ref = useRef();

  const q9BSPRef = useRef();
  const BSPname1Ref = useRef();
  const BSPname2Ref = useRef();
  const BSPname3Ref = useRef();

  const q9SPRef = useRef();
  const SPname1Ref = useRef();
  const SPname2Ref = useRef();
  const SPname3Ref = useRef();

  const q9TMCRef = useRef();
  const TMCname1Ref = useRef();
  const TMCname2Ref = useRef();
  const TMCname3Ref = useRef();

  const q9OtherRef = useRef();

  const Othername1Ref = useRef();
  const Othername2Ref = useRef();
  const Othername3Ref = useRef();

  const q12Ref = useRef();
  const q13Ref = useRef();
  const q14Ref = useRef();
  const q15aRef = useRef();
  const q15bRef = useRef();
  const q15cRef = useRef();
  const q15dRef = useRef();
  const q15eRef = useRef();
  const q16Ref = useRef();
  const q17Ref = useRef();
  const q18Ref = useRef();
  const q19Ref = useRef();
  const q20Ref = useRef();

  const [listOfCandidates, setListOfCandidates] = useState([]);
  const setParametersValue = (e) => {
    e.preventDefault();
    setShowParameters(!showParameters);
    const tempList = [0];
    tempList.push(
      INCname1Ref.current?.value,
      INCname2Ref.current?.value,
      INCname3Ref.current?.value,
      BJPname1Ref.current?.value,
      BJPname2Ref.current?.value,
      BJPname3Ref.current?.value,
      BSPname1Ref.current?.value,
      BSPname2Ref.current?.value,
      BSPname3Ref.current?.value,
      SPname1Ref.current?.value,
      SPname2Ref.current?.value,
      SPname3Ref.current?.value,
      TMCname1Ref.current?.value,
      TMCname2Ref.current?.value,
      TMCname3Ref.current?.value,
      Othername1Ref.current?.value,
      Othername2Ref.current?.value,
      Othername3Ref.current?.value
    );
    const arrFiltered = tempList.filter((el) => {
      return el !== null && el !== '';
    });
    setListOfCandidates(arrFiltered);
    console.log(listOfCandidates);
  };
  const dispatch = useDispatch();

  const date = new Date();
  const year = date.getFullYear();

  const submitHandler = () => {
    const electionData = {
      Year: year,
      data: {
        National_five_issues: {
          Issue_1: parseInt(NIssue1),
          Issue_2: parseInt(NIssue2),
          Issue_3: parseInt(NIssue3),
          Issue_4: parseInt(NIssue4),
          Issue_5: parseInt(NIssue5),
        },
        Local_five_issues: {
          Issue_1: parseInt(LIssue1),
          Issue_2: parseInt(LIssue2),
          Issue_3: parseInt(LIssue3),
          Issue_4: parseInt(LIssue4),
          Issue_5: parseInt(LIssue5),
        },
        Impact_on_voting: {
          is_candidate_of_my_community_or_caste_or_religion: parseInt(
            q7aRef.current?.value
          ),
          is_candidate_known_for_years: parseInt(q7bRef.current?.value),
          // I have personal connect with the candidate ->d
          is_candidate_from_my_area: parseInt(q7cRef.current?.value),
          is_candidate_help_us_solve_problem: parseInt(q7eRef.current?.value),
          is_candidate_popular: parseInt(q7fRef.current?.value),
          is_candidate_with_strong_ideology: parseInt(q7gRef.current?.value),
          is_candidate_nonCorrupt_or_honest: parseInt(q7hRef.current?.value),
          will_analyse_past_of_the_candidate: parseInt(q7iRef.current?.value),
          based_on_suggestion_of_my_problem: parseInt(q7jRef.current?.value),
          based_on_suggestion_of_my_community: parseInt(q7kRef.current?.value),
          is_candidate_active_in_my_area: parseInt(q7lRef.current?.value),
          is_candidate_available_in_my_area: parseInt(q7mRef.current?.value),
        },
        Parameters_to_vote: {
          chose_to_vote_after_after_duly_considering_the_candidate: parseInt(
            q8aRef.current?.value
          ),
          always_vote_for_elections: parseInt(q8bRef.current?.value),
          loyal_to_only_one_party: parseInt(q8cRef.current?.value),
          my_whole_family_loyal_to_only_one_party: parseInt(
            q8dRef.current?.value
          ),
          always_vote_for_most_deserving: parseInt(q8eRef.current?.value),
          keep_changing_my_vote_based_on_candidates_every_years: parseInt(
            q8fRef.current?.value
          ),
          vote_for_any_candidate_that_will_help_me_personally: parseInt(
            q8gRef.current?.value
          ),
          will_vote_for_anyone_whom_i_am_comforatble_with: parseInt(
            q8hRef.current?.value
          ),
          wont_hesitate_to_vote_any_new_party_or_candidate_if_deserving:
            parseInt(q8iRef.current?.value),
          i_believe_one_should_keep_changing_their_vote: parseInt(
            q8jRef.current?.value
          ),
          i_wait_till_last_time_to_decide_my_vote: parseInt(
            q8kRef.current?.value
          ),
          i_have_voted_by_getting_influenced_by_campaigns: parseInt(
            q8lRef.current?.value
          ),
          i_have_voted_by_getting_influenced_by_party_workers: parseInt(
            q8mRef.current?.value
          ),
          i_debate_and_discuss_with_my_family_and_friends_and_also_do_research:
            parseInt(q8nRef.current?.value),
        },
        know_the_candidate_of: {
          INC: parseInt(q9INC),
          BJP: parseInt(q9BJP),
          SP: parseInt(q9SP),
          TMC: parseInt(q9TMC),
          other1: parseInt(q9BSP),
          other2: parseInt(q9Other),
          other3: parseInt(0),
          other4: parseInt(0),
        },
        name_of_party_candidate: {
          INC1: INCname1Ref.current?.value,
          INC2: INCname2Ref.current?.value,
          INC3: INCname3Ref.current?.value,
          BJP1: BJPname1Ref.current?.value,
          BJP2: BJPname2Ref.current?.value,
          BJP3: BJPname3Ref.current?.value,
          other1: BSPname1Ref.current?.value,
          other2: BSPname2Ref.current?.value,
          other3: BSPname3Ref.current?.value,
          others1: SPname1Ref.current?.value,
          others2: SPname2Ref.current?.value,
          others3: SPname3Ref.current?.value,
          // make more fields for more parties in backend
        },
        Parameter_to_assess: {
          name1_PPAP: listOfCandidates[PPAP1 - 1],
          name1_HAI: listOfCandidates[HI1 - 1],
          name1_popularity: listOfCandidates[POP1 - 1],
          name1_visionary: listOfCandidates[VIS1 - 1],
          name1_approach_ability: listOfCandidates[APPR1 - 1],
          name1_CFP: listOfCandidates[CP1 - 1],
          name1_WFMC: listOfCandidates[WMC1 - 1],
          name1_intelligent: listOfCandidates[INT1 - 1],
          name1_local: listOfCandidates[LOC1 - 1],
          name1_HAIA: listOfCandidates[HAR1 - 1],
          name1_MPLIMC: listOfCandidates[MPPC1 - 1],
          name2_PPAP: listOfCandidates[PPAP2 - 1],
          name2_HAI: listOfCandidates[HI2 - 1],
          name2_popularity: listOfCandidates[POP2 - 1],
          name2_visionary: listOfCandidates[VIS2 - 1],
          name2_approach_ability: listOfCandidates[APPR2 - 1],
          name2_CFP: listOfCandidates[CP2 - 1],
          name2_WFMC: listOfCandidates[WMC2 - 1],
          name2_intelligent: listOfCandidates[INT2 - 1],
          name2_local: listOfCandidates[LOC2 - 1],
          name2_HAIA: listOfCandidates[HAR2 - 1],
          name2_MPLIMC: listOfCandidates[MPPC2 - 1],
          name3_PPAP: listOfCandidates[PPAP3 - 1],
          name3_HAI: listOfCandidates[HI3 - 1],
          name3_popularity: listOfCandidates[POP3 - 1],
          name3_visionary: listOfCandidates[VIS3 - 1],
          name3_approach_ability: listOfCandidates[APPR3 - 1],
          name3_CFP: listOfCandidates[CP3 - 1],
          name3_WFMC: listOfCandidates[WMC3 - 1],
          name3_intelligent: listOfCandidates[INT3 - 1],
          name3_local: listOfCandidates[LOC3 - 1],
          name3_HAIA: listOfCandidates[HAR3 - 1],
          name3_MPLIMC: listOfCandidates[MPPC3 - 1],
          name4_PPAP: listOfCandidates[PPAP4 - 1],
          name4_HAI: listOfCandidates[HI4 - 1],
          name4_popularity: listOfCandidates[POP4 - 1],
          name4_visionary: listOfCandidates[VIS4 - 1],
          name4_approach_ability: listOfCandidates[APPR4 - 1],
          name4_CFP: listOfCandidates[CP4 - 1],
          name4_WFMC: listOfCandidates[WMC4 - 1],
          name4_intelligent: listOfCandidates[INT4 - 1],
          name4_local: listOfCandidates[LOC4 - 1],
          name4_HAIA: listOfCandidates[HAR4 - 1],
          name4_MPLIMC: listOfCandidates[MPPC4 - 1],
        },
        old_data_for_future_reference: {
          Voted_for_mp: parseInt(q12Ref.current?.value),
          Voted_for_mla: parseInt(q13Ref.current?.value),
          Will_vote: parseInt(q14Ref.current?.value),
          loyalty1: parseInt(q15aRef.current?.value),
          loyalty2: parseInt(q15bRef.current?.value),
          loyalty3: parseInt(q15cRef.current?.value),
          loyalty4: parseInt(q15dRef.current?.value),
          loyalty5: parseInt(q15eRef.current?.value),

          //change 1,2,3,4 to party name in backend
        },
        Numbers_of_voters_in_house: parseInt(q17Ref.current?.value),
        religious: parseInt(q18Ref.current?.value),
        caste: q19Ref.current?.value,
        need_transportation: parseInt(q20Ref.current?.value),
        remarks: q16Ref.current?.value,
      },
    };

    dispatch(postYearlyVoterData(electionData, status._id));
  };

  if (submitForm) {
    submitHandler();
  }

  const setSubmit = (value) => {
    setSubmitForm(value);
    setRenderModal(false);
    document.body.style.overflow = 'auto';
    nextStep(1);
  };

  return (
    <>
      {renderModal ? <SubmitConfirmationCard setSubmit={setSubmit} /> : <></>}
      <form
        style={{ margin: '10px 10px' }}
        onSubmit={(e) => {
          document.body.style.overflow = 'hidden';
          e.preventDefault();
          setRenderModal(true);
        }}
      >
        <div
          className=" flex flex-col "
          style={{
            margin: '10px 0',
            justifyContent: 'space-between',

            flexWrap: 'wrap',
          }}
        >
          <label>
            Please tell me the top 5 issues at all India level which are most
            important?
          </label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setNIssue1(e.target.value);
                }}
              >
                <option value={0}>None</option>

                {listOfNationalIssues.map((candidate, id) => (
                  <option value={id + 1}>{candidate}</option>
                ))}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setNIssue2(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfNationalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfNationalIssues[NIssue4 - 1] &&
                    candidate !== listOfNationalIssues[NIssue3 - 1] &&
                    candidate !== listOfNationalIssues[NIssue1 - 1] &&
                    candidate !== listOfNationalIssues[NIssue5 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setNIssue3(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfNationalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfNationalIssues[NIssue4 - 1] &&
                    candidate !== listOfNationalIssues[NIssue1 - 1] &&
                    candidate !== listOfNationalIssues[NIssue2 - 1] &&
                    candidate !== listOfNationalIssues[NIssue5 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setNIssue4(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfNationalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfNationalIssues[NIssue3 - 1] &&
                    candidate !== listOfNationalIssues[NIssue2 - 1] &&
                    candidate !== listOfNationalIssues[NIssue1 - 1] &&
                    candidate !== listOfNationalIssues[NIssue5 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setNIssue5(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfNationalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfNationalIssues[NIssue3 - 1] &&
                    candidate !== listOfNationalIssues[NIssue2 - 1] &&
                    candidate !== listOfNationalIssues[NIssue1 - 1] &&
                    candidate !== listOfNationalIssues[NIssue4 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
          </div>
        </div>
        <div
          className=" flex flex-col "
          style={{
            margin: '10px 0',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <label>
            Please tell me the top 5 issues of your locality which are most
            important?
          </label>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setLIssue1(e.target.value);
                }}
              >
                <option value={0}>None</option>

                {listOfLocalIssues.map((candidate, id) => (
                  <option value={id + 1}>{candidate}</option>
                ))}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setLIssue2(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfLocalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfLocalIssues[LIssue4 - 1] &&
                    candidate !== listOfLocalIssues[LIssue3 - 1] &&
                    candidate !== listOfLocalIssues[LIssue1 - 1] &&
                    candidate !== listOfLocalIssues[LIssue5 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setLIssue3(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfLocalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfLocalIssues[LIssue4 - 1] &&
                    candidate !== listOfLocalIssues[LIssue1 - 1] &&
                    candidate !== listOfLocalIssues[LIssue2 - 1] &&
                    candidate !== listOfLocalIssues[LIssue5 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setLIssue4(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfLocalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfLocalIssues[LIssue3 - 1] &&
                    candidate !== listOfLocalIssues[LIssue2 - 1] &&
                    candidate !== listOfLocalIssues[LIssue1 - 1] &&
                    candidate !== listOfLocalIssues[LIssue5 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
            <div
              style={{
                margin: '10px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <select
                ref={q15bRef}
                onChange={(e) => {
                  setLIssue5(e.target.value);
                }}
              >
                <option value={0}>None</option>
                {listOfLocalIssues.map(
                  (candidate, id) =>
                    candidate !== listOfLocalIssues[LIssue3 - 1] &&
                    candidate !== listOfLocalIssues[LIssue2 - 1] &&
                    candidate !== listOfLocalIssues[LIssue1 - 1] &&
                    candidate !== listOfLocalIssues[LIssue4 - 1] && (
                      <option value={id + 1}>{candidate}</option>
                    )
                )}
              </select>
            </div>
          </div>
        </div>
        <div
          className=" flex flex-row "
          style={{
            margin: '10px 0',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <label>
            Please tell me who influence your choice of vote most or with whom
            you consult before deciding your vote?
          </label>
          <select ref={influenceRef}>
            <option value={1}>Spouse</option>
            <option value={2}>Parents</option>
            <option value={3}>Other family member</option>
            <option value={4}>Friends / relative</option>
            <option value={5}>Electronic media</option>
            <option value={6}>Print Media</option>
            <option value={7}>Social media</option>
            <option value={8}>Social worker of the society</option>
            <option value={9}>Politically active person in the society</option>
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 'bolder' }}>
            Of the following, please tell me the impact of each aspect over your
            decision to vote on 10 point scale where 1 is mean not at all impact
            and 10 means critical/ full impact?
          </label>
          <br />
          <br />
          <div className="flex flex-col">
            <label style={{ margin: '10px 0' }}>
              Candidate is member of my community/ caste/ religion
            </label>
            <input type={'number'} max={10} ref={q7aRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate is known from many years
            </label>
            <input type={'number'} max={10} ref={q7bRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate is local- from my area
            </label>
            <input type={'number'} max={10} ref={q7cRef}></input>
            <label style={{ margin: '10px 0' }}>
              I have personal connect with the candidate
            </label>
            <input type={'number'} max={10} ref={q7dRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate is ready to help us to solve all our problems
            </label>
            <input type={'number'} max={10} ref={q7eRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate is very Popular
            </label>
            <input type={'number'} max={10} ref={q7fRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate with strong ideology
            </label>
            <input type={'number'} max={10} ref={q7gRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate is Non- corrupt/ honest image
            </label>
            <input type={'number'} max={10} ref={q7hRef}></input>
            <label style={{ margin: '10px 0' }}>
              I will Analyse the candidates past performance
            </label>
            <input type={'number'} max={10} ref={q7iRef}></input>
            <label style={{ margin: '10px 0' }}>
              Based on suggestion from family member
            </label>
            <input type={'number'} max={10} ref={q7jRef}></input>
            <label style={{ margin: '10px 0' }}>
              Based on suggestion from community people
            </label>
            <input type={'number'} max={10} ref={q7kRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate must be active in the area
            </label>
            <input type={'number'} max={10} ref={q7lRef}></input>
            <label style={{ margin: '10px 0' }}>
              Candidate is Always available in the area
            </label>
            <input type={'number'} max={10} ref={q7mRef}></input>
          </div>
        </div>
        <div>
          <br />
          <br />
          <label style={{ fontWeight: 'bolder' }}>
            Of the following, please tell me how you are agree with on a scale
            of 10 where 10 means fully agree and 1 means not at all agree
          </label>
          <br />
          <br />
          <div className="flex flex-col">
            <label style={{ margin: '10px 0' }}>
              I choose whom to vote after duly considering the candidate, the
              party and their past performance
            </label>
            <input type={'number'} max={10} ref={q8aRef}></input>
            <label style={{ margin: '10px 0' }}>
              I value my vote and always go to vote in Elections
            </label>
            <input type={'number'} max={10} ref={q8bRef}></input>
            <label style={{ margin: '10px 0' }}>
              I am loyal towards a particular party and always vote for that
              party irrespective of the candidate
            </label>
            <input type={'number'} max={10} ref={q8cRef}></input>
            <label style={{ margin: '10px 0' }}>
              We as a family always vote for a particular party in every
              election
            </label>
            <input type={'number'} max={10} ref={q8dRef}></input>
            <label style={{ margin: '10px 0' }}>
              I vote for most deserving candidate
            </label>
            <input type={'number'} max={10} ref={q8eRef}></input>
            <label style={{ margin: '10px 0' }}>
              I keep changing my choice of vote every new election
            </label>
            <input type={'number'} max={10} ref={q8fRef}></input>
            <label style={{ margin: '10px 0' }}>
              I will vote for any candidate who I think will help me personally
            </label>
            <input type={'number'} max={10} ref={q8gRef}></input>
            <label style={{ margin: '10px 0' }}>
              I am not very particular about voting and will vote for anyone
              whom I am familiar with
            </label>
            <input type={'number'} max={10} ref={q8hRef}></input>
            <label style={{ margin: '10px 0' }}>
              I would not hesitate to vote to a new candidate or party and give
              them a chance
            </label>
            <input type={'number'} max={10} ref={q8iRef}></input>
            <label style={{ margin: '10px 0' }}>
              I believe one should keep changing his/ her choice of vote to keep
              these politicians on their toes
            </label>
            <input type={'number'} max={10} ref={q8jRef}></input>
            <label style={{ margin: '10px 0' }}>
              I wait till the last minute to decide whom to vote
            </label>
            <input type={'number'} max={10} ref={q8kRef}></input>
            <label style={{ margin: '10px 0' }}>
              I have at times voted a candidate after getting influenced by
              their campaign and personal charisma
            </label>
            <input type={'number'} max={10} ref={q8lRef}></input>
            <label style={{ margin: '10px 0' }}>
              I have been influenced by the party workers tot vote for a
              particular candidate in the past
            </label>
            <input type={'number'} max={10} ref={q8mRef}></input>
            <label style={{ margin: '10px 0' }}>
              I debate and discuss with friends, family and also do my own
              research to finally choosing the candidate to vote for very
              carefully
            </label>
            <input type={'number'} max={10} ref={q8nRef}></input>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: ' 10px 0' }}>
            Do you know the candidate of INC party for your parliamentary
            Constituency?
          </label>
          <select
            ref={q9INCRef}
            onChange={(e) => {
              setQ9INC(e.target.value);
            }}
          >
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {q9INC === 1 ? (
            <>
              <label style={{ margin: ' 10px 0' }}>
                Name of any three party candidates
              </label>
              <input
                type="text"
                ref={INCname1Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={INCname2Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={INCname3Ref}
                style={{ margin: ' 10px 0' }}
              />
            </>
          ) : (
            ''
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: ' 10px 0' }}>
            Do you know the candidate of BJP party for your parliamentary
            Constituency?
          </label>

          <select
            ref={q9BJPRef}
            style={{ margin: ' 10px 0' }}
            onChange={(e) => {
              setQ9BJP(e.target.value);
            }}
          >
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {q9BJP === 1 ? (
            <>
              <label style={{ margin: ' 10px 0' }}>
                Name of any three party candidates
              </label>
              <input
                type="text"
                ref={BJPname1Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={BJPname2Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={BJPname3Ref}
                style={{ margin: ' 10px 0' }}
              />
            </>
          ) : (
            ''
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: ' 10px 0' }}>
            Do you know the candidate of BSP party for your parliamentary
            Constituency?
          </label>

          <select
            ref={q9BSPRef}
            onChange={(e) => {
              setQ9BSP(e.target.value);
            }}
          >
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {q9BSP === 1 ? (
            <>
              <label style={{ margin: ' 10px 0' }}>
                Name of any three party candidates
              </label>
              <input
                type="text"
                ref={BSPname1Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={BSPname2Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={BSPname3Ref}
                style={{ margin: ' 10px 0' }}
              />
            </>
          ) : (
            ''
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: ' 10px 0' }}>
            Do you know the candidate of SP party for your parliamentary
            Constituency?
          </label>

          <select
            ref={q9SPRef}
            onChange={(e) => {
              setQ9SP(e.target.value);
            }}
          >
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {q9SP === 1 ? (
            <>
              <label style={{ margin: ' 10px 0' }}>
                Name of any three party candidates
              </label>
              <input
                type="text"
                ref={SPname1Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={SPname2Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={SPname3Ref}
                style={{ margin: ' 10px 0' }}
              />
            </>
          ) : (
            ''
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: ' 10px 0' }}>
            Do you know the candidate of TMC party for your parliamentary
            Constituency?
          </label>

          <select
            ref={q9TMCRef}
            onChange={(e) => {
              setQ9TMC(e.target.value);
            }}
          >
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {q9TMC === 1 ? (
            <>
              <label style={{ margin: ' 10px 0' }}>
                Name of any three party candidates
              </label>
              <input
                type="text"
                ref={TMCname1Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={TMCname2Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={TMCname3Ref}
                style={{ margin: ' 10px 0' }}
              />
            </>
          ) : (
            ''
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label style={{ margin: ' 10px 0' }}>
            Do you know the candidate of any Other party for your parliamentary
            Constituency?
          </label>
          <select
            ref={q9OtherRef}
            onChange={(e) => {
              setQ9Other(e.target.value);
            }}
          >
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {q9Other === 1 ? (
            <>
              <label style={{ margin: ' 10px 0' }}>
                Name of any three party candidates
              </label>
              <input
                type="text"
                ref={Othername1Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={Othername2Ref}
                style={{ margin: ' 10px 0' }}
              />
              <input
                type="text"
                ref={Othername3Ref}
                style={{ margin: ' 10px 0' }}
              />
            </>
          ) : (
            ''
          )}
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setParametersValue(e);
          }}
          style={{
            margin: ' 2rem 0',
            padding: '0.5rem 1rem',
            color: 'white',
            backgroundColor: 'rgb(2, 132, 199)',
            borderRadius: '4px',
          }}
        >
          {showParameters ? 'HIDE CANDIDATES' : 'SHOW CANDIDATES'}
        </button>
        {showParameters && (
          <div>
            <label>
              I have some parameters to assess Now please tell me for each
              aspect one by one which aspect is associated with which all
              candidate?
            </label>
            <br />
            <br />
            <label>Past Performance: A performer</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPPAP1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPPAP2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[PPAP4 - 1] &&
                      candidate !== listOfCandidates[PPAP3 - 1] &&
                      candidate !== listOfCandidates[PPAP1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPPAP3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[PPAP4 - 1] &&
                      candidate !== listOfCandidates[PPAP1 - 1] &&
                      candidate !== listOfCandidates[PPAP2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPPAP4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[PPAP3 - 1] &&
                      candidate !== listOfCandidates[PPAP2 - 1] &&
                      candidate !== listOfCandidates[PPAP1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Honesty and Integrity</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHI1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHI2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[HI4 - 1] &&
                      candidate !== listOfCandidates[HI3 - 1] &&
                      candidate !== listOfCandidates[HI1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHI3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[HI4 - 1] &&
                      candidate !== listOfCandidates[HI1 - 1] &&
                      candidate !== listOfCandidates[HI2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHI4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[HI3 - 1] &&
                      candidate !== listOfCandidates[HI2 - 1] &&
                      candidate !== listOfCandidates[HI1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Popularity</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPOP1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPOP2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[POP4 - 1] &&
                      candidate !== listOfCandidates[POP3 - 1] &&
                      candidate !== listOfCandidates[POP1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPOP3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[POP4 - 1] &&
                      candidate !== listOfCandidates[POP1 - 1] &&
                      candidate !== listOfCandidates[POP2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setPOP4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[POP3 - 1] &&
                      candidate !== listOfCandidates[POP2 - 1] &&
                      candidate !== listOfCandidates[POP1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Visionary</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setVIS1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setVIS2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[VIS4 - 1] &&
                      candidate !== listOfCandidates[VIS3 - 1] &&
                      candidate !== listOfCandidates[VIS1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setVIS3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[VIS4 - 1] &&
                      candidate !== listOfCandidates[VIS1 - 1] &&
                      candidate !== listOfCandidates[VIS2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setVIS4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[VIS3 - 1] &&
                      candidate !== listOfCandidates[VIS2 - 1] &&
                      candidate !== listOfCandidates[VIS1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Approachability</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setAPPR1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setAPPR2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[APPR4 - 1] &&
                      candidate !== listOfCandidates[APPR3 - 1] &&
                      candidate !== listOfCandidates[APPR1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setAPPR3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[APPR4 - 1] &&
                      candidate !== listOfCandidates[APPR1 - 1] &&
                      candidate !== listOfCandidates[APPR2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setAPPR4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[APPR3 - 1] &&
                      candidate !== listOfCandidates[APPR2 - 1] &&
                      candidate !== listOfCandidates[APPR1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Cares for People</label>

            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setCP1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setCP2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[CP4 - 1] &&
                      candidate !== listOfCandidates[CP3 - 1] &&
                      candidate !== listOfCandidates[CP1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setCP3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[CP4 - 1] &&
                      candidate !== listOfCandidates[CP1 - 1] &&
                      candidate !== listOfCandidates[CP2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setCP4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[CP3 - 1] &&
                      candidate !== listOfCandidates[CP2 - 1] &&
                      candidate !== listOfCandidates[CP1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Work for my community</label>

            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setWMC1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setWMC2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[WMC4 - 1] &&
                      candidate !== listOfCandidates[WMC3 - 1] &&
                      candidate !== listOfCandidates[WMC1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setWMC3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[WMC4 - 1] &&
                      candidate !== listOfCandidates[WMC1 - 1] &&
                      candidate !== listOfCandidates[WMC2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setWMC4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[WMC3 - 1] &&
                      candidate !== listOfCandidates[WMC2 - 1] &&
                      candidate !== listOfCandidates[WMC1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Intelligent</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setINT1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setINT2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[INT4 - 1] &&
                      candidate !== listOfCandidates[INT3 - 1] &&
                      candidate !== listOfCandidates[INT1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setINT3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[INT4 - 1] &&
                      candidate !== listOfCandidates[INT1 - 1] &&
                      candidate !== listOfCandidates[INT2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setINT4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[INT3 - 1] &&
                      candidate !== listOfCandidates[INT2 - 1] &&
                      candidate !== listOfCandidates[INT1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Local</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setLOC1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setLOC2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[LOC4 - 1] &&
                      candidate !== listOfCandidates[LOC3 - 1] &&
                      candidate !== listOfCandidates[LOC1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setLOC3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[LOC4 - 1] &&
                      candidate !== listOfCandidates[LOC1 - 1] &&
                      candidate !== listOfCandidates[LOC2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setLOC4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[LOC3 - 1] &&
                      candidate !== listOfCandidates[LOC2 - 1] &&
                      candidate !== listOfCandidates[LOC1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Helpful and active in the area</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHAR1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHAR2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[HAR4 - 1] &&
                      candidate !== listOfCandidates[HAR3 - 1] &&
                      candidate !== listOfCandidates[HAR1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHAR3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[HAR4 - 1] &&
                      candidate !== listOfCandidates[HAR1 - 1] &&
                      candidate !== listOfCandidates[HAR2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setHAR4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[HAR3 - 1] &&
                      candidate !== listOfCandidates[HAR2 - 1] &&
                      candidate !== listOfCandidates[HAR1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
            <label>Most powerful political leader in my constituency</label>
            <br />
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setMPPC1(e.target.value);
                  }}
                >
                  <option value={0}>None</option>

                  {listOfCandidates.map((candidate, id) => (
                    <option value={id + 1}>{candidate}</option>
                  ))}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setMPPC2(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[MPPC4 - 1] &&
                      candidate !== listOfCandidates[MPPC3 - 1] &&
                      candidate !== listOfCandidates[MPPC1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setMPPC3(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[MPPC4 - 1] &&
                      candidate !== listOfCandidates[MPPC1 - 1] &&
                      candidate !== listOfCandidates[MPPC2 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
              <div
                style={{
                  margin: '10px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <select
                  ref={q15bRef}
                  onChange={(e) => {
                    setMPPC4(e.target.value);
                  }}
                >
                  <option value={0}>None</option>
                  {listOfCandidates.map(
                    (candidate, id) =>
                      candidate !== listOfCandidates[MPPC3 - 1] &&
                      candidate !== listOfCandidates[MPPC2 - 1] &&
                      candidate !== listOfCandidates[MPPC1 - 1] && (
                        <option value={id + 1}>{candidate}</option>
                      )
                  )}
                </select>
              </div>
            </div>
          </div>
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label>
            Can you please tell me, which of these political parties did you
            vote for in the last general elections for MP?
          </label>
          <select ref={q12Ref}>
            <option value={1}>BJP (Bharatiya Janata Party)</option>
            <option value={2}>BSP (Bahujan Samaj Party)</option>
            <option value={3}>SP-(Samajwadi Party)</option>
            <option value={4}>TMC- (Trinmool Congress)</option>
            <option value={5}>Other</option>
            <option value={6}>Independent</option>
            <option value={7}>Undecided/ Yet to decide</option>
            <option value={8}>Did not voted</option>
            <option value={9}>First time voter</option>
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px 0',
            }}
          >
            Can you please tell me, which of these political parties did you
            vote for in the last assembly elections for MLA
          </label>
          <select ref={q13Ref}>
            <option value={1}>BJP (Bharatiya Janata Party)</option>
            <option value={2}>BSP (Bahujan Samaj Party)</option>
            <option value={3}>SP-(Samajwadi Party)</option>
            <option value={4}>TMC- (Trinmool Congress)</option>
            <option value={5}>Other</option>
            <option value={6}>Independent</option>
            <option value={7}>Undecided/ Yet to decide</option>
            <option value={8}>Did not voted</option>
            <option value={9}>First time voter</option>
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px 0',
            }}
          >
            Whom will you vote for in the coming General elections for MP?
          </label>
          <select ref={q14Ref}>
            <option value={1}>BJP (Bharatiya Janata Party)</option>
            <option value={2}>BSP (Bahujan Samaj Party)</option>
            <option value={3}>SP-(Samajwadi Party)</option>
            <option value={4}>TMC- (Trinmool Congress)</option>
            <option value={5}>Other</option>
            <option value={6}>Independent</option>
            <option value={7}>Undecided/ Yet to decide</option>
            <option value={8}>Did not voted</option>
            <option value={9}>First time voter</option>
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            margin: '10px 0',
          }}
        >
          <label>Do not ask just to observe and record</label>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <label>BJP</label>
            <select ref={q15aRef}>
              <option value={1}>Fully against</option>
              <option value={2}>Partially against</option>
              <option value={3}>Undecided</option>
              <option value={4}>Partially loyal</option>
              <option value={5}>Fully loyal</option>
            </select>
          </div>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <label>INC</label>
            <select ref={q15bRef}>
              <option value={1}>Fully against</option>
              <option value={2}>Partially against</option>
              <option value={3}>Undecided</option>
              <option value={4}>Partially loyal</option>
              <option value={5}>Fully loyal</option>
            </select>
          </div>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <label>BSP</label>
            <select ref={q15cRef}>
              <option value={1}>Fully against</option>
              <option value={2}>Partially against</option>
              <option value={3}>Undecided</option>
              <option value={4}>Partially loyal</option>
              <option value={5}>Fully loyal</option>
            </select>
          </div>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <label>SP</label>
            <select ref={q15dRef}>
              <option value={1}>Fully against</option>
              <option value={2}>Partially against</option>
              <option value={3}>Undecided</option>
              <option value={4}>Partially loyal</option>
              <option value={5}>Fully loyal</option>
            </select>
          </div>
          <div
            style={{
              margin: '10px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <label>Other</label>
            <select ref={q15eRef}>
              <option value={1}>Fully against</option>
              <option value={2}>Partially against</option>
              <option value={3}>Undecided</option>
              <option value={4}>Partially loyal</option>
              <option value={5}>Fully loyal</option>
            </select>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label>Remark/ suggestion/ Requirement</label>
          <input type="text" ref={q16Ref} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label>Number of voters in household</label>
          <input type="text" ref={q17Ref} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label>
            Could you tell me which religious category you belong to?{' '}
          </label>
          <select ref={q18Ref}>
            <option value={1}>Hindu General</option>
            <option value={2}>Hindu SC</option>
            <option value={3}>Hindu OBC</option>
            <option value={4}>Hindu ST</option>
            <option value={5}>Jain</option>
            <option value={6}>Muslim</option>
            <option value={7}>Christian</option>
            <option value={8}>Sikh</option>
            <option value={9}>Other</option>
          </select>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label>Please mention your caste</label>
          <input type="text" ref={q19Ref} />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
          }}
        >
          <label>
            Do you need transportation facility for voting? Do not Ask
          </label>
          <select ref={q20Ref}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            margin: ' 2rem 0',
            padding: '0.5rem 1rem',
            color: 'white',
            backgroundColor: 'rgb(2, 132, 199)',
            borderRadius: '4px',
          }}
        >
          Submit Voter Data
        </button>
      </form>
    </>
  );
};

export default YearlyQues;
