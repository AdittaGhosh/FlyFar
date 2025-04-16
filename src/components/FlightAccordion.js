import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FlightAccordion({ flight }) {
  const isOneWay = flight.triptype === 'OneWay' || !flight.segments.back?.length;

  return (
    <Accordion sx={{ mb: 2 }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Typography>
              {flight.godeparture} → {flight.goarrival}
            </Typography>
            <Typography variant="caption">
              {flight.godepartureTime} - {flight.goarrivalTime}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>{flight.careerName}</Typography>
            <Typography variant="caption">{flight.goflightduration}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography>BDT {flight.customerPrice}</Typography>
            <Typography variant="caption">{flight.class}</Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography variant="h6">Outbound Flight</Typography>
          {flight.segments.go.map((segment, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography>
                Flight {segment.marketingflight}: {segment.departureAirport} (
                {segment.departureTime}) → {segment.arrivalAirport} (
                {segment.arrivalTime})
              </Typography>
              <Typography variant="caption">
                Duration: {segment.flightduration} | Seats: {segment.seat}
              </Typography>
            </Box>
          ))}
          {!isOneWay && (
            <>
              <Typography variant="h6">Return Flight</Typography>
              {flight.segments.back.map((segment, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography>
                    Flight {segment.marketingflight}: {segment.departureAirport} (
                    {segment.departureTime}) → {segment.arrivalAirport} (
                    {segment.arrivalTime})
                  </Typography>
                  <Typography variant="caption">
                    Duration: {segment.flightduration} | Seats: {segment.seat}
                  </Typography>
                </Box>
              ))}
            </>
          )}
          <Typography>
            Baggage Allowance: {flight.bags} kg | Refundable: {flight.refundable}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}

export default FlightAccordion;