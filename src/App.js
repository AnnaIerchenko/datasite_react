import React from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import ContactRoute from "./routes/ContactRoute";
import FaqRoutes from "./routes/FaqRoutes";
import PricingRoute from "./routes/PricingRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/faq" element={<FaqRoutes />} />
        <Route path="/contact" element={<ContactRoute />} />
      </Routes>
    </>
  );
}

export default App;
 