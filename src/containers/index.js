import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import img from "./Login.jpg";
import Style from "./Index.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const SignInOutContainer = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const paperStyle = {
    width: 300,
    margin: "20px auto",
  };
  const tabStyle = {
    color: "#3A396B",
    fontWeight: "bold",
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className={Style.imageDiv}>
              <img src={img} className={Style.image} alt="Login" />
            </div>
          </div>
          <div className="col-md-6">
            <Paper elevation={20} style={paperStyle}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="disabled tabs example"
                centered
                TabIndicatorProps={{
                  sx: {
                    backgroundColor: "#AC2132",
                    height: 4,
                  },
                }}
                sx={{
                  "& button": { borderRadius: 4 },
                  "& button:hover": {
                    backgroundColor: "#CBD6E5",
                    color: "#AC2132",
                  },
                  "& button:active": { backgroundColor: "#5B6BAA" },
                  // "& button.Mui-selected": { backgroundColor: "#5B6BAA" },
                }}
              >
                <Tab label="Sign In" style={tabStyle} />
                <Tab label="Sign Up" style={tabStyle} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <Login handleChange={handleChange} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <SignUp />
              </TabPanel>
            </Paper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default SignInOutContainer;
