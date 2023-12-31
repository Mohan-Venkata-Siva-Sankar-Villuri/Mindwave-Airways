import {
  TextField,
  Grid,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
const FlightDetails = ({
  setFlightData,
  flightData,
  personalData,
  onNext,
  FlightDetailsErrors,
  setFlightDetailsErrors,
}) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (Object.keys(newErrors).length === 0) {
      onNext({ ...personalData, ...flightData });
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
        maxWidth: "75vw",
        fontFamily: "Work Sans",
      }}
    >
      <form style={{ padding: "30px 20px 30px 20px" }} onSubmit={submitHandler}>
        <Grid container spacing={1}>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ minWidth: 130 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your departure city
              </InputLabel>
              <Select
                name="departureCity"
                id="demo-simple-select"
                value={flightData.departureCity}
                style={{ width: "220px" }}
                label="Select your departure city"
                onChange={changeHandler}
                error={Boolean(FlightDetailsErrors.departureCity)}
              >
                {cityDetails.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {Boolean(FlightDetailsErrors.departureCity) && (
                <FormHelperText style={{ color: "#d32f2f" }}>
                  {"Departure City is required"}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ minWidth: 100 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your destination city
              </InputLabel>
              <Select
                name="destinationCity"
                id="demo-simple-select"
                value={flightData.destinationCity}
                style={{ width: "220px" }}
                label="Select your destination city"
                onChange={changeHandler}
                error={Boolean(FlightDetailsErrors.destinationCity)}
              >
                {cityDetails.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {Boolean(FlightDetailsErrors.destinationCity) && (
                <FormHelperText style={{ color: "#d32f2f" }}>
                  {"Destination City is required"}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="departureDate"
              label="Departure Date"
              type="date"
              style={{ width: "200px" }}
              variant="standard"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={flightData.departureDate}
              onChange={changeHandler}
              error={FlightDetailsErrors.departureDate}
              helperText={
                FlightDetailsErrors.departureDate &&
                "Departure Date is required"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name="returnDate"
              label="Return Date"
              type="date"
              style={{ width: "250px" }}
              variant="standard"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              value={flightData.returnDate}
              onChange={changeHandler}
              error={FlightDetailsErrors.returnDate}
              helperText={
                FlightDetailsErrors.returnDate && "Return Date is required"
              }
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard" sx={{ minWidth: 130 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Select your Flight class
              </InputLabel>
              <Select
                name="flightClass"
                id="demo-simple-select"
                value={flightData.flightClass}
                style={{ width: "220px" }}
                label="Select your departure city"
                onChange={changeHandler}
                error={Boolean(FlightDetailsErrors.flightClass)}
              >
                {FlightDetails.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
              {Boolean(FlightDetailsErrors.flightClass) && (
                <FormHelperText style={{ color: "#d32f2f" }}>
                  {"Flight Class is required"}
                </FormHelperText>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Number of Passengers"
              name="numPassengers"
              value={flightData.numPassengers}
              style={{ width: "220px" }}
              onChange={changeHandler}
              error={Boolean(FlightDetailsErrors.numPassengers)}
              helperText={
                FlightDetailsErrors.numPassengers &&
                "Number of Passengers is required"
              }
              variant="standard"
            />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FlightDetails;
