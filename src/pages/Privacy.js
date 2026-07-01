import React from 'react';

export default function Privacy() {
  return (
    <main style={{padding:'4rem 3rem',maxWidth:'680px',margin:'0 auto'}}>
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'2.5rem',marginBottom:'2rem'}}>Privacy Policy</h1>
      <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.85rem',lineHeight:1.9,color:'var(--ink-dim)'}}>
        This is a basic template privacy policy.<br /><br />
        Netlify Identity is used for user authentication. For details on how Netlify handles your data, see Netlify's privacy policy.<br /><br />
        We collect no data beyond what Netlify Identity requires for login.<br /><br />
        Contact: Kleeon.rwanda28@outlook.com
      </p>
      <a href="/" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.75rem',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--gold)',textDecoration:'none'}}>← Home</a>
    </main>
  );
}