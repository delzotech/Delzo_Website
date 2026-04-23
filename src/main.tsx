  import { createRoot } from "react-dom/client";
  import { BrowserRouter, Routes, Route } from "react-router";
  import App from "./app/App.tsx";
  import { OurWork } from "./app/OurWork.tsx";
  import ScrollToTop from "./app/components/ScrollToTop.tsx";
  import "./styles/index.css";

  createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </BrowserRouter>
  );
