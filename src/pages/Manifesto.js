import React, { useEffect } from 'react';

const beliefs = [
  { n:'01', text:'The classroom teaches you to pass. The market teaches you to build. Nobody told us these were different subjects.' },
  { n:'02', text:'Experience isn\'t given. It\'s manufactured — deliberately, obsessively, before anyone thinks you\'re ready.' },
  { n:'03', text:'Africa doesn\'t catch up. It leaps. The infrastructure gap is an advantage — we skip the broken steps entirely.' },
  { n:'04', text:'AI is not the threat. Waiting to understand AI before using it — that\'s the threat.' },
  { n:'05', text:'Ship it or kill it. There is no third option. "In progress forever" is just failure with better branding.' },
  { n:'06', text:'Equanimity is not peace. It\'s the ability to build through chaos without needing the chaos to stop first.' },
  { n:'07', text:'Be first and foremost a person of value. The network, the clients, the wins — they follow eventually.' },
  { n:'08', text:'Africa is overflowing with such wealth it can barely contain itself and periodically showers people with money to prune its excess.' },
  { n:'09', text:'"The hottest new programming language is English." — Andrej Karpathy' },
  { n:'10', text:'What stands in the way becomes the way.' },
  { n:'11', text:'Not wanting something is as good as having it.' },
];

