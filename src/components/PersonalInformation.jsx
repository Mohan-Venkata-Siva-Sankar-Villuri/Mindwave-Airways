import { TextField, Grid, Box } from "@mui/material";

const PersonalInformation = ({ changeHandler, formData, errors }) => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "20px",
        maxWidth: "70vw",
        fontFamily: "Work Sans",
      }}
    >
      <form style={{ padding: "20px 15px 35px 20px" }}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={changeHandler}
              style={{ width: "250px" }}
              error={Boolean(errors.firstName)}
              helperText={errors.firstName}
              variant="standard"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={changeHandler}
              style={{ width: "250px" }}
              error={Boolean(errors.lastName)}
              helperText={errors.lastName}
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
              style={{ width: "250px" }}
              error={Boolean(errors.email)}
              helperText={errors.email}
              variant="standard"
            />
          </Grid>
          <Grid sx={{ marginTop: "20px" }} item xs={4}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={changeHandler}
              style={{ width: "250px" }}
              error={Boolean(errors.phoneNumber)}
              helperText={errors.phoneNumber}
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
