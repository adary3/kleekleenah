import React from 'react';
import { Link } from 'react-router-dom';

export function ThankYou() {
  return (
    <main style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem',textAlign:'center',position:'relative',overflow:'hidden'}}>
      <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:'600px',height:'400px',background:'radial-gradient(ellipse,rgba(212,175,114,0.06) 0%,transparent 70%)',pointerEvents:'none'}} />
      <div style={{fontSize:'2.5rem',marginBottom:'2rem'}}>✉</div>
      <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.28em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'1.5rem',opacity:.8}}>It's on its way</div>
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2.5rem,6vw,4.5rem)',fontWeight:900,lineHeight:1.1,marginBottom:'1.5rem'}}>
        Check your<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>inbox.</em>
      </h1>
      <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.75rem',color:'var(--ink-dim)',lineHeight:2,maxWidth:'400px',marginBottom:'2.5rem'}}>
        Your 9 posts are being generated right now.<br />
        You'll receive them in under 60 seconds.<br />
        Check your spam folder if it doesn't arrive.
      </p>
      <div style={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
        <Link to="/" className="btn-p">Back to KleeOnAI ↗</Link>
        <Link to="/free" className="btn-s">Get another pack</Link>
      </div>
      <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.52rem',color:'var(--ink-dim)',opacity:.4,marginTop:'2rem',letterSpacing:'.08em'}}>Built by KleeOnAI · kleeonai.com</div>
    </main>
  );
}

export function NotFound() {
  return (
    <main style={{minHeight:'100vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'2rem',textAlign:'center'}}>
      <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(6rem,20vw,12rem)',fontWeight:900,color:'transparent',WebkitTextStroke:'1px rgba(212,175,114,0.2)',lineHeight:1,marginBottom:'1rem'}}>404</div>
      <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.5rem,4vw,2.5rem)',fontWeight:700,marginBottom:'1rem'}}>
        This page doesn't exist.<br /><em style={{fontStyle:'italic',color:'var(--gold)'}}>You do.</em>
      </div>
      <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.7rem',letterSpacing:'.12em',color:'rgba(237,232,223,0.35)',marginBottom:'3rem',lineHeight:1.8}}>
        Whatever you were looking for isn't here.<br />But the rest is.
      </p>
      <Link to="/" className="btn-p">Back to KleeOnAI →</Link>
    </main>
  );
}

export default ThankYou;
