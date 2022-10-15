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

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 300,
    margin: "100px auto",
  };
  const avatarStyle = {
    backgroundColor: "#1bbd7e",
  };

  const btstyle = {
    margin: "8px 0",
    color: "#FFFFFF",
    backgroundColor: "#12824C",
  };

  const preventDefault = (event) => event.preventDefault();

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
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
            control={<Checkbox name="checkedA" />}
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
            <Link href="#" onClick={preventDefault}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};
export default Login;
