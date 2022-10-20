import "./App.css";
// import Login from "./components/Login/Login";
// import SignUp from "./components/SignUp/SignUp";
import SignInOutContainer from "./containers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <SignInOutContainer />
        <Footer/>
      </div>
    </>
  );
}

export default App;
