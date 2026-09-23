import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IndexPage } from "./pages/Index";
import { ProgramsPage } from "./pages/Programs";
import { VolunteerPage } from "./pages/Volunteer";
import { ContactPage } from "./pages/Contact";
import { NewsPage } from "./pages/News";
import { ArticleDetailPage } from "./pages/ArticleDetail";
import { FAQPage } from "./pages/FAQ";
import { PrivacyPolicyPage } from "./pages/PrivacyPolicy";
import { TermsOfServicePage } from "./pages/TermsOfService";
import NotFound from "./pages/NotFound";

export function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white text-gray-900 selection:bg-[#ff5e00] selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<ArticleDetailPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
