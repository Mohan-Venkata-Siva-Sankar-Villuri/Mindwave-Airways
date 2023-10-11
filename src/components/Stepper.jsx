import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FlightDetails from "./FlightDetails";
import Confirmation from "./Confirmation";
import PersonalInformation from "./PersonalInformation";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const steps = ["Personal Information", "Flight Details", "Confirmation"];

export default function HorizontalLinearStepper({ setConfirmationPage }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (activeStep === 0) {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.phoneNumber
      ) {
        if (isStepSkipped(activeStep)) {
          newSkipped = new Set(newSkipped.values());
          newSkipped.delete(activeStep);
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
      } else {
        submitHandler();
      }
    }
    if (activeStep === 1) {
      handleFlightDetailsSubmit();
    }
  };

  const onConfirm = () => {
    handleClickOpen();
  };

  const finalTicketConfirmationHandler = () => {
    setConfirmationPage(true);
  };

  const submitHandler = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "First Name is required.";
    } else {
      newErrors.firstName = "";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Last Name is required.";
    } else {
      newErrors.lastName = "";
    }
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    } else {
      newErrors.email = "";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone Number is required.";
    } else {
      newErrors.phoneNumber = "";
    }
    setErrors(newErrors);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: false,
    });
  };

  //flight details
  const [FlightDetailsErrors, setFlightDetailsErrors] = React.useState({});

  const [flightData, setFlightData] = React.useState({
    departureCity: "",
    destinationCity: "",
    departureDate: "",
    returnDate: "",
    flightClass: "",
    numPassengers: "",
  });
  const handleFlightDetailsSubmit = () => {
    const newErrors = {};
    let hasErrors = false;
    if (flightData.departureCity === "") {
      newErrors.departureCity = true;
      hasErrors = true;
    }
    if (flightData.destinationCity === "") {
      newErrors.destinationCity = true;
      hasErrors = true;
    }
    if (flightData.departureDate === "") {
      newErrors.departureDate = true;
      hasErrors = true;
    }
    if (flightData.returnDate === "") {
      newErrors.returnDate = true;
      hasErrors = true;
    }
    if (flightData.flightClass === "") {
      newErrors.flightClass = true;
      hasErrors = true;
    }
    if (flightData.numPassengers === "") {
      newErrors.numPassengers = true;
      hasErrors = true;
    }
    if (hasErrors) {
      setFlightDetailsErrors(newErrors);
    } else {
      // Submit the form data or perform other actions here
      console.log("Form submitted:", flightData);
      let newSkipped = skipped;

      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  return (
    <Box sx={{ marginTop: "30px" }}>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{ width: "70%", marginLeft: "230px" }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption" />;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box
            sx={{
              mt: 2,
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {activeStep === 0 ? (
              <PersonalInformation
                errors={errors}
                setErrors={setErrors}
                formData={formData}
                setFormData={setFormData}
                changeHandler={changeHandler}
              />
            ) : activeStep === 1 ? (
              <FlightDetails
                FlightDetailsErrors={FlightDetailsErrors}
                setFlightData={setFlightData}
                setFlightDetailsErrors={setFlightDetailsErrors}
                flightData={flightData}
                handleFlightDetailsSubmit={handleFlightDetailsSubmit}
              />
            ) : (
              <Confirmation
                flightData={flightData}
                formData={formData}
                onConfirm={onConfirm}
              />
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                pt: 2,
                width: "60vw",
              }}
            >
              {activeStep !== 2 && (
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
              )}
              <Box sx={{ flex: "1 1 auto" }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              {activeStep !== 2 && (
                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              )}
            </Box>
          </Box>
        </React.Fragment>
      )}
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{ fontFamily: "Work Sans" }}
        >
          <DialogTitle id="alert-dialog-title">
            {"Confirm Tickets?"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to confirm your flight reservation?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleClose();
                finalTicketConfirmationHandler();
              }}
              autoFocus
            >
              Yes
            </Button>
            <Button onClick={handleClose}>No</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Box>
  );
}
