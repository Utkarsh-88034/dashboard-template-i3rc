import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import YearlyQues from 'components/Questionare/yearlyQues';
import VoterQues from 'components/Questionare/voterQues';
import TypeCard from 'components/Type Cards/TypeCard.js';
import DirectQues from 'components/Questionare/directQues';

const Questionnaire = () => {
  const statusList = useSelector((state) => state.statusList);
  const { status, error } = statusList;

  const [step, setStep] = useState(1);
  const nextStep = (i) => {
    setStep(i);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const [voterID, setvoterID] = useState(null);

  const [addVoter, setAddVoter] = useState(false);
  const [takeSurvey, setTakeSurvey] = useState(false);

  const getVoterID = (id) => {
    setvoterID(id);
  };

  const setaddVoter = () => {
    setAddVoter(true);
  };
  const settakeSurvey = () => {
    setTakeSurvey(true);
  };

  const backBtn = () => {
    setAddVoter(false);
    setTakeSurvey(false);
  };

  return (
    <>
      {(addVoter && step === 1) || error ? (
        <VoterQues
          nextStep={nextStep}
          setVoterID={getVoterID}
          backBtn={backBtn}
        />
      ) : step === 2 || error ? (
        <YearlyQues
          status={status}
          voterID={voterID}
          nextStep={nextStep}
          backBtn={backBtn}
        />
      ) : takeSurvey ? (
        <DirectQues backBtn={backBtn} />
      ) : (
        <div
          style={{
            minHeight: '80vh',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <TypeCard
            click={setaddVoter}
            title={'ADD NEW VOTER'}
            color={'rgb(65, 150, 84)'}
            icon={'fas fa-user-plus'}
          />
          <TypeCard
            click={settakeSurvey}
            title={'TAKE SURVEY'}
            icon={'fas fa-clipboard-list'}
            color={'rgb(58,132,199)'}
          />
          <TypeCard
            click={settakeSurvey}
            title={'RETAKE SURVEY'}
            icon={'fas fa-redo-alt'}
            color={'rgb(255, 89, 89)'}
          />
        </div>
      )}
      {/* {step === 1 || error ? (
        <VoterQues nextStep={nextStep} setVoterID={getVoterID} />
      ) : (
        <YearlyQues status={status} voterID={voterID} nextStep={nextStep} />
      )} */}
      {/* */}
    </>
  );
};

export default Questionnaire;
