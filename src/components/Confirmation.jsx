import React from "react";
import { Button, Typography, Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import EventIcon from "@mui/icons-material/Event";
import FlightClassIcon from "@mui/icons-material/FlightClass";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Confirmation = ({ formData, flightData, onConfirm }) => {
  console.log(formData, "formData");
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        minWidth: "70vw",
        fontFamily: "Work Sans",
      }}
    >
      <Typography
        sx={{
          padding: "20px",
          color: "#524f4f",
          fontSize: "15px",
          fontFamily: "Work Sans",
        }}
      >
        Please verify the following information before confirming your flights.
      </Typography>
      <Box sx={{ display: "flex", gap: "10%", color: "#1776D2" }}>
        <Box>
          <Typography
            sx={{ padding: "20px", textTransform: "uppercase" }}
            variant="h6"
          >
            Personal Details
          </Typography>
          <Typography sx={{ padding: "20px" }}>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <AccountCircleIcon />
              <Typography sx={{ color: "#524f4f" }}>
                {formData?.firstName} {formData?.lastName}
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", gap: "10px" }}>
              <EmailIcon />
              <Typography sx={{ color: "#524f4f" }}>
                {formData?.email}
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", gap: "10px" }}>
              <CallIcon />
              <Typography sx={{ color: "#524f4f" }}>
                {formData?.phoneNumber}
              </Typography>
            </Box>
            <br />
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{ padding: "20px", textTransform: "uppercase" }}
            variant="h6"
          >
            Flight Details
          </Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={{ padding: "20px" }}>
              Departure City
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <FlightTakeoffIcon />
                <Typography sx={{ color: "#524f4f" }}>
                  {flightData?.departureCity}
                </Typography>
              </Box>
              <br />
              Destination City
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <FlightLandIcon />
                <Typography sx={{ color: "#524f4f" }}>
                  {flightData?.destinationCity}
                </Typography>
              </Box>
              <br />
              Departure Date
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <EventIcon />
                <Typography sx={{ color: "#524f4f" }}>
                  {flightData?.departureDate}
                </Typography>
              </Box>
              <br />
              Return Date
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <EventIcon />
                <Typography sx={{ color: "#524f4f" }}>
                  {flightData?.returnDate}
                </Typography>
              </Box>
              <br />
            </Box>
            <Box sx={{ padding: "20px" }}>
              Flight Class
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <FlightClassIcon />
                <Typography sx={{ color: "#524f4f" }}>
                  {flightData?.flightClass}
                </Typography>
              </Box>
              <br />
              Number of Passengers
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  marginTop: "10px",
                  alignItems: "center",
                }}
              >
                <PeopleAltIcon />
                <Typography sx={{ color: "#524f4f" }}>
                  {flightData?.numPassengers}
                </Typography>
              </Box>
              <br />
            </Box>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="success"
        sx={{ float: "right" }}
        onClick={onConfirm}
      >
        Confirm
      </Button>
    </Box>
  );
};

export default Confirmation;
