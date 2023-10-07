import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Box, Typography } from "@mui/material";

const FlightConfirmationPage = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "120vh",
        background: "#1E88E4",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <CheckCircleIcon sx={{ color: "white" }} />
      <Typography sx={{ color: "white" }}>
        Your flight has been confirmed!
      </Typography>
    </Box>
  );
};

export default FlightConfirmationPage;
