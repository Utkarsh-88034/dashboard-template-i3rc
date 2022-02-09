import { getAllElectionData } from 'actions/voterActions';
import { listVoters } from 'actions/voterActions';
import Lok_Sabha from 'assets/data/up';
import Influence from 'Chart Data/Influence';
import { graphIssueDataGenerator } from 'Chart Data/Issues';
import oldDataCalculator from 'Chart Data/oldDataFuture';
import { impactCalculator } from 'Chart Data/parameterImpactData';
import { parameterCalculator } from 'Chart Data/parameterImpactData';
import CardBarChartVertical from 'components/Cards/CardBarChartVertical';
import CardLineChart from 'components/Cards/CardLineChart';
import chartFilteredData from 'helpers/chartData';
import filters from 'helpers/filters';
import { useGetTableData } from 'hooks/use-get-table-data';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Disposition = () => {
  const [name, setName] = useState();
  const [pollingBoothNo, setPollingBoothNo] = useState();
  const [lokSabha, setLokSabha] = useState();
  const [vidhanSabha, setVidhanSabha] = useState();
  const [villageName, setVillageName] = useState();
  const [voterID, setVoterID] = useState();
  const [voterData, setVoterData] = useState();

  const { NationalIssueData, LocalIssueData } =
    graphIssueDataGenerator(voterData);
  const { infleunceData } = Influence(voterData);
  const parameterMeanData = parameterCalculator(voterData);
  const impactMeanData = impactCalculator(voterData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listVoters());
    dispatch(getAllElectionData());
  }, [dispatch]);
  const electionList = useSelector((state) => state.electionList);
  const { edl } = electionList;
  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;

  const data = [];
  const onSubmit = () => {
    data.push(
      lokSabha,
      vidhanSabha,
      pollingBoothNo,
      villageName,
      name,
      voterID
    );
    const filteredData = chartFilteredData(data, voters, edl);
    setVoterData(filteredData);
    // setVoterData(newVoterData);
  };

  useEffect(() => {
    onSubmit();
  }, [lokSabha, vidhanSabha, name, voterID, pollingBoothNo, villageName]);

  return (
    <>
      <form
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: ' 2rem',
        }}
      >
        <div
          style={{
            margin: '10px',
            width: '30rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label style={{ margin: ' 0 10px' }}>Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
        </div>
        <div
          style={{
            margin: '10px',
            width: '30rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label style={{ margin: ' 0 10px' }}>Voter ID:</label>
          <input
            onChange={(e) => {
              setVoterID(e.target.value);
            }}
            type="number"
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
        </div>
        <div
          style={{
            margin: '10px',
            width: '30rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label style={{ margin: ' 0 10px' }}>Lok Sabha Name:</label>
          <input
            onChange={(e) => {
              setLokSabha(e.target.value);
            }}
            list="list"
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
          <datalist id="list">
            {Lok_Sabha.map((data) => (
              <option>{data['Lok Sabha Name']}</option>
            ))}
          </datalist>
        </div>
        <div
          style={{
            margin: '10px',
            width: '30rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label style={{ margin: ' 0 10px' }}>Vidhan Sabha Name:</label>
          <input
            onChange={(e) => {
              setVidhanSabha(e.target.value);
            }}
            list="list"
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
          <datalist id="list">
            {Lok_Sabha.map((data) => (
              <option>{data['Lok Sabha Name']}</option>
            ))}
          </datalist>
        </div>
        <div
          style={{
            margin: '10px',
            width: '30rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label style={{ margin: ' 0 10px' }}>Polling Booth Number:</label>
          <input
            type={'text'}
            onChange={(e) => {
              setPollingBoothNo(e.target.value);
            }}
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
        </div>
        <div
          style={{
            margin: '10px',
            width: '30rem',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <label style={{ margin: ' 0 10px' }}>Village Name:</label>
          <input
            onChange={(e) => {
              setVillageName(e.target.value);
            }}
            list="list"
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
          <datalist id="list">
            {Lok_Sabha.map((data) => (
              <option>{data['Lok Sabha Name']}</option>
            ))}
          </datalist>
        </div>
      </form>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          overflowX: 'hidden',
          justifyContent: 'space-evenly',
          width: '100%',
        }}
      >
        <div style={{ width: '100%', minWidth: '300px', maxWidth: '600px' }}>
          <CardBarChartVertical data={NationalIssueData} color={'#78bff5'} />
        </div>

        <div style={{ width: '100%', minWidth: '300px', maxWidth: '600px' }}>
          <CardBarChartVertical data={LocalIssueData} color={'#92f79e'} />
        </div>
        <div style={{ width: '100%', minWidth: '300px', maxWidth: '600px' }}>
          <CardBarChartVertical
            data={infleunceData}
            width={280}
            color={'#ff6969'}
          />
        </div>
        <div style={{ width: '100%', minWidth: '300px' }}>
          <CardLineChart data={parameterMeanData} color={'#f57a7a'} />
        </div>
        <div style={{ width: '100%', minWidth: '300px' }}>
          <CardLineChart data={impactMeanData} color={'#ccc'} />
        </div>
      </div>
    </>
  );
};

export default Disposition;
