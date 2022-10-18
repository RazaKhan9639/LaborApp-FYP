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
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FormHelperText } from "@mui/material";

const SignUp = () => {
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
  const radioStyle = {
    // color: "#5B6BAA",
    color: "#AC2132",
  };
  const formControlStyle = {
    marginTop: 5,
  };
  const checkBoxStyle = {
    paddingTop: 10,
    fontSize: 14,
  };

  const headingStyle = {
    color: "#3A396B",
    fontWeight: "bold",
  };

  const initialValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const onSubmit = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 3000);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too Short").required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    phoneNumber: Yup.number()
      .typeError("Enter Valid Phone Number")
      .required("Required"),
    gender: Yup.string()
      .oneOf(["male", "female"], "Required")
      .required("Required"),
    password: Yup.string()
      .min(8, "Password minimum Length should be 8")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Password Not Matched")
      .required("Required"),
    termsAndConditions: Yup.string().oneOf(
      ["true"],
      "Accept Terms & Conditions"
    ),
  });

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
                  name="phoneNumber"
                  helperText={<ErrorMessage name="phoneNumber" />}
                  type="text"
                />
                <FormControl style={formControlStyle}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <Field
                    as={RadioGroup}
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="male"
                    // name="radio-buttons-group"
                    name="gender"
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
                  </Field>
                </FormControl>
                <FormHelperText>
                  <ErrorMessage name="gender" />
                </FormHelperText>
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
                <Field
                  as={TextField}
                  id="standard-basic"
                  variant="standard"
                  label="Confirm Password"
                  name="confirmPassword"
                  helperText={<ErrorMessage name="confirmPassword" />}
                  placeholder="Confirm Your Password"
                  fullWidth
                  required
                  type="password"
                />
                <FormControlLabel
                  control={
                    <Field
                      as={Checkbox}
                      name="termsAndConditions"
                      style={radioStyle}
                    />
                  }
                  label="Accept Term and Conditions."
                  style={checkBoxStyle}
                />
                <FormHelperText>
                  <ErrorMessage name="termsAndConditions" />
                </FormHelperText>
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
