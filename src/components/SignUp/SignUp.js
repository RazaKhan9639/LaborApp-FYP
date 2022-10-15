import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Typography,
  Link,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "95vh",
    width: 300,
    margin: "50px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const btstyle = {
    margin: "8px 0",
    color: "#FFFFFF",
    backgroundColor: "#12824C",
  };
  const radioStyle = {
    color: "#12824C",
  };
  const formControlStyle = {
    marginTop: 5,
  };
  const checkBoxStyle = {
    paddingTop: 10,
  };

  const preventDefault = (event) => event.preventDefault();
  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account!!
            </Typography>
          </Grid>
          <form action="">
            <TextField
              id="standard-basic"
              variant="standard"
              label="Full Name"
              placeholder="Enter Your Full Name"
              fullWidth
              required
              type="text"
            />
            <TextField
              id="standard-basic"
              variant="standard"
              label="Email"
              placeholder="Enter Your Email"
              fullWidth
              required
              type="email"
            />
            <FormControl style={formControlStyle}>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
                style={{ display: "initial" }}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio style={radioStyle} />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio style={radioStyle} />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>

            <TextField
              id="standard-basic"
              variant="standard"
              label="Phone Number"
              placeholder="Enter Your Phone Number"
              fullWidth
              required
              type="number"
            />
            <TextField
              id="standard-basic"
              variant="standard"
              label="Password"
              placeholder="Enter Your Password"
              fullWidth
              required
              type="password"
            />
            <TextField
              id="standard-basic"
              variant="standard"
              label="Confirm Password"
              placeholder="Confirm Your Password"
              fullWidth
              required
              type="password"
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" style={radioStyle} />}
              label="I accept the terms and conditions."
              style={checkBoxStyle}
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btstyle}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
export default SignUp;
