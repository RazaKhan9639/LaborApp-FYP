import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import SignInOutContainer from "./containers";
import HomeFirstSection from "./components/HomePage/HomePage1/HomeFirstSection";
function App() {
  return (
    <>
      <div className="App">
        {/* <SignInOutContainer />
        <HomeFirstSection /> */}
        <Router>
          <Routes>
            <Route path="/" element={<SignInOutContainer />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/home" element={<HomeFirstSection />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