function tweet(text) {
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + text + '" — @kleeonai\n\nkleeonai.com/manifesto')}`, '_blank');
}

export default function Manifesto() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      els => els.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(r => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <main>
      {/* HERO — exact from manifesto.html */}
      <section className="manifesto-hero">
        <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',color:'var(--gold)',letterSpacing:'.28em',textTransform:'uppercase',marginBottom:'2.5rem',opacity:0,animation:'fadeUp 1s .3s forwards'}}>A manifesto by Klee</div>
        <h1 className="hero-line" style={{opacity:0,animation:'fadeUp 1s .6s forwards'}}>Life is lived</h1>
        <h1 className="hero-line" style={{opacity:0,animation:'fadeUp 1s .9s forwards'}}>in the arena.</h1>
        <h1 className="hero-line gold" style={{opacity:0,animation:'fadeUp 1s 1.2s forwards'}}>You only learn by doing.</h1>
        <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',color:'var(--ink-dim)',marginTop:'2rem',letterSpacing:'.1em',opacity:0,animation:'fadeUp 1s 1.5s forwards'}}>kleeonai.com · est. 2024</p>
        <div style={{position:'absolute',bottom:'2rem',left:'50%',transform:'translateX(-50%)',fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',color:'var(--ink-dim)',letterSpacing:'.1em',animation:'manifestoPulse 2s infinite'}}>scroll ↓</div>
      </section>

      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px);}to{opacity:1;transform:translateY(0);}}
        @keyframes manifestoPulse{0%,100%{opacity:.3;}50%{opacity:1;}}
        .reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease;}
        .reveal.visible{opacity:1;transform:translateY(0);}
      `}</style>

      <div className="manifesto-divider reveal" />

      {/* WHO */}
      <section className="manifesto-content">
        <div className="sl reveal">001 · Who</div>
        <h2 className="manifesto-big reveal">Goes by <em>Klee.</em></h2>
        <p className="manifesto-body reveal">Autodidact. Curiosity-driven. Obsessive by nature.</p>
        <p className="manifesto-body reveal">The only credential I ever trusted was shipping something.</p>
      </section>

      <div className="manifesto-divider reveal" />

      {/* WHY */}
      <section className="manifesto-content">
        <div className="sl reveal">002 · Why</div>
        <h2 className="manifesto-big reveal">Africa doesn't need<br />more spectators.<br />It needs <em>builders.</em></h2>
        <p className="manifesto-body reveal">The tools exist. The internet exists. The knowledge exists. What's missing is the courage to use them without waiting for a certificate, a salary, or someone else's validation.</p>
        <p className="manifesto-body reveal"><strong style={{color:'var(--ink)'}}>Everything I build is free until it can't be.</strong> Because the version of me that needed this couldn't afford to pay for it.</p>
      </section>

      <div className="manifesto-divider reveal" />

      {/* BELIEFS */}
      <section style={{maxWidth:'680px',margin:'0 auto',padding:'6rem 2rem'}}>
        <div className="sl reveal">003 · Background Thoughts</div>
        <h2 className="manifesto-big reveal" style={{marginBottom:'2rem'}}>Things I keep<br />coming back <em>to.</em></h2>
        {beliefs.map(b => (
          <div key={b.n} className="belief reveal" onClick={() => tweet(b.text)}>
            <div className="belief-num">{b.n}</div>
            <div className="belief-text">{b.text}</div>
            <button className="tweet-btn">tweet ↗</button>
          </div>
        ))}
      </section>

      <div className="manifesto-divider reveal" />

      {/* WORK LINK */}
      <section style={{maxWidth:'680px',margin:'0 auto',padding:'5rem 2rem'}}>
        <a href="/work" style={{border:'.5px solid var(--border-dim)',padding:'2.5rem',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'2rem',transition:'border-color .2s',textDecoration:'none'}}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-dim)'}
          className="reveal"
        >
          <div>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'.8rem',opacity:.7}}>004 · The Work</div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.4rem,3vw,2rem)',color:'var(--ink)',lineHeight:1.2}}>Not a portfolio.<br />A <em style={{color:'var(--gold)',fontStyle:'italic'}}>record of obsessions.</em></div>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',color:'var(--ink-dim)',marginTop:'.8rem',lineHeight:1.7}}>Tools, sites, automations — built because they didn't exist.<br />Every project has a reason. Most started as a personal problem.</div>
          </div>
          <div style={{fontFamily:"'Playfair Display',serif",fontSize:'2rem',color:'var(--gold)',opacity:.4,flexShrink:0}}>→</div>
        </a>
      </section>

      <div className="manifesto-divider reveal" />

      {/* BOOKS */}
      <section style={{maxWidth:'680px',margin:'0 auto',padding:'6rem 2rem'}}>
        <div className="sl reveal">005 · The Books</div>
        <h2 className="manifesto-big reveal">Books I wrote<br /><em>for myself.</em></h2>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',marginTop:'2.5rem'}}>
          {[
            { tag:'Career · AI', title:'AI Beyond the Exam', desc:'Using AI to build careers, not just pass exams. The alternative nobody wrote. For the ones the exam never tested.', cta:'Get it →', href:'https://selar.com/m/abakar-ahmat-oumar1' },
            { tag:'Mindset · Resilience', title:'Equanimity', desc:'Not a tools list. A book about how to think — then how to build.', cta:'Get it →', href:'https://selar.com/m/abakar-ahmat-oumar1' },
            { tag:'Prompting · Workflows', title:'The African AI Playbook', desc:'The tools are already here. I needed to actually use them — not just know they exist.', cta:'Get it →', href:'https://selar.com/m/abakar-ahmat-oumar1' },
            { tag:'Book IV · 33 Dispatches · 2026', title:'Whispers of Mirth', desc:"You were never the point. It's not for you. Read it anyway.", cta:null, special:true },
            { tag:'Automation · 2026', title:'Too Lazy Too Bored to Post', desc:'The daily automation system I built so I never have to think about content again.', cta:'Get it →', href:'https://selar.com/m/abakar-ahmat-oumar1' },
          ].map(b => (
            <div key={b.title} className="reveal" style={{background:'var(--surface)',border:'.5px solid var(--border-dim)',padding:'1.5rem',transition:'border-color .2s'}}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border-dim)'}
            >
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',color:'var(--gold)',letterSpacing:'.1em',textTransform:'uppercase',marginBottom:'.8rem',opacity:.7}}>{b.tag}</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.1rem',color:'var(--ink)',marginBottom:'.6rem',lineHeight:1.3}}>{b.title}</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',color:'var(--ink-dim)',lineHeight:1.8,marginBottom:'1rem'}}>{b.desc}</div>
              {b.special
                ? <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.6rem',color:'var(--gold)'}}>Order via <a href="mailto:hello@kleeonai.com" style={{color:'var(--gold)',textDecoration:'none'}}>email</a> or <a href="https://wa.me/250798695863" target="_blank" rel="noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>WhatsApp</a></span>
                : <a href={b.href} target="_blank" rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.6rem',color:'var(--gold)',textDecoration:'none',letterSpacing:'.08em'}}>{b.cta}</a>
              }
            </div>
          ))}
        </div>
      </section>

      <div className="manifesto-divider reveal" />

      {/* CLOSING — exact */}
      <section style={{maxWidth:'680px',margin:'0 auto',padding:'6rem 2rem',textAlign:'center'}}>
        <p className="reveal" style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,4vw,3rem)',lineHeight:1.2,color:'var(--ink)',marginBottom:'.5rem'}}>The arena is open.</p>
        <p className="reveal" style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(1.8rem,4vw,3rem)',lineHeight:1.2,color:'var(--ink)'}}><em style={{color:'var(--gold)',fontStyle:'italic'}}>You're already in it.</em></p>
      </section>

      <div className="manifesto-divider reveal" />

      {/* FOLLOW — exact form from manifesto.html */}
      <section style={{maxWidth:'680px',margin:'0 auto',padding:'4rem 2rem 6rem',textAlign:'center'}}>
        <div className="sl reveal" style={{justifyContent:'center'}}>Follow the Build</div>
        <h2 className="manifesto-big reveal">One message when<br />something <em>real</em> is ready.</h2>
        <p className="manifesto-body reveal" style={{marginTop:'.5rem'}}>No frequency. No schedule. Only when something ships.</p>
        <form className="reveal" action="https://formspree.io/f/xqenrzby" method="POST" style={{display:'flex',gap:'8px',maxWidth:'400px',margin:'2rem auto 0',flexWrap:'wrap'}}>
          <input type="hidden" name="_subject" value="New subscriber — Manifesto KleeOnAI" />
          <input type="email" name="email" placeholder="your@email.com" required style={{flex:1,minWidth:'200px',background:'var(--surface)',border:'.5px solid var(--border-dim)',color:'var(--ink)',fontFamily:"'Syne',sans-serif",fontSize:'.85rem',padding:'.85rem 1.2rem',outline:'none'}} onFocus={e => e.target.style.borderColor='var(--gold)'} onBlur={e => e.target.style.borderColor='var(--border-dim)'} />
          <button type="submit" style={{background:'var(--gold)',color:'var(--bg)',border:'none',padding:'.85rem 1.8rem',fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'.7rem',letterSpacing:'.15em',textTransform:'uppercase',cursor:'pointer'}}>Notify me →</button>
        </form>
        <p className="reveal" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',color:'var(--ink-dim)',marginTop:'1rem',letterSpacing:'.08em',opacity:.6}}>No spam. Ever.</p>
      </section>

      {/* FOOTER — exact slim footer from manifesto.html */}
      <footer style={{background:'var(--surface)',borderTop:'1px solid var(--border-dim)',padding:'2.5rem 3rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1.5rem'}}>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.2rem',fontWeight:900,color:'var(--ink)'}}>Klee<span style={{color:'var(--gold)'}}>OnAI</span></div>
            <div style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'.85rem',color:'var(--ink-dim)',marginTop:'.5rem',maxWidth:'380px',lineHeight:1.6}}>"Gentlemen by day. Philosopher by night. Contrarian by necessity. Rebel by fate &amp; anarchist by choice."</div>
          </div>
          <div style={{display:'flex',gap:'1.8rem',flexWrap:'wrap',alignItems:'center'}}>
            {[['X','https://x.com/kleeonai'],['LinkedIn','https://www.linkedin.com/in/abakar-ahmat-oumar-122b2a288/'],['Books','https://selar.com/m/abakar-ahmat-oumar1'],['Home','/']].map(([label, href]) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>{label}</a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
