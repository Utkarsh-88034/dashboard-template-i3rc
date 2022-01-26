import React from 'react';
import { useRef } from 'react';
const Questionnaire = () => {
  const EpicRef = useRef();
  const nameRef = useRef();
  const AddressRef = useRef();
  const genderRef = useRef();
  const fatherRef = useRef();
  const voterStatusRef = useRef();
  const contactRef = useRef();
  const qualificationRef = useRef();
  const occupationRef = useRef();
  const issueNatRef = useRef();
  const issueLocRef = useRef();
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

  const q11aRef = useRef();
  const q11bRef = useRef();
  const q11cRef = useRef();
  const q11dRef = useRef();
  const q11eRef = useRef();
  const q11fRef = useRef();
  const q11gRef = useRef();
  const q11hRef = useRef();
  const q11iRef = useRef();
  const q11jRef = useRef();
  const q11kRef = useRef();

  const q12Ref = useRef();
  const q13Ref = useRef();
  const q14Ref = useRef();
  const q15Ref = useRef();
  const q16Ref = useRef();
  const q17Ref = useRef();
  const q18Ref = useRef();
  const q19Ref = useRef();
  const q20Ref = useRef();

  return (
    <div>
      <form>
        <div>
          <label>EPIC Number</label>
          <input type={'number'} ref={EpicRef}></input>
        </div>

        <div>
          <label>Name</label>
          <input type={'text'} ref={nameRef}></input>
        </div>
        <div>
          <label>Address</label>
          <input type={'text'} ref={AddressRef}></input>
        </div>
        <div>
          <label>Gender</label>
          <select ref={genderRef}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label>Father's/ Husband's Name</label>
          <input type={'text'} ref={fatherRef}></input>
        </div>
        <div>
          <label>Voter Status</label>
          <select ref={voterStatusRef}>
            <option value={1}>Active Voter</option>
            <option value={2}>Not in position to vote</option>
            <option value={3}>Voter shifted to other location</option>
            <option value={4}>Voter shifted to other booth</option>
            <option value={5}>No more voters</option>
          </select>
        </div>
        <div>
          <label>Contact Number</label>
          <input type={'number'} ref={contactRef}></input>
        </div>
        <div>
          <label>Qualification</label>
          <select ref={qualificationRef}>
            <option value={1}>Illiterate</option>
            <option value={2}>Upto 7</option>
            <option value={3}>Upto 10</option>
            <option value={4}>12th</option>
            <option value={5}>Some college</option>
            <option value={6}>Graduate/ Post Grad</option>
            <option value={7}>Prof.- Doc. / Eng</option>
            <option value={8}>Any other Prof</option>
          </select>
        </div>
        <div>
          <label>Occupation</label>
          <select ref={occupationRef}>
            <option value={1}>Unemployed</option>
            <option value={2}>Student</option>
            <option value={3}>Housewife</option>
            <option value={4}>Retired</option>
            <option value={5}>Unskilled worker</option>
            <option value={6}>Skilled worker</option>
            <option value={7}>Clerical- Private</option>
            <option value={8}>Clerical- state Govt</option>
            <option value={9}>Clerical- Central Govt</option>
            <option value={10}>Supervisor- Pvt</option>
            <option value={11}>Business/ Shop</option>
            <option value={12}>Officer</option>
            <option value={13}>Farmer</option>
            <option value={14}>Domestic worker</option>
            <option value={15}>Agriculture worker</option>
          </select>
        </div>
        <div>
          <label>
            Please tell me the top 5 issues at all India level which are most
            important?
          </label>
          <select ref={issueNatRef}>
            <option value={1}>Issue 1</option>
            <option value={2}>Issue 2</option>
            <option value={3}>Issue 3</option>
            <option value={4}>Issue 4</option>
            <option value={5}>Issue 5</option>
          </select>
        </div>
        <div>
          <label>
            Please tell me the top 5 issues of your locality which are most
            important?
          </label>
          <select ref={issueLocRef}>
            <option value={1}>Issue 1</option>
            <option value={2}>Issue 2</option>
            <option value={3}>Issue 3</option>
            <option value={4}>Issue 4</option>
            <option value={5}>Issue 5</option>
          </select>
        </div>
        <div>
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
          <label>
            Of the following, please tell me the impact of each aspect over your
            decision to vote on 10 point scale where 1 is mean not at all impact
            and 10 means critical/ full impact?
          </label>
          <br />
          <br />
          <div className="flex flex-col">
            <label>Candidate is member of my community/ caste/ religion</label>
            <input type={'number'} max={10} ref={q7aRef}></input>
            <label>Candidate is known from many years</label>
            <input type={'number'} max={10} ref={q7bRef}></input>
            <label>Candidate is local- from my area</label>
            <input type={'number'} max={10} ref={q7cRef}></input>
            <label>I have personal connect with the candidate</label>
            <input type={'number'} max={10} ref={q7dRef}></input>
            <label>
              Candidate is ready to help us to solve all our problems
            </label>
            <input type={'number'} max={10} ref={q7eRef}></input>
            <label>Candidate is very Popular</label>
            <input type={'number'} max={10} ref={q7fRef}></input>
            <label>Candidate with strong ideology</label>
            <input type={'number'} max={10} ref={q7gRef}></input>
            <label>Candidate is Non- corrupt/ honest image</label>
            <input type={'number'} max={10} ref={q7hRef}></input>
            <label>I will Analyse the candidates past performance</label>
            <input type={'number'} max={10} ref={q7iRef}></input>
            <label>Based on suggestion from family member</label>
            <input type={'number'} max={10} ref={q7jRef}></input>
            <label>Based on suggestion from community people</label>
            <input type={'number'} max={10} ref={q7kRef}></input>
            <label>Candidate must be active in the area</label>
            <input type={'number'} max={10} ref={q7lRef}></input>
            <label>Candidate is Always available in the area</label>
            <input type={'number'} max={10} ref={q7mRef}></input>
          </div>
        </div>
        <div>
          <br />
          <br />
          <label>
            Of the following, please tell me how you are agree with on a scale
            of 10 where 10 means fully agree and 1 means not at all agree
          </label>
          <br />
          <br />
          <div className="flex flex-col">
            <label>
              I choose whom to vote after duly considering the candidate, the
              party and their past performance
            </label>
            <input type={'number'} max={10} ref={q8aRef}></input>
            <label>I value my vote and always go to vote in Elections</label>
            <input type={'number'} max={10} ref={q8bRef}></input>
            <label>
              I am loyal towards a particular party and always vote for that
              party irrespective of the candidate
            </label>
            <input type={'number'} max={10} ref={q8cRef}></input>
            <label>
              We as a family always vote for a particular party in every
              election
            </label>
            <input type={'number'} max={10} ref={q8dRef}></input>
            <label>I vote for most deserving candidate</label>
            <input type={'number'} max={10} ref={q8eRef}></input>
            <label>I keep changing my choice of vote every new election</label>
            <input type={'number'} max={10} ref={q8fRef}></input>
            <label>
              I will vote for any candidate who I think will help me personally
            </label>
            <input type={'number'} max={10} ref={q8gRef}></input>
            <label>
              I am not very particular about voting and will vote for anyone
              whom I am familiar with
            </label>
            <input type={'number'} max={10} ref={q8hRef}></input>
            <label>
              I would not hesitate to vote to a new candidate or party and give
              them a chance
            </label>
            <input type={'number'} max={10} ref={q8iRef}></input>
            <label>
              I believe one should keep changing his/ her choice of vote to keep
              these politicians on their toes
            </label>
            <input type={'number'} max={10} ref={q8jRef}></input>
            <label>I wait till the last minute to decide whom to vote</label>
            <input type={'number'} max={10} ref={q8kRef}></input>
            <label>
              I have at times voted a candidate after getting influenced by
              their campaign and personal charisma
            </label>
            <input type={'number'} max={10} ref={q8lRef}></input>
            <label>
              I have been influenced by the party workers tot vote for a
              particular candidate in the past
            </label>
            <input type={'number'} max={10} ref={q8mRef}></input>
            <label>
              I debate and discuss with friends, family and also do my own
              research to finally choosing the candidate to vote for very
              carefully
            </label>
            <input type={'number'} max={10} ref={q8nRef}></input>
          </div>
        </div>
        <div>
          <label>
            Do you know the candidate of INC party for your parliamentary
            Constituency?
          </label>
          <select ref={q9INCRef}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {
            <>
              <label>Name of any three party candidates</label>
              <input type="text" ref={INCname1Ref} />
              <input type="text" ref={INCname2Ref} />
              <input type="text" ref={INCname3Ref} />{' '}
            </>
          }
        </div>
        <div>
          <label>
            Do you know the candidate of BJP party for your parliamentary
            Constituency?
          </label>

          <select ref={q9BJPRef}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {
            <>
              <label>Name of any three party candidates</label>
              <input type="text" ref={BJPname1Ref} />
              <input type="text" ref={BJPname2Ref} />
              <input type="text" ref={BJPname3Ref} />{' '}
            </>
          }
        </div>
        <div>
          <label>
            Do you know the candidate of BSP party for your parliamentary
            Constituency?
          </label>

          <select ref={q9BSPRef}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {
            <>
              <label>Name of any three party candidates</label>
              <input type="text" ref={BSPname1Ref} />
              <input type="text" ref={BSPname2Ref} />
              <input type="text" ref={BSPname3Ref} />{' '}
            </>
          }
        </div>
        <div>
          <label>
            Do you know the candidate of SP party for your parliamentary
            Constituency?
          </label>

          <select ref={q9SPRef}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {
            <>
              <label>Name of any three party candidates</label>
              <input type="text" ref={SPname1Ref} />
              <input type="text" ref={SPname2Ref} />
              <input type="text" ref={SPname3Ref} />{' '}
            </>
          }
        </div>
        <div>
          <label>
            Do you know the candidate of TMC party for your parliamentary
            Constituency?
          </label>

          <select ref={q9TMCRef}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
          {
            <>
              <label>Name of any three party candidates</label>
              <input type="text" ref={TMCname1Ref} />
              <input type="text" ref={TMCname2Ref} />
              <input type="text" ref={TMCname3Ref} />{' '}
            </>
          }
        </div>

        <div>
          <label>
            I have some parameters to assess Now please tell me for each aspect
            one by one which aspect is associated with which all candidate?
          </label>
          <br />
          <br />
          <div>
            <label>Past Performance: A performer</label>
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Honesty and Integrity</label>
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Popularity</label>
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Visionary</label>
            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Approachability</label>
            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Cares for People</label>

            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Work for my community</label>

            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Intelligent</label>
            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Local</label>
            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Helpful and active in the area</label>
            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
          <div>
            <label>Most powerful political leader in my constituency</label>
            <br />
            <br />
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{INCname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BJPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{BSPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{SPname3Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname1Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname2Ref.current?.value}</label>
            </div>
            <div>
              <input type="checkbox" value={''} />
              <label>{TMCname3Ref.current?.value}</label>
            </div>
          </div>
        </div>
        <div>
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
        <div>
          <label>
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
        <div>
          <label>
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
        <div>
          <label>Do not ask just to observe and record</label>
          <select ref={q15Ref}>
            <option value={1}>Fully against</option>
            <option value={2}>Partially against</option>
            <option value={3}>Undecided</option>
            <option value={4}>Partially loyal</option>
            <option value={5}>Fully loyal</option>
          </select>
        </div>
        <div>
          <label>Remark/ suggestion/ Requirement</label>
          <input type="text" ref={q16Ref} />
        </div>
        <div>
          <label>Number of voters in household</label>
          <input type="text" ref={q17Ref} />
        </div>
        <div>
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
        <div>
          <label>Please mention your caste</label>
          <input type="text" ref={q19Ref} />
        </div>
        <div>
          <label>
            Do you need transportation facility for voting? Do not Ask
          </label>
          <select ref={q20Ref}>
            <option value={1}>Yes</option>
            <option value={2}>No</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Questionnaire;
