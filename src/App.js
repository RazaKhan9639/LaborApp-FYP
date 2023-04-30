import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import SignInOutContainer from "./containers";
import FAQS from "./components/FAQS/FAQS";

import Contact from "./components/ContactUs/Contact";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/HomePage/Home";
import About from "./components/AboutUS/About";
import FAQSData from "./components/FAQS/FAQSData";
import Categories from "./components/Categories/Categories";
import CarServices from "./components/Categories/CarServices";
import PlumbingServices from "./components/Categories/PlumbingServices";
import PestControlServices from "./components/Categories/PestControlServices";
import HomeAppliance from "./components/Categories/HomeApplianceServices";
import Handyman from "./components/Categories/Handyman";
import HomeCleaning from "./components/Categories/Cleaning";
import Geyser from "./components/Categories/GeyserServices";
import Electrician from "./components/Categories/ElectricianServices";
import Carpenter from "./components/Categories/CarpenterServices";
import CarDetailing from "./components/Categories/CarDetailing";
import PainterServices from "./components/Categories/PainterServices";
import GoToTop from "./components/TopButton/GoToTop";
import ServiceProvider from "./Pages/User/ServiceProvider";

import UserContextProvider from "./context/UserContext";
import ServiceCategoriesPage from "./components/service_Categories_Page/ServiceCategoriesPage";
import ProgressBar from "./components/User_Task_Progress_Bar/ProgressBar";
import LaborProfile from "./components/LabourProfilePage/LaborProfile";
import OrdersComponent from "./components/Orders/Orders";

function App() {
  return (
    <>
      <div className="App">
        <UserContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<SignInOutContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<h1>404 Not Found</h1>} />
              <Route path="/home" element={<Home />} />

              <Route path="/faqs" element={<FAQS data={FAQSData} />} />
              <Route path="/about" element={<About />} />

              <Route path="/contact" element={<Contact />} />
              <Route path="/ACcategories" element={<Categories />} />
              <Route path="/carservices" element={<CarServices />} />
              <Route path="/plumbing" element={<PlumbingServices />} />
              <Route path="/pestcontrol" element={<PestControlServices />} />
              <Route path="/homeappliance" element={<HomeAppliance />} />
              <Route path="/handyman" element={<Handyman />} />
              <Route path="/homecleaning" element={<HomeCleaning />} />
              <Route path="/geyser" element={<Geyser />} />
              <Route path="/electrician" element={<Electrician />} />
              <Route path="/carpenter" element={<Carpenter />} />
              <Route path="/cardetailing" element={<CarDetailing />} />
              <Route path="/painting" element={<PainterServices />} />
              <Route path="/serviceprovider" element={<ServiceProvider />} />

              <Route path="/progressBar" element={<ProgressBar />} />
              <Route
                path="/cardetailing/:id"
                element={<ServiceCategoriesPage />}
              />
              <Route
                path="/progressBar/laborProfile"
                element={<LaborProfile />}
              />
              <Route path="/orders" element={<OrdersComponent/>}/>
              
            </Routes>

            <GoToTop />
            <Footer />
          </Router>
        </UserContextProvider>
      </div>
    </>
  );
}

export default App;
