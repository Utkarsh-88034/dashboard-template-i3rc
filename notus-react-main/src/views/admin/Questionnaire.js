import React, { useCallback, useState } from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import YearlyQues from "components/Questionare/yearlyQues";
import VoterQues from "components/Questionare/voterQues";
const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(2);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [voterID, setvoterID] = useState(null);

  const getVoterID = (id) => {
    setvoterID(id);
  };

  return (
    <>
      {step === 1 ? (
        <VoterQues nextStep={nextStep} setVoterID={getVoterID} />
      ) : (
        <YearlyQues Vid={voterID} />
      )}
    </>
  );
};

export default Questionnaire;
