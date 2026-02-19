import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ModelPage from './pages/ModelPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import StepsCrmPage from './pages/StepsCrmPage';
import OdooErpPage from './pages/OdooErpPage';
import GoogleInfrastructurePage from './pages/GoogleInfrastructurePage';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <ScrollToTop />
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/model" element={<ModelPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                            <Route path="/steps-crm" element={<StepsCrmPage />} />
                            <Route path="/odoo-erp" element={<OdooErpPage />} />
                            <Route path="/google-infrastructure" element={<GoogleInfrastructurePage />} />
                        </Routes>
                    </Layout>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
