import React, { useState } from "react";
import Header from "./components/Header";
import HorizontalLinearStepper from "./components/Stepper";
import "./App.css";
import FlightConfirmationPage from "./components/FlightConfirmationPage";
import { Box } from "@mui/material";

function App() {
  const [confirmationPage, setConfirmationPage] = useState(false);
  return (
    <Box className="app">
      <Box>
        {confirmationPage ? (
          <FlightConfirmationPage />
        ) : (
          <Box>
            <Header />
            <HorizontalLinearStepper
              setConfirmationPage={setConfirmationPage}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default App;
