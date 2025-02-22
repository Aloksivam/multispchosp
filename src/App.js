import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Services } from "./Services";
import { Department } from "./Department";
import WebinarList from './WebinarList'
import Inquiry from "./components/department/Inquiry";
import { TopHeader } from "./Shared/TopHeader";
import { MenuHeader } from "./Shared/MenuHeader";
import { NewsLetter } from "./Shared/NewsLetter";
import { Footer } from "./Shared/Footer";

import BloodCentre from "./Bloodcentre";
import Banking from "./Banking";
import Equipment from "./equipment";
import Anesthesiology from "./components/department/Anesthesiology";
import Orthopaedics from "./components/department/Orthopaedics";
import Radiologylab from "./components/department/Radiologylab";
import { GeneralMedicine } from "./components/department/GeneralMedicine";
import { Cardiology } from "./components/department/Cardiology";
import { Anatomy } from "./components/department/Anatomy";
import { Surgical } from "./components/department/Surgical";
import { Nephrology } from "./components/department/Nephrology";
import Endocrinology from "./components/department/Endocrinology";
import { Dermatology } from "./components/department/Dermatology";
import Pathology from "./components/department/Pathology";
import Dental from "./components/department/Dental";
import { Paediatrics } from "./components/department/Paediatrics";
import RadioDiagnosis from "./components/department/RadioDiagnosis";
import { Physiology } from "./components/department/Physiology";
import Activities from "./Activities";
import { Dischargeinfo } from "./Dischargeinfo";
import Laboratory from "./components/department/laboratory/Laboratory";
// import Login from "./Shared/Login";
import LLogin from "./Shared/LLogin";
import { Login } from "./Shared/Login";
import Register from "./Shared/Register";
import DataApp from "./DataContext";
import Research from "./Research";
import GuestHouse from "./GuestHouse";
import Helpdesk from "./components/department/Helpdesk";
import Members from "./Members";
import Dietician from "./Dietician";
import Academics from "./Academics";
import AlumniCell from "./alumnicell";
import FoodSupply from "./FoodSupply";
import Ambulance from "./Ambulance";
import {Journal} from "./Journal";

import Advisory from "./components/Advisory";
// import { Journal } from "./Journal";
import Management from "./Management";
import MOA from "./MOA";
import EmergencyWard from "./EmergencyWard";
import Medicine from "./Medicine";
import Policies from "./Policies";
import Career from "./Career";
import Nursing from "./Nursing";
import Gnm from "./GNM";
import Faculty from "./Faculty"
import { WebinarsRecords } from "./WebinarsRecords";

function App() {
  const clientId = "585142969269-s4gkicllq3vbjgje3s6esgk6qrm5nldd.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <DataApp>
          <TopHeader />
          <MenuHeader />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/department" element={<Department />} />
            <Route path="/anesthesiology" element={<Anesthesiology />} />
            <Route path="/orthopaedics" element={<Orthopaedics />} />
            <Route path="/department/general-medicine" element={<GeneralMedicine />} />
            <Route path="/department/cardiology" element={<Cardiology />} />
            <Route path="/anatomy" element={<Anatomy />} />
            <Route path="/department/surgical" element={<Surgical />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/radiologylab" element={<Radiologylab />} />
            <Route path="/banking" element={<Banking />} />
            <Route path="/nephrology" element={<Nephrology />} />
            <Route path="/bloodcentre" element={<BloodCentre />} />
            <Route path="/department/dermatology" element={<Dermatology />} />
            <Route path="/department/physiology" element={<Physiology />} />
            <Route path="/department/research" element={<Research />} />
            <Route path="/endo" element={<Endocrinology />} />
            <Route path="/dental" element={<Dental />} />
            <Route path="/pathology" element={<Pathology />} />
            <Route path="/paediatrics" element={<Paediatrics />} />
            <Route path="/radiodiagnosis" element={<RadioDiagnosis />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/dischargeinfo" element={<Dischargeinfo />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/alumnicell" element={<AlumniCell />} />
            <Route path="/foodsupply" element={<FoodSupply />} />
            <Route path="/laboratory" element={<Laboratory />} />
            <Route path="/login" element={<Login />} />
            <Route path="/llogin" element={<LLogin />} />
            <Route path="/guesthouse" element={<GuestHouse />} />
            <Route path="/register" element={<Register />} />
            <Route path="/inquiry" element={<Inquiry />} />
            <Route path="/help" element={<Helpdesk />} />
            <Route path="/ambulance" element={<Ambulance />} />
            <Route path="/members" element={<Members />} />
            <Route path="/dietician" element={<Dietician />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/webinar" element={<WebinarList webinars={WebinarsRecords} />} />
            <Route path="/management" element={<Management />} />
            <Route path="/moa" element={<MOA />} />
            <Route path="/emergencyward" element={<EmergencyWard />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/career" element={<Career />} />
            <Route path="/gnm" element={<Gnm />} />
            <Route path="/nursing" element={<Nursing />} />
            <Route path="/Faculty" element={<Faculty />} />
          </Routes>
          <NewsLetter />
          <Footer />
        </DataApp>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}
// const styles = {
//   container: {
//     maxWidth: '800px',
//     margin: '0 auto',
//     padding: '20px',
//   },
// };

export default App;