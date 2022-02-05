import React, { useEffect, useRef, useState } from 'react';
import Lok_Sabha from '../../assets/data/up';
import CardPageVisits from 'components/Cards/CardPageVisits';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTableData } from 'hooks/use-get-table-data';
import filters from 'helpers/filters';
import { listVoters } from 'actions/voterActions';

const DirectQues = ({ backBtn, setedit }) => {
  const [filter, setFilter] = useState(false);
  const lokSabhaRef = useRef();
  const vidhanSabhaRef = useRef();
  const pollingBoothRef = useRef();
  const villageNameRef = useRef();
  const wardNumberRef = useRef();
  const voterIdRef = useRef();
  const data = [];

  const dispatch = useDispatch();
  const voterList = useSelector((state) => state.voterList);
  const { voters } = voterList;

  //states

  const [columnsVoter, setColumnsVoter] = useState();
  const [rowsVoter, setRowsVoter] = useState();
  const [selectedFields, setSelectedFields] = useState([]);
  const [rowCopy, setRowCopy] = useState();

  useEffect(() => {
    dispatch(listVoters());
  }, [dispatch]);

  let votersTable = useGetTableData(voters, selectedFields);

  useEffect(() => {
    setRowsVoter(votersTable.rowsData);
    setRowCopy(votersTable.rowsData);
    setColumnsVoter(votersTable.columnsData);
  }, [votersTable.rowsData, votersTable.columnsData]);
  const filterColumns = [
    'Lok_Sabha_Name',
    'Vidhan_Sabha_Name',
    'polling_Booth_number',
    'Village_Name',
    'Name',
    'Voter_ID',
  ];
  const onSubmit = (e) => {
    e.preventDefault();
    data.push(
      lokSabhaRef.current.value,
      vidhanSabhaRef.current.value,
      pollingBoothRef.current.value,
      villageNameRef.current.value,
      wardNumberRef.current.value,
      parseInt(voterIdRef.current.value) || ''
    );
    const newRowsVoter = filters(data, filterColumns, rowCopy);
    setRowsVoter(newRowsVoter);
  };
  const editVoter = () => {
    setedit(rowsVoter[0].id);
  };
  return (
    <>
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

      <form
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: ' 2rem',
        }}
        onSubmit={onSubmit}
      >
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
            ref={lokSabhaRef}
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
            ref={vidhanSabhaRef}
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
            ref={pollingBoothRef}
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
          <label style={{ margin: ' 0 10px' }}>Village Name:</label>
          <input
            ref={villageNameRef}
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
          <label style={{ margin: ' 0 10px' }}>Name:</label>
          <input
            ref={wardNumberRef}
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
            ref={voterIdRef}
            type="number"
            style={{
              height: '35px',
              width: '250px',
              border: '1px solid black',
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            margin: ' 1.5rem 0',
            padding: '0.5rem 1rem',
            color: 'white',
            backgroundColor: 'rgb(2, 132, 199)',
            borderRadius: '4px',
            width: '100%',
          }}
        >
          Find Voter
        </button>
      </form>
      <CardPageVisits columnsVoter={columnsVoter} rowsVoter={rowsVoter} />
      {rowsVoter?.length == 1 ? (
        <button
          onClick={editVoter}
          style={{
            margin: ' 1.5rem 0',
            padding: '0.5rem 1rem',
            color: 'white',
            backgroundColor: 'rgb(2, 132, 199)',
            borderRadius: '4px',
            width: '100%',
          }}
        >
          Edit Voter
        </button>
      ) : (
        ''
      )}
    </>
  );
};

export default DirectQues;
