import React, { useState } from "react";
import { TextField, Button, Grid, Card, Box } from "@mui/material";

const PersonalInformation = ({
  changeHandler,
  formData,
  errors,
  setFormData,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        width: "60vw",
      }}
    >
      <form>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              required
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
              required
              variant="standard"
            />
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={4}>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={changeHandler}
              error={Boolean(errors.email)}
              helperText={errors.email}
              required
              variant="standard"
            />
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={4}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber}
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

export default PersonalInformation;
