import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div>
            <div className="fb">Klee<span>OnAI</span></div>
            <p className="footer-tagline">"Gentlemen by day. Philosopher by night. Contrarian by necessity. Rebel by fate &amp; anarchist by choice."</p>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.5rem',color:'var(--ink-dim)',opacity:.35,letterSpacing:'.08em'}}>Last updated · June 2026</div>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Services</div>
            <Link to="/services#ai-web-apps">AI Web Apps</Link>
            <Link to="/services#automation">Automation</Link>
            <Link to="/services#websites">Websites</Link>
            <Link to="/services#landing-pages">Landing Pages</Link>
            <Link to="/services#chatbots">Chatbots &amp; APIs</Link>
            <Link to="/services#digital-products">Digital Products</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Navigate</div>
            <Link to="/">Home</Link>
            <Link to="/work">Work</Link>
            <Link to="/manifesto">Manifesto</Link>
            <Link to="/free">Free Pack</Link>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Connect</div>
            <a href="https://x.com/kleeonai" target="_blank" rel="noreferrer">X — @kleeonai</a>
            <a href="https://www.linkedin.com/in/abakar-ahmat-oumar-122b2a288/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.fiverr.com/kleeon_28" target="_blank" rel="noreferrer">Fiverr</a>
            <a href="https://selar.com/m/abakar-ahmat-oumar1" target="_blank" rel="noreferrer">Selar</a>
            <a href="https://wa.me/250798695863" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 KleeOnAI — All rights reserved.</span>
          <div className="footer-socials">
            <a href="https://x.com/kleeonai" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.linkedin.com/in/abakar-ahmat-oumar-122b2a288/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://selar.com/m/abakar-ahmat-oumar1" target="_blank" rel="noreferrer">Selar</a>
            <a href="https://wa.me/250798695863" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
