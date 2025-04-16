import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import OneWayTab from '../components/OneWayTab';
import RoundTripTab from '../components/RoundTripTab';
import MultiCityTab from '../components/MultiCityTab';

function Home() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Determine trip type based on tab
  const tripType = tabValue === 0 ? 'OneWay' : tabValue === 1 ? 'RoundTrip' : 'MultiCity';

  return (
    <div>
      <header>
        <h1>Flight Search</h1>
      </header>
      <main>
        <Box sx={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="One Way" />
            <Tab label="Round Trip" />
            <Tab label="Multi-City" />
          </Tabs>
          <SearchBar tripType={tripType}>
            {tabValue === 0 && <OneWayTab />}
            {tabValue === 1 && <RoundTripTab />}
            {tabValue === 2 && <MultiCityTab />}
          </SearchBar>
        </Box>
      </main>
    </div>
  );
}

export default Home;