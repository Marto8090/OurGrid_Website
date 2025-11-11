import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AudienceProvider } from "./context/AudienceContext.jsx";

import AudienceChoice from "./pages/AudienceChoice.jsx";
import CityChoice from "./pages/CityChoice.jsx";
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

          {/* Resident flow */}
          <Route path="/u" element={<Layout />}>
            {/* Step 2 for residents: choose city */}
            <Route path="city" element={<CityChoice />} />
            {/* Step 3: resident landing */}
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

          {/* Municipality flow */}
          <Route path="/m" element={<Layout />}>
            {/* Step 2 for municipalities: choose city */}
            <Route path="city" element={<CityChoice />} />
            {/* Step 3: municipality landing */}
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
