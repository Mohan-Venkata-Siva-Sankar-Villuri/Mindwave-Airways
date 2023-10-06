import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
const FlightDetails = ({
  setFlightData,
  flightData,
  personalData,
  onNext,
  FlightDetailsErrors,
  setFlightDetailsErrors,
  handleFlightDetailsSubmit,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!flightData.departureCity) {
      newErrors.departureCity = "Departure City is required.";
    }

    if (!flightData.destinationCity) {
      newErrors.destinationCity = "Destination City is required.";
    }
    // Add more validation rules for other fields

    if (Object.keys(newErrors).length === 0) {
      onNext({ ...personalData, ...flightData }); // Combine personal and flight data
    } else {
      setFlightDetailsErrors(newErrors);
    }
  };

  const cityDetails = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Delhi", label: "Delhi" },
  ];

  const FlightDetails = [
    { value: "Economy", label: "Economy" },
    { value: "Business", label: "Business" },
    { value: "FirstClass", label: "First Class" },
    { value: "PremiumClass", label: "Premium Class" },
  ];

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFlightData({
      ...flightData,
      [name]: value,
    });
    // Remove FlightDetailsErrors when a field is changed
    setFlightDetailsErrors({
      ...FlightDetailsErrors,
      [name]: false,
    });
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        width: "60vw",
      }}
    >
      <form onSubmit={submitHandler}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ minWidth: 160 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your departure city
              </InputLabel>
              <Select
                name="departureCity"
                id="demo-simple-select"
                value={flightData.departureCity}
                label="Select your departure city"
                onChange={changeHandler}
                error={Boolean(FlightDetailsErrors.departureCity)}
                helperText={FlightDetailsErrors.departureCity}
              >
                {cityDetails.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ minWidth: 160 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your destination city
              </InputLabel>
              <Select
                name="destinationCity"
                id="demo-simple-select"
                value={flightData.destinationCity}
                label="Select your departure city"
                onChange={changeHandler}
                error={Boolean(FlightDetailsErrors.destinationCity)}
                helperText={FlightDetailsErrors.destinationCity}
              >
                {cityDetails.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="departureDate"
              label="Departure Field"
              type="date"
              variant="standard"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={flightData.departureDate}
              onChange={changeHandler}
              error={FlightDetailsErrors.departureDate}
              helperText={
                FlightDetailsErrors.departureDate && "This field is required"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="returnDate"
              label="Return Date"
              type="date"
              variant="standard"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={flightData.returnDate}
              onChange={changeHandler}
              error={FlightDetailsErrors.returnDate}
              helperText={
                FlightDetailsErrors.returnDate && "This field is required"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ minWidth: 160 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your First class
              </InputLabel>
              <Select
                name="flightClass"
                id="demo-simple-select"
                value={flightData.flightClass}
                label="Select your departure city"
                onChange={changeHandler}
                error={Boolean(FlightDetailsErrors.flightClass)}
                helperText={FlightDetailsErrors.flightClass}
              >
                {FlightDetails.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Number of Passengers"
              name="numPassengers"
              value={flightData.numPassengers}
              onChange={changeHandler}
              error={Boolean(FlightDetailsErrors.numPassengers)}
              helperText={FlightDetailsErrors.numPassengers}
              required
              variant="standard"
            />
          </Grid>

          {/* <Grid item xs={12}>
            <Button type="submit">Next</Button>
          </Grid> */}
        </Grid>
      </form>
    </Box>
  );
};

export default FlightDetails;
