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

function useProtection() {
  useEffect(() => {
    const showAlert = () => {
      const el = document.createElement('div');
      el.innerHTML = `
        <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
          background:#0A0A0A;border:1px solid #C9A84C;
          padding:1.5rem 2rem;z-index:99999;text-align:center;
          font-family:'JetBrains Mono',monospace;max-width:320px;
          box-shadow:0 8px 40px rgba(201,168,76,0.3);">
          <div style="font-size:1.2rem;margin-bottom:.6rem;">⚠</div>
          <div style="color:#C9A84C;font-size:.6rem;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.5rem;">CONTENT PROTECTED</div>
          <div style="color:#C9A84C;font-size:.58rem;letter-spacing:.08em;line-height:1.8;">KleeOnAI. All rights reserved.</div>
        </div>
        <div style="position:fixed;inset:0;z-index:99998;background:rgba(0,0,0,0.7)" id="klee-overlay"></div>
      `;
      el.id = 'klee-protect-modal';
      document.body.appendChild(el);
      const dismiss = () => { el.remove(); };
      el.querySelector('#klee-overlay').addEventListener('click', dismiss);
      setTimeout(dismiss, 3000);
    };

    const onContext = e => { e.preventDefault(); showAlert(); };
    const onKey = e => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
        (e.ctrlKey && ['U','S','P'].includes(e.key.toUpperCase()))
      ) { e.preventDefault(); showAlert(); }
    };

    document.addEventListener('contextmenu', onContext);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('contextmenu', onContext);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  useProtection();
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