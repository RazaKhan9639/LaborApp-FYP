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
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const paperStyle = {
    padding: 20,
    height: "95vh",
    width: 300,
    margin: "0 auto",
    backgroundColor: "#CBD6E5",
    position: "relative",
  };
  const avatarStyle = {
    backgroundColor: "#5B6BAA",
  };

  const btstyle = {
    margin: "8px 0",
    color: "#FFFFFF",
    backgroundColor: "#5B6BAA",
  };

  const headingStyle = {
    color: "#3A396B",
    fontWeight: "bold",
  };

  const initialValues = {
    name: "",
    username: "",
    email: "",
    number: "",
    password: "",
  };

  // const onSubmit = (values, props) => {
  //   console.log(values);
  //   console.log(props);
  //   setTimeout(() => {
  //     props.resetForm();
  //     props.setSubmitting(false);
  //   }, 3000);
  // };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too Short").required("Required"),
    username: Yup.string().min(3, "It's too Short").required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    number: Yup.string()
      .typeError("Enter Valid Phone Number")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum Length should be 8")
      .required("Required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      // Make the API call
      const response = await axios.post(
        "http://localhost:8000/register/user",
        values
      );

      console.log(response.data);

      setSubmitting(false);

      // Redirect to the desired page, e.g., login page

      navigate("/");

      alert("You have successfully registered");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Grid>
        <Paper style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineOutlinedIcon />
            </Avatar>
            <h2 style={headingStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account!!
            </Typography>
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
                  label="Full Name"
                  placeholder="Enter Your Full Name"
                  fullWidth
                  required
                  name="name"
                  helperText={<ErrorMessage name="name" />}
                  type="text"
                />
                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="UserName"
                  name="username"
                  placeholder="Enter Your username"
                  helperText={<ErrorMessage name="username" />}
                  fullWidth
                  required
                  type="text"
                />

                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="Email"
                  name="email"
                  placeholder="Enter Your Email"
                  helperText={<ErrorMessage name="email" />}
                  fullWidth
                  required
                  type="email"
                />

                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="Phone Number"
                  placeholder="Enter Your Phone Number"
                  fullWidth
                  required
                  name="number"
                  helperText={<ErrorMessage name="number" />}
                  type="text"
                />

                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="Password"
                  placeholder="Enter Your Password"
                  name="password"
                  helperText={<ErrorMessage name="password" />}
                  fullWidth
                  required
                  type="password"
                />

                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  style={btstyle}
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Sign Up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};
export default SignUp;
