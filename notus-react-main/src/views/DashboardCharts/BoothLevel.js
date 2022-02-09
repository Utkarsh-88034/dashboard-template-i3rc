import oldDataCalculator from 'Chart Data/oldDataFuture';
import PieRechartComponent from 'components/Cards/CardPieChar';
import React from 'react';
import { useSelector } from 'react-redux';

const BoothLevel = () => {
  const electionList = useSelector((state) => state.electionList);
  const { edl } = electionList;
  const {
    willVoteData,
    votedMLAData,
    votedMPData,
    loyaltyData,
    religiousData,
    gainLossMLAData,
    gainLossMPData,
  } = oldDataCalculator(edl);
  return (
    <div>
      <div style={{ width: '100%', minWidth: '300px', maxWidth: '600px' }}>
        <PieRechartComponent data={loyaltyData} />
      </div>
    </div>
  );
};

export default BoothLevel;
