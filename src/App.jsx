import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./i18n.jsx";

import Layout from "./Components/Layout/Layout.jsx";
import Home from "./Components/Home/HomeInfo.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import Slider from "./Components/Slider/Slider.jsx";
import AboutUs from "./Components/About/AboutUs.jsx";
import FeedbackPage from "./Components/Feedback/Feedback.jsx";
import Services from "./Components/Services/Services.jsx";
import OurClients from "./Components/Our Clients/OurClients.jsx";
import Projects from "./Components/Projects/Projects.jsx";
import InteriorDesign from "./Components/InteriorDesign/InteriorDesign.jsx";
import RealEstateServices from "./Components/RealStateServices/RealStateServices.jsx";
import PropertyManagement from "./Components/PropertyManagement/PropertyManagement.jsx";
import ConstructionDevelopment from "./Components/ConstructionDevelopment/ConstructionDevelopment.jsx";
import PrivacyPolicy from "./Components/Privacy-Policy/Privacy-Policy.jsx";
import TermsAndConditions from "./Components/Terms-Conditions/Terms-Conditions.jsx";
import NotFound from "./Components/NotFound/NotFound.jsx";
import ScrollToTop from "./ScrollTop.jsx";
import MainPage from "./Components/MazayaTowers/mainpage.jsx";
import AlSulaymaniahVilla from "./Components/AlSulaymaniahVilla/AlSulaymaniahVilla.jsx";
import ModernApartment from "./Components/3 Bedroom Modern Apart/ModernApartment.jsx";
import ModernNajdiApartment from "./Components/Modern Najdi Apartment/ModernNajdiApartment.jsx";
import SupplyingBuildingMaterials from "./Components/SUPPLYING BUILDING MATERIALS/SupplyingBuildingMaterials.jsx";
import BespokeSignature from "./Components/Bespoke Signature/BespokeSignature.jsx"

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Slider />
                <Home />
              </>
            }
          />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="OurClients" element={<OurClients />} />
          <Route path="projects" element={<Projects />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="services/real_estate_live" element={<RealEstateServices />} />
          <Route path="services/interior-design" element={<InteriorDesign />} />
          <Route path="services/property_and_facility_management" element={<PropertyManagement />} />
          <Route path="services/construction-development" element={<ConstructionDevelopment />} />
          <Route path="services/SUPPLYING_BUILDING_MATERIALS" element={<SupplyingBuildingMaterials />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-conditions" element={<TermsAndConditions />} />
          <Route path="projects/1" element={<MainPage />} />
          <Route path="projects/2" element={<AlSulaymaniahVilla />} />
          <Route path="projects/3" element={<ModernApartment />} />
          <Route path="projects/4" element={<ModernNajdiApartment />} />
          <Route path="projects/5" element={<BespokeSignature />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
