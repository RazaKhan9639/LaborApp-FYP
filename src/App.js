import "./App.css";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/SignUp";
import SignInOutContainer from "./containers";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import HomeFirstSection from "./components/HomePage/HomePage1/HomeFirstSection";

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <SignInOutContainer />

        <Footer/>

        {/* <HomeFirstSection /> */}

      </div>
    </>
  );
}

export default App;
