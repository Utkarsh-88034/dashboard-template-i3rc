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
import DataTable, { createTheme } from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { transparent } from 'tailwindcss/colors';
import { margin } from 'tailwindcss/defaultTheme';

const Disposition = () => {
  const [name, setName] = useState();
  const [pollingBoothNo, setPollingBoothNo] = useState();
  const [lokSabha, setLokSabha] = useState();
  const [vidhanSabha, setVidhanSabha] = useState();
  const [villageName, setVillageName] = useState();
  const [voterID, setVoterID] = useState();
  const [voterData, setVoterData] = useState();
  const [showFilter, setShowFilter] = useState(false);

  const { NationalIssueData, LocalIssueData, top5NIssues, top5LIssues } =
    graphIssueDataGenerator(voterData);

  const Nrows = [];
  const NKeys = Object.keys(top5NIssues[0]);
  NKeys.map((key, id) => {
    Nrows.push({
      'Sr No.': `Issue ${id + 1}`,
      'Issue Detail': key,
    });
  });
  const Ncol = [
    {
      name: 'Sr No.',
      selector: (row) => row['Sr No.'],
      filterable: true,
      sortable: true,
    },
    {
      name: 'Issue Detail',
      selector: (row) => row['Issue Detail'],
      filterable: true,
      sortable: true,
    },
  ];

  const Lrows = [];
  const LKeys = Object.keys(top5LIssues[0]);
  LKeys.map((key, id) => {
    Lrows.push({
      'Sr No.': `Issue ${id + 1}`,
      'Issue Detail': key,
    });
  });
  const Lcol = [
    {
      name: 'Sr No.',
      selector: (row) => row['Sr No.'],
      filterable: true,
      sortable: true,
    },
    {
      name: 'Issue Detail',
      selector: (row) => row['Issue Detail'],
      filterable: true,
      sortable: true,
    },
  ];

  console.log(top5NIssues, top5LIssues);
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

  useEffect(() => {
    // console.log(edl);
    setVoterData(edl);
  }, [edl]);

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

  createTheme('dark', {
    background: {
      default: 'rgb(51,65,85)',
    },
  });
  return (
    <>
      {showFilter && (
        <form
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            backgroundColor: 'rgba(51,65,85,0.8)',
            color: 'white',
            zIndex: 1000,
            top: '80px',
            backdropFilter: 'blur(10px)',
            padding: '2rem 0',
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
                color: 'black',
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
                color: 'black',
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
                color: 'black',
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
                color: 'black',
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
                color: 'black',
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
                color: 'black',
              }}
            />
            <datalist id="list">
              {Lok_Sabha.map((data) => (
                <option>{data['Lok Sabha Name']}</option>
              ))}
            </datalist>
          </div>
        </form>
      )}
      <div
        style={{
          overflowX: 'hidden',

          width: '100%',
          paddingTop: showFilter ? '330px' : '100px',
        }}
      >
        <button
          style={{ marginLeft: '1rem' }}
          onClick={() => {
            setShowFilter(!showFilter);
          }}
        >
          <i style={{ marginRight: '0.5rem' }} className="fas fa-filter" />
          Filters
        </button>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            overflowX: 'hidden',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <div
            style={{
              width: '100%',
              minWidth: '300px',
              maxWidth: '535px',
              border: '1px solid black',
              borderRadius: '5px',
              height: 'max-content',
            }}
          >
            <DataTable
              columns={Ncol}
              data={Nrows}
              // customStyles={customStyles}
              pagination
              theme="dark"
            />
          </div>
          <div style={{ width: '100%', minWidth: '300px', maxWidth: '500px' }}>
            <CardBarChartVertical data={NationalIssueData} color={'#78bff5'} />
          </div>
          <div
            style={{
              width: '100%',
              minWidth: '300px',
              maxWidth: '535px',
              border: '1px solid black',
              borderRadius: '5px',

              height: 'max-content',
            }}
          >
            <DataTable
              columns={Lcol}
              data={Lrows}
              // customStyles={customStyles}
              pagination
              theme="dark"
            />
          </div>
          <div style={{ width: '100%', minWidth: '300px', maxWidth: '500px' }}>
            <CardBarChartVertical data={LocalIssueData} color={'#92f79e'} />
          </div>
          <div style={{ width: '100%', minWidth: '300px', maxWidth: '500px' }}>
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
      </div>
    </>
  );
};

export default Disposition;
