import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import Manifesto from './pages/Manifesto';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Free from './pages/Free';
import Demo from './pages/Demo';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  const { pathname } = useLocation();
  const noFooter = ['/demo'];
  const noNav = ['/demo'];
  return (
    <>
      <ScrollTop />
      {!noNav.includes(pathname) && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/free" element={<Free />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!noFooter.includes(pathname) && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
