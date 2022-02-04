import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { postVoterData } from 'actions/voterActions';
import SubmitConfirmationCard from 'components/Cards/SubmitConfirmationCard';

const VoterQues = ({ nextStep, setVoterID, backBtn }) => {
  const dispatch = useDispatch();

  const [submitForm, setSubmitForm] = useState(false);
  const [renderModal, setRenderModal] = useState(false);

  //submit form
  const submitVoterDetails = useCallback(async () => {
    const data = {
      Upload_data: {
        Lok_Sabha_Name: lokSabhanNameRef.current.value,
        Lok_Sabha_Number: lokSabhaNumberRef.current.value,
        Vidhan_Sabha_Name: vidhanSabhaNameRef.current.value,
        Vidhan_Sabha_Number: vidhanSabhaNumberRef.current.value,
        polling_Booth_number: pollingBoothNumberRef.current.value,
        Village_Name: villageNameRef.current.value,
        Ward_No: wardNumberRef.current.value,
        Voter_ID: EpicRef.current.value,
        Locality: localityRef.current.value,
        Name: nameRef.current.value,
        Address: AddressRef.current.value,
        Gender: genderRef.current.value,
        Age: ageRef.current.value,
        Father_or_Husbands_name: fatherRef.current.value,
        Voter_status: voterStatusRef.current.value,
      },
    };
    dispatch(postVoterData(data));
    setVoterID(EpicRef.current?.value);
    nextStep(2);
  }, [nextStep, setVoterID]);

  if (submitForm) {
    submitVoterDetails();
  }

  const setSubmit = (value) => {
    setSubmitForm(value);
    setRenderModal(false);
    document.body.style.overflow = 'auto';
  };

  const EpicRef = useRef();
  const nameRef = useRef();
  const AddressRef = useRef();
  const genderRef = useRef();
  const fatherRef = useRef();
  const voterStatusRef = useRef();
  const lokSabhanNameRef = useRef();
  const lokSabhaNumberRef = useRef();
  const vidhanSabhaNameRef = useRef();
  const vidhanSabhaNumberRef = useRef();
  const pollingBoothNumberRef = useRef();
  const villageNameRef = useRef();
  const wardNumberRef = useRef();
  const localityRef = useRef();
  const ageRef = useRef();
  return (
    <div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          width: 'max-content',
        }}
        onClick={backBtn}
      >
        <i
          style={{
            margin: ' 1.5rem 0',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontSize: '1.2rem',
          }}
          className="fas fa-chevron-left"
        ></i>
        Back
      </div>
      {renderModal ? <SubmitConfirmationCard setSubmit={setSubmit} /> : <></>}
      <form
        className="flex flex-col"
        style={{ margin: '10px' }}
        onSubmit={(e) => {
          document.body.style.overflow = 'hidden';
          e.preventDefault();
          setRenderModal(true);
        }}
      >
        <div
          className=" flex flex-row "
          style={{
            margin: '10px 0',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <label>EPIC Number</label>
          <input type={'number'} ref={EpicRef} required></input>
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
          <label>Name</label>
          <input type={'text'} ref={nameRef} required></input>
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
          <label>Lok Sabha Name</label>
          <input type={'text'} ref={lokSabhanNameRef}></input>
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
          <label>Lok Sabha Number</label>
          <input type={'number'} ref={lokSabhaNumberRef}></input>
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
          <label>Address</label>
          <input type={'text'} ref={AddressRef}></input>
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
          <label>Vidhan Sabha Name</label>
          <input type={'text'} ref={vidhanSabhaNameRef}></input>
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
          <label>Vidhan Sabha Number</label>
          <input type={'number'} ref={vidhanSabhaNumberRef}></input>
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
          <label>Polling Booth Number</label>
          <input type={'number'} ref={pollingBoothNumberRef}></input>
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
          <label>Village Name</label>
          <input type={'text'} ref={villageNameRef}></input>
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
          <label>Ward Number</label>
          <input type={'number'} ref={wardNumberRef}></input>
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
          <label>Age</label>
          <input type={'number'} ref={ageRef}></input>
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
          <label>Locality</label>
          <input type={'text'} ref={localityRef}></input>
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
          <label>Gender</label>
          <select ref={genderRef}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
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
          <label>Father's/ Husband's Name</label>
          <input type={'text'} ref={fatherRef}></input>
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
          <label>Voter Status</label>
          <select ref={voterStatusRef}>
            <option value={1}>Active Voter</option>
            <option value={2}>Not in position to vote</option>
            <option value={3}>Voter shifted to other location</option>
            <option value={4}>Voter shifted to other booth</option>
            <option value={5}>No more voters</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            margin: ' 2rem 0',
            padding: '0.5rem 1rem',
            color: 'white',
            backgroundColor: 'rgb(2, 132, 199)',
            borderRadius: '4px',
          }}
        >
          Create Voter
        </button>
      </form>
    </div>
  );
};

export default VoterQues;
