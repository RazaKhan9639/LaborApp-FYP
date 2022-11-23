import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import SignInOutContainer from "./containers";
import Contact from "./components/ContactUs/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<SignInOutContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/home" element={<Home />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
