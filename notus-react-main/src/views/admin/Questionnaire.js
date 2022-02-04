import React, { useState } from "react";
import { useSelector } from "react-redux";
import YearlyQues from "components/Questionare/yearlyQues";
import VoterQues from "components/Questionare/voterQues";
import TypeCard from "components/Type Cards/TypeCard.js";

const Questionnaire = () => {
  const statusList = useSelector((state) => state.statusList);
  const { status, error } = statusList;

  const [step, setStep] = useState(1);
  const nextStep = (i) => {
    setStep(i);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [voterID, setvoterID] = useState(null);

  const [addVoter, setAddVoter] = useState(false);

  const getVoterID = (id) => {
    setvoterID(id);
  };

  const setaddVoter = () => {
    setAddVoter(true);
  };

  return (
    <>
      {(addVoter && step === 1) || error ? (
        <VoterQues nextStep={nextStep} setVoterID={getVoterID} />
      ) : step === 2 || error ? (
        <YearlyQues status={status} voterID={voterID} nextStep={nextStep} />
      ) : (
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          {/* {step === 1 || error ? (
        <VoterQues nextStep={nextStep} setVoterID={getVoterID} />
      ) : (
        <YearlyQues status={status} voterID={voterID} nextStep={nextStep} />
      )} */}
          <TypeCard
            click={setaddVoter}
            title={"ADD NEW VOTER"}
            color={"rgb(65, 150, 84)"}
            icon={"fas fa-user-plus"}
          />
          <TypeCard
            title={"TAKE SURVEY"}
            icon={"fas fa-clipboard-list"}
            color={"rgb(58,132,199)"}
          />
          <TypeCard
            title={"RETAKE SURVEY"}
            icon={"fas fa-redo-alt"}
            color={"rgb(255, 89, 89)"}
          />
        </div>
      )}
    </>
  );
};

export default Questionnaire;
