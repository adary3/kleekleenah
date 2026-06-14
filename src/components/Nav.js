import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const hireRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = e => { if (hireRef.current && !hireRef.current.contains(e.target)) setHireOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close hire dropdown on route change
  useEffect(() => { setHireOpen(false); }, [location]);

  const close = () => { setOpen(false); document.body.style.overflow = ''; };

  const toggle = () => {
    const next = !open;
    setOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  // Navigate to home then scroll to section
  const goToSection = (id) => {
    close();
    if (location.pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 350);
    }
  };

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />
      <nav>
        <Link to="/" className="nav-logo" onClick={close}>Klee<span>OnAI</span></Link>
        <ul className="nav-links">
          <li><button className="nav-text-btn" onClick={() => goToSection('about')}>Story</button></li>
          <li><NavLink to="/services" onClick={close}>Services</NavLink></li>
          <li><NavLink to="/work" onClick={close}>Work</NavLink></li>
          <li><button className="nav-text-btn" onClick={() => goToSection('books')}>Books</button></li>
          <li><NavLink to="/manifesto" onClick={close}>Manifesto</NavLink></li>
          <li style={{position:'relative'}} ref={hireRef}>
            <button
              className="nav-hire"
              onClick={() => setHireOpen(h => !h)}
            >Hire Me ↗</button>
            {hireOpen && (
              <div style={{position:'absolute',top:'calc(100% + .6rem)',right:0,background:'#0C0B12',border:'1px solid rgba(212,175,114,0.15)',minWidth:'190px',zIndex:1000,overflow:'hidden',boxShadow:'0 8px 32px rgba(0,0,0,0.4)'}}>
                <a
                  href="https://wa.me/250798695863?text=Hi%20Klee%2C%20I%27d%20like%20to%20hire%20you"
                  target="_blank" rel="noreferrer"
                  onClick={() => setHireOpen(false)}
                  style={{display:'flex',alignItems:'center',gap:'.8rem',padding:'1rem 1.2rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'.6rem',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none',borderBottom:'1px solid rgba(237,232,223,0.07)',transition:'all .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.color='var(--gold)';e.currentTarget.style.background='rgba(212,175,114,0.05)';}}
                  onMouseLeave={e=>{e.currentTarget.style.color='var(--ink-dim)';e.currentTarget.style.background='transparent';}}
                >💬&nbsp; WhatsApp</a>
                <a
                  href="mailto:hello@kleeonai.com?subject=Hire%20Enquiry"
                  onClick={() => setHireOpen(false)}
                  style={{display:'flex',alignItems:'center',gap:'.8rem',padding:'1rem 1.2rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'.6rem',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none',transition:'all .2s'}}
                  onMouseEnter={e=>{e.currentTarget.style.color='var(--gold)';e.currentTarget.style.background='rgba(212,175,114,0.05)';}}
                  onMouseLeave={e=>{e.currentTarget.style.color='var(--ink-dim)';e.currentTarget.style.background='transparent';}}
                >✉&nbsp; Email</a>
              </div>
            )}
          </li>
        </ul>
        <button className={`burger${open ? ' open' : ''}`} onClick={toggle} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <Link to="/" onClick={close}>Home</Link>
        <Link to="/services" onClick={close}>Services</Link>
        <Link to="/work" onClick={close}>Work</Link>
        <button className="mobile-menu-btn" onClick={() => goToSection('about')}>Story</button>
        <button className="mobile-menu-btn" onClick={() => goToSection('books')}>Books</button>
        <Link to="/manifesto" onClick={close}>Manifesto</Link>
        <div style={{display:'flex',flexDirection:'column',gap:'.8rem',alignItems:'center',marginTop:'.5rem'}}>
          <a href="https://wa.me/250798695863?text=Hi%20Klee%2C%20I%27d%20like%20to%20hire%20you" target="_blank" rel="noreferrer" className="m-hire" onClick={close}>WhatsApp Me ↗</a>
          <a href="mailto:hello@kleeonai.com?subject=Hire%20Enquiry" className="m-hire m-hire-outline" onClick={close}>Email Me ↗</a>
        </div>
      </div>
    </>
  );
}
