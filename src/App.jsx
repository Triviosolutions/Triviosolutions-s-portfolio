import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesIndexPage from './pages/ServicesIndexPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CaseStudyModal from './components/CaseStudyModal';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <Router>
      <div className="app-layout">
        <Header />
        
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={<HomePage setSelectedCaseStudy={setSelectedCaseStudy} />} 
            />
            <Route 
              path="/services" 
              element={<ServicesIndexPage />} 
            />
            <Route
              path="/services/:serviceId"
              element={<ServiceDetailPage setSelectedCaseStudy={setSelectedCaseStudy} />}
            />
            <Route
              path="/industries/:industryId"
              element={<IndustryDetailPage setSelectedCaseStudy={setSelectedCaseStudy} />}
            />
            <Route
              path="/case-studies"
              element={<CaseStudiesPage setSelectedCaseStudy={setSelectedCaseStudy} />} 
            />
            <Route 
              path="/case-studies/:id" 
              element={<CaseStudyDetailPage />} 
            />
            <Route 
              path="/about" 
              element={<AboutPage />} 
            />
            <Route 
              path="/contact" 
              element={<ContactPage />} 
            />
          </Routes>
        </main>

        <Footer />

        {selectedCaseStudy && (
          <CaseStudyModal
            caseStudy={selectedCaseStudy}
            onClose={() => setSelectedCaseStudy(null)}
          />
        )}

        <style>{`
          .app-layout {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          .main-content {
            flex: 1;
          }
        `}</style>
      </div>
    </Router>
  );
}
