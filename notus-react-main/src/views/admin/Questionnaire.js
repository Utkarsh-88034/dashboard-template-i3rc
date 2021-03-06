import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import YearlyQues from 'components/Questionare/yearlyQues';
import VoterQues from 'components/Questionare/voterQues';
import TypeCard from 'components/Type Cards/TypeCard.js';
import DirectQues from 'components/Questionare/directQues';
import { Prompt } from 'react-router';

const Questionnaire = () => {
  const statusList = useSelector((state) => state.statusList);
  const { status, error } = statusList;
  const [editVoter, setEditVoter] = useState(false);
  const [step, setStep] = useState(1);
  const [voterIdDq, setVoterIdDq] = useState(null);
  const nextStep = (i) => {
    setStep(i);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  window.onbeforeunload = (e) => {
    console.log('first');
    e.preventDefault();
    e.returnValue = '';
  };
  const [voterID, setvoterID] = useState(null);

  const [addVoter, setAddVoter] = useState(false);
  const [takeSurvey, setTakeSurvey] = useState(false);

  const getVoterID = (id) => {
    setvoterID(id);
  };

  const setaddVoter = () => {
    setAddVoter(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const settakeSurvey = () => {
    setTakeSurvey(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const backBtn = () => {
    setAddVoter(false);
    setTakeSurvey(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const backtoSearch = () => {
    setAddVoter(false);
    setEditVoter(false);
    setTakeSurvey(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const backtoAddVoter = () => {
    setAddVoter(true);
    setStep(1);
  };

  const setedit = (value) => {
    setTakeSurvey(false);
    setVoterIdDq(value);
    setEditVoter(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Prompt message="Are you sure you want to leave?" when={false} />
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
          backBtn={backtoAddVoter}
          post={true}
        />
      ) : takeSurvey ? (
        <DirectQues backBtn={backBtn} setedit={setedit} />
      ) : editVoter ? (
        <YearlyQues put={true} voterIdDq={voterIdDq} backBtn={backtoSearch} />
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
