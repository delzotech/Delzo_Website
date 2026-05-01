import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home.tsx";
import { OurWork } from "./pages/OurWork.tsx";
import { Team } from "./pages/Team.tsx";
import { Collab } from "./pages/Collab.tsx";
import { ServiceDetail } from "./pages/ServiceDetail.tsx";
import FAQ from "./pages/FAQ.tsx";
import ScrollToTop from "./components/layout/ScrollToTop.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-work" element={<OurWork />} />
      <Route path="/team" element={<Team />} />
      <Route path="/collab" element={<Collab />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/services/:serviceId" element={<ServiceDetail />} />
    </Routes>
  </BrowserRouter>
);
