import React from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

function MultiCityTab({ onSearch, tripType }) {
  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Multi-City Flight Search
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="From"
            defaultValue="DAC"
            disabled
            helperText="e.g., Dhaka (DAC)"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="To"
            defaultValue="CXB"
            disabled
            helperText="e.g., Cox's Bazar (CXB)"
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            fullWidth
            label="Departure Date"
            type="date"
            defaultValue="2025-04-23"
            InputLabelProps={{ shrink: true }}
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="outlined" disabled fullWidth sx={{ mt: 1 }}>
            Add Another City
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" disabled>
            Search Flights
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default MultiCityTab;