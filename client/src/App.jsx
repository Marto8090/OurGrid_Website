import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AudienceProvider } from "./context/AudienceContext.jsx";

import AudienceChoice from "./pages/AudienceChoice.jsx";
import Layout from "./components/Layout.jsx";
import WhatIsCongestion from "./pages/WhatIsCongestion.jsx";
import FAQ from "./pages/FAQ.jsx";

export default function App() {
  return (
    <AudienceProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AudienceChoice />} />

          {/* Resident */}
          <Route path="/u" element={<Layout />}>
            <Route index element={<Navigate to="what-is-grid-congestion" replace />} />
            <Route path="what-is-grid-congestion" element={<WhatIsCongestion />} />
            <Route path="faq" element={<FAQ />} />
          </Route>

          {/* Municipality */}
          <Route path="/m" element={<Layout />}>
            <Route index element={<Navigate to="what-is-grid-congestion" replace />} />
            <Route path="what-is-grid-congestion" element={<WhatIsCongestion />} />
            <Route path="faq" element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AudienceProvider>
  );
}
