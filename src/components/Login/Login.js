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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "88vh",
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
  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const onSubmit = (value, props) => {
    console.log(value);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 3000);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });

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
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="UserName/email"
                  placeholder="Enter username"
                  name="email"
                  fullWidth
                  required
                  helperText={<ErrorMessage name="email" />}
                />
                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="Password"
                  placeholder="Enter Password"
                  name="password"
                  fullWidth
                  required
                  type="password"
                  helperText={<ErrorMessage name="password" />}
                />
                <Field
                  as={FormControlLabel}
                  control={<Checkbox style={checkBoxStyle} />}
                  label="Remember me"
                  name="remember"
                />
                <Button
                  type="submit"
                  color="primary"
                  fullWidth
                  variant="contained"
                  style={btstyle}
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Sign In"}
                </Button>
              </Form>
            )}
          </Formik>
          <Typography>
            <Link href="#" onClick={preventDefault}>
              Forgot Password ?
            </Link>
          </Typography>
          <Typography>
            Do you have an account ?
            <Link href="#" onClick={() => handleChange("event", 1)}>
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
};
export default Login;
