import React, { useState } from 'react';
import { Paper } from '@mui/material';
import FlightResults from './FlightResults';

function SearchBar({ children, tripType }) {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearch = (formData) => {
    import('../flights.json').then((data) => {
      const flights = data.default;

      // Normalize form data for comparison
      const from = formData.from?.toUpperCase().trim();
      const to = formData.to?.toUpperCase().trim();

      // Filter flights based on "From", "To", and trip type
      const filteredFlights = flights.filter((flight) => {
        const flightFrom = flight.godeparture?.toUpperCase();
        const flightTo = flight.goarrival?.toUpperCase();
        const isOneWay = tripType === 'OneWay';
        const flightIsOneWay = flight.triptype === 'OneWay' || !flight.segments.back?.length;

        // Match "From" and "To"
        const matchesRoute = flightFrom === from && flightTo === to;

        // Match trip type
        const matchesTripType = isOneWay ? flightIsOneWay : !flightIsOneWay;

        return matchesRoute && matchesTripType;
      });

      // Remove duplicates
      const uniqueFlights = [];
      const seen = new Set();

      filteredFlights.forEach((flight) => {
        const flightKey = `${flight.godeparture}-${flight.goarrival}-${flight.godepartureTime}-${flight.goarrivalTime}-${flight.customerPrice}-${flight.goflightduration}`;
        if (!seen.has(flightKey)) {
          seen.add(flightKey);
          uniqueFlights.push(flight);
        }
      });

      setSearchResults(uniqueFlights);
    });
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
      {React.Children.map(
        React.Children.toArray(children).filter((child) => React.isValidElement(child)),
        (child) => React.cloneElement(child, { onSearch: handleSearch })
      )}
      {searchResults && <FlightResults flights={searchResults} />}
    </Paper>
  );
}

export default SearchBar;