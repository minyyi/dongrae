// src/routes/router.js
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Info from "../pages/Info";
import Members from "../pages/Members";
import FaqPage from "../pages/FaqPage";
import ContactUs from "../pages/Contactus";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/info" element={<Info />} />
      <Route path="/members" element={<Members />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contactus" element={<ContactUs />} />
    </Routes>
  );
};

export default Router;
