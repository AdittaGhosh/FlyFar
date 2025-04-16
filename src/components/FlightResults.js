import React from 'react';
import { Typography } from '@mui/material';
import FlightAccordion from './FlightAccordion';

function FlightResults({ flights }) {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h5" gutterBottom>
        Flight Results
      </Typography>
      {flights.length === 0 ? (
        <Typography variant="body1" color="textSecondary">
          No flights found for this route.
        </Typography>
      ) : (
        flights.map((flight) => (
          <FlightAccordion key={flight.uId} flight={flight} />
        ))
      )}
    </div>
  );
}

export default FlightResults;