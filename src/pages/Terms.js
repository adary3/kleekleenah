import React from 'react';

export default function Terms() {
  return (
    <main style={{padding:'4rem 3rem',maxWidth:'680px',margin:'0 auto'}}>
      <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'2.5rem',marginBottom:'2rem'}}>Terms of Service</h1>
      <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.85rem',lineHeight:1.9,color:'var(--ink-dim)'}}>
        This is a basic template terms of service.<br /><br />
        By using this website you agree to the following terms and conditions.<br /><br />
        All content is provided for informational purposes only.<br /><br />
        Contact: Kleeon.rwanda28@outlook.com
      </p>
      <a href="/" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.75rem',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--gold)',textDecoration:'none'}}>← Home</a>
    </main>
  );
}