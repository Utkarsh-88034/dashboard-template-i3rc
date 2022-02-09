import PieRechartComponent from 'components/Cards/CardPieChar';
import { counterElection } from 'helpers/counter';
import React from 'react';
import { useSelector } from 'react-redux';

const ConnectToVoter = () => {
  const electionList = useSelector((state) => state.electionList);
  const { edl } = electionList;

  const yes = counterElection(edl, 'need_transportation', 1);
  const no = counterElection(edl, 'need_transportation', 2);

  const needTransporatationData = [
    {
      name: 'Yes',
      value: yes,
    },
    {
      name: 'No',
      value: no,
    },
  ];
  return (
    <div>
      <div style={{ width: '100%', minWidth: '300px', maxWidth: '600px' }}>
        <PieRechartComponent data={needTransporatationData} />
      </div>
    </div>
  );
};

export default ConnectToVoter;
