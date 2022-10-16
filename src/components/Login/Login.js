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
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = ({handleChange}) => {
  const paperStyle = {
    padding: 20,
    height: "85vh",
    width: 300,
    margin: "0 auto",
    backgroundColor: "#CBD6E5",
  };
  const avatarStyle = {
    backgroundColor: "#5B6BAA",
  };

  const btstyle = {
    margin: "8px 0",
    color: "#FFFFFF",
    backgroundColor: "#5B6BAA",
  };

  const checkBoxStyle = {
    // color: "#5B6BAA",
    color: "#AC2132",
  };

  const headingStyle = {
    color: "#3A396B",
    fontWeight: "bold",
  };
  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2 style={headingStyle}>Sign In</h2>
          </Grid>
          <form action="">
            <TextField
              id="standard-basic"
              variant="standard"
              label="username/email"
              placeholder="Enter username"
              fullWidth
              required
            />
            <TextField
              id="standard-basic"
              variant="standard"
              label="Password"
              placeholder="Enter Password"
              fullWidth
              required
              type="password"
            />
            <FormControlLabel
              control={<Checkbox name="checkedA" style={checkBoxStyle} />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              style={btstyle}
            >
              Sign In
            </Button>
            <Typography>
              <Link href="#" onClick={preventDefault}>
                Forgot Password ?
              </Link>
            </Typography>
            <Typography>
              Do you have an account ?
              <Link href="#" onClick={()=>handleChange("event",1)}>
                Sign Up
              </Link>
            </Typography>
          </form>
        </Paper>
      </Grid>
    </>
  );
};
export default Login;
