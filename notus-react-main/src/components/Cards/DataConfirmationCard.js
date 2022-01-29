import React from 'react';
import { Link } from 'react-router-dom';

const DataConfirmationCard = ({ message, to }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <div
        style={{
          position: 'fixed',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          left: '50%',
          color: 'white',
          backgroundColor: 'rgba(0,0,0, 0.8)',
          height: '30vh',
          width: '30vw',
          minWidth: '20rem',
          minHeight: '10rem',
          zIndex: '1000',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            padding: '20px',
          }}
        >
          <h2>{message}</h2>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Link to={to}>
              <button
                style={{
                  margin: ' 0rem 0.5rem',
                  padding: '0.2rem 2rem',
                  border: '1px solid black',
                  color: 'white',
                  backgroundColor: 'rgb(2, 132, 199)',
                  borderRadius: '4px',
                }}
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataConfirmationCard;
