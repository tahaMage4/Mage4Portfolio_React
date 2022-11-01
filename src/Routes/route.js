import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "../Compontent/About/about";
import BackendTeam from "../Compontent/Member/BackendTeam/BackendTeam";
import FrontendTeam from "../Compontent/Member/FrontendTeam/FrontendTeam";
import Member from "../Compontent/Member/Member";
import ServicesProvide from "../Compontent/Serrvices/Services";
import Test from "../Compontent/test";

import { AnimatePresence } from "framer-motion";

const Linkz = () => {
  const locationRoute = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={locationRoute} key={locationRoute.pathname}>
        <Route path="/" element={<ServicesProvide />} />
        <Route path="about" element={<About />} />
        <Route path="team" element={<Member />} />
        <Route path="team/backend" element={<BackendTeam />} />
        <Route path="team/frontend" element={<FrontendTeam />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Linkz;
