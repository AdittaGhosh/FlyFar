import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

function OneWayTab({ onSearch }) {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="From"
            name="from"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="To"
            name="to"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            label="Departure Date"
            name="departureDate"
            type="date"
            value={formData.departureDate}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Search Flights
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default OneWayTab;