import React from 'react';

const Questionnaire = () => {
  return (
    <div>
      <form>
        <div>
          <label>EPIC Number</label>
          <input type={'number'}></input>
        </div>

        <div>
          <label>Name</label>
          <input type={'text'}></input>
        </div>
        <div>
          <label>Address</label>
          <input type={'text'}></input>
        </div>
        <div>
          <label>Gender</label>
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label>Father's/ Husband's Name</label>
          <input type={'text'}></input>
        </div>
        <div>
          <label>Voter Status</label>
          <select>
            <option>Active Voter</option>
            <option>Not in position to vote</option>
            <option>Voter shifted to other location</option>
            <option>Voter shifted to other booth</option>
            <option>No more voters</option>
          </select>
        </div>
        <div>
          <label>Contact Number</label>
          <input type={'number'}></input>
        </div>
        <div>
          <label>Qualification</label>
          <input type={'text'}></input>
        </div>
      </form>
      <div>
        <label>Occupation</label>
        <select>
          <option>Unemployed</option>
          <option>Student</option>
          <option>Housewife</option>
          <option>Retired</option>
          <option>Unskilled worker</option>
          <option>Skilled worker</option>
          <option>Clerical- Private</option>
          <option>Clerical- state Govt</option>
          <option>Clerical- Central Govt</option>
          <option>Supervisor- Pvt</option>
          <option>Business/ Shop</option>
          <option>Officer</option>
          <option>Farmer</option>
          <option>Domestic worker</option>
          <option>Agriculture worker</option>
        </select>
      </div>
    </div>
  );
};

export default Questionnaire;
