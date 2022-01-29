import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import YearlyQues from 'components/Questionare/yearlyQues';
import VoterQues from 'components/Questionare/voterQues';
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

  const getVoterID = (id) => {
    setvoterID(id);
  };

  return (
    <>
      {step === 1 || error ? (
        <VoterQues nextStep={nextStep} setVoterID={getVoterID} />
      ) : (
        <YearlyQues status={status} voterID={voterID} nextStep={nextStep} />
      )}
    </>
  );
};

export default Questionnaire;
