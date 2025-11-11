// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudienceProvider } from "./context/AudienceContext.jsx";

import AudienceChoice from "./pages/AudienceChoice.jsx";
import Layout from "./components/Layout.jsx";
import WhatIsCongestion from "./pages/WhatIsCongestion.jsx";
import FAQ from "./pages/FAQ.jsx";
import HowItWorks from "./pages/How_OurGrid_works.jsx";
import Dashboards from "./pages/Dashboard.jsx";
import Privacy from "./pages/Privacy_policy.jsx";
import Landing from "./pages/Landing.jsx";

export default function App() {
  return (
    <AudienceProvider>
      <BrowserRouter>
        <Routes>
          {/* Step 1: choose audience */}
          <Route path="/" element={<AudienceChoice />} />

          {/* Resident */}
          <Route path="/u" element={<Layout />}>
            {/* Step 2: audience-specific landing */}
            <Route index element={<Landing />} />
            <Route
              path="what-is-grid-congestion"
              element={<WhatIsCongestion />}
            />
            <Route path="how-ourgrid-works" element={<HowItWorks />} />
            <Route path="dashboards" element={<Dashboards />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy-policy" element={<Privacy />} />
          </Route>

          {/* Municipality */}
          <Route path="/m" element={<Layout />}>
            {/* Step 2: audience-specific landing */}
            <Route index element={<Landing />} />
            <Route
              path="what-is-grid-congestion"
              element={<WhatIsCongestion />}
            />
            <Route path="how-ourgrid-works" element={<HowItWorks />} />
            <Route path="dashboards" element={<Dashboards />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="privacy-policy" element={<Privacy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AudienceProvider>
  );
}
