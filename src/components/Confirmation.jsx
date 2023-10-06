import React from "react";
import { Button, Typography } from "@mui/material";
import FlightLandIcon from "@mui/icons-material/FlightLand";

const Confirmation = ({ formData, onConfirm }) => {
  return (
    <div>
      <Typography variant="h6">Personal Details</Typography>
      <Typography>
        First Name: {formData?.firstName}
        <br />
        Last Name: {formData?.lastName}
        <br />
        Email: {formData?.email}
        <br />
        Phone Number: {formData?.phoneNumber}
        <br />
      </Typography>

      <Typography variant="h6">Flight Details</Typography>
      <Typography>
        Departure City: {FlightLandIcon} {formData?.departureCity}
        <br />
        Destination City: {formData?.destinationCity}
        <br />
        Departure Date: {formData?.departureDate}
        <br />
        Return Date: {formData?.returnDate}
        <br />
        Flight Class: {formData?.flightClass}
        <br />
        Number of Passengers: {formData?.numPassengers}
        <br />
      </Typography>

      <Button onClick={onConfirm}>Confirm</Button>
    </div>
  );
};

export default Confirmation;
