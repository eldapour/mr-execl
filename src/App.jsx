import React from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ModelPage from './pages/ModelPage';
import ContactPage from './pages/ContactPage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router>
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<AboutPage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/model" element={<ModelPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </Layout>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default App;
