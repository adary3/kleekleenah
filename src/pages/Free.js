import React, { useEffect } from 'react';

export default function Free() {
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
      <style>{`.reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease;}.reveal.visible{opacity:1;transform:translateY(0);}`}</style>

      <nav style={{position:'fixed',top:0,left:0,right:0,zIndex:900,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'1.4rem 3rem',background:'rgba(6,5,10,0.92)',backdropFilter:'blur(20px)',borderBottom:'1px solid var(--border-dim)'}}>
        <a href="/" style={{fontFamily:"'Syne',sans-serif",fontWeight:800,fontSize:'1rem',letterSpacing:'.1em',textDecoration:'none',color:'var(--ink)'}}>Klee<span style={{color:'var(--gold)'}}>OnAI</span></a>
        <ul style={{display:'flex',gap:'2.5rem',listStyle:'none',alignItems:'center'}}>
          <li><a href="/#about" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>Story</a></li>
          <li><a href="/work" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>Work</a></li>
          <li><a href="/#books" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>Books</a></li>
          <li><a href="#get-yours" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',letterSpacing:'.18em',textTransform:'uppercase',color:'var(--gold)',border:'1px solid rgba(212,175,114,0.4)',padding:'.45rem 1rem',textDecoration:'none'}}>Get Free Pack ↗</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section style={{minHeight:'100vh',display:'flex',alignItems:'center',padding:'8rem 3rem 5rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:'30%',left:'50%',transform:'translateX(-50%)',width:'800px',height:'500px',background:'radial-gradient(ellipse,rgba(212,175,114,0.05) 0%,transparent 70%)',pointerEvents:'none'}} />
        <div style={{maxWidth:'1100px',margin:'0 auto',width:'100%'}}>
          <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.62rem',letterSpacing:'.28em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'2rem',opacity:.7,display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{width:'6px',height:'6px',background:'var(--gold)',borderRadius:'50%',animation:'pulse 2s infinite',display:'inline-block'}} />
            Free. No credit card. No pitch.
          </div>
          <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(2.8rem,6vw,5.5rem)',fontWeight:900,lineHeight:1.05,marginBottom:'2.5rem'}}>
            <span style={{display:'block',color:'var(--ink)'}}>9 Ready-to-Post Pieces</span>
            <span style={{display:'block',color:'var(--gold)',fontStyle:'italic'}}>of Content —</span>
            <span style={{display:'block',color:'var(--ink)'}}>Built Around Your Niche.</span>
          </h1>
          <div style={{display:'flex',gap:'.8rem',flexWrap:'wrap',marginBottom:'2.5rem'}}>
            {[['5','LinkedIn Posts'],['2','X Posts'],['2','Threads Posts'],['','Delivered in 60 seconds']].map(([n,l]) => (
              <div key={l} style={{display:'flex',alignItems:'center',gap:'.5rem',background:'var(--gold-dim)',border:'1px solid var(--border)',padding:'.45rem 1rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'.62rem',letterSpacing:'.1em',color:'var(--ink-dim)'}}>
                {n && <span style={{color:'var(--gold)',fontWeight:700}}>{n}</span>} {l}
              </div>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr auto',gap:'3rem',alignItems:'end',paddingTop:'2.5rem',borderTop:'1px solid var(--border-dim)'}}>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.78rem',color:'var(--ink-dim)',lineHeight:2,maxWidth:'380px'}}>
              <strong style={{color:'var(--ink)'}}>Tell us your niche and goal.</strong><br />
              Claude AI writes 9 pieces of content built specifically for you.<br />
              Lands in your inbox in under 60 seconds.<br />
              Whatever your field.
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'.8rem',alignItems:'flex-end'}}>
              <a href="#get-yours" className="btn-p">Get My Free Content Pack ↗</a>
              <a href="#what" className="btn-s">See a sample first</a>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.52rem',letterSpacing:'.1em',color:'var(--ink-dim)',opacity:.5}}>No spam. No pitch. Just content.</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section id="what" style={{padding:'6rem 0',borderTop:'1px solid var(--border-dim)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 3rem'}}>
          <div className="reveal">
            <div className="sl">What you'll receive</div>
            <h2 className="sh">Real content. <em>Ready to post.</em></h2>
          </div>
          <div className="reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'1px',background:'var(--border-dim)',marginTop:'3rem'}}>
            <div style={{background:'var(--bg)',padding:'2.5rem'}}>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'1rem',opacity:.8}}>✦ LinkedIn Post 01 — The Contrarian Hook</div>
              <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.1rem',fontWeight:700,color:'var(--ink)',marginBottom:'.8rem',lineHeight:1.3}}>"Most companies don't have an HR problem."</div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.72rem',color:'var(--ink-dim)',lineHeight:1.9}}>
                Most companies don't have an HR problem.<br /><br />
                They have a people strategy problem.<br /><br />
                HR is reactive by design — we respond to what breaks.<br />
                But the best organizations I've worked with do something different.<br />
                They treat people strategy like product strategy.
              </div>
            </div>
            {[
              {p:'✦ LinkedIn Post 02 — The Story Post',t:'A client came to me with 40% turnover.'},
              {p:'✦ X Post — Sharp Take',t:'280 characters. Maximum impact.'},
              {p:'🧵 Threads Post — Engagement Driver',t:'Conversational. Direct. Stops the scroll.'},
            ].map(c => (
              <div key={c.p} style={{background:'var(--bg)',padding:'2.5rem',position:'relative'}}>
                <div style={{filter:'blur(4px)',userSelect:'none',pointerEvents:'none'}}>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',letterSpacing:'.2em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'1rem',opacity:.8}}>{c.p}</div>
                  <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.1rem',fontWeight:700,color:'var(--ink)',marginBottom:'.8rem'}}>{c.t}</div>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.72rem',color:'var(--ink-dim)',lineHeight:1.9}}>Content tailored to your niche and voice.</div>
                </div>
                <div style={{position:'absolute',inset:0,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'.5rem',background:'rgba(6,5,10,0.6)',backdropFilter:'blur(2px)'}}>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.62rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--gold)'}}>— Yours when you submit</div>
                  <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.52rem',color:'var(--ink-dim)',letterSpacing:'.1em'}}>Tailored to your niche, not this one</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{padding:'6rem 0',borderTop:'1px solid var(--border-dim)',background:'var(--surface)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 3rem'}}>
          <div className="reveal"><div className="sl">How it works</div><h2 className="sh">Three steps. <em>60 seconds.</em></h2></div>
          <div className="reveal" style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--border-dim)',marginTop:'3rem'}}>
            {[
              {n:'01',t:'Tell us your niche & goal',d:'HR, SaaS, Coaching, Recruiting, Finance, Law, Tech — anything. One sentence is enough. Claude does the rest.'},
              {n:'02',t:'AI writes your pack',d:'Claude AI — the same model powering enterprise tools — generates 9 pieces of content built for your niche, your voice, your goal.'},
              {n:'03',t:'Check your inbox',d:'Your full content pack arrives in under 60 seconds. Copy. Adjust if needed. Post. That\'s it.'},
            ].map(s => (
              <div key={s.n} style={{background:'var(--surface)',padding:'2.5rem'}}>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:'4rem',fontWeight:900,color:'var(--gold)',opacity:.12,lineHeight:1,marginBottom:'1.5rem'}}>{s.n}</div>
                <div style={{fontFamily:"'Syne',sans-serif",fontSize:'1rem',fontWeight:700,color:'var(--ink)',marginBottom:'.8rem'}}>{s.t}</div>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.68rem',color:'var(--ink-dim)',lineHeight:1.9}}>{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="get-yours" style={{padding:'6rem 0 8rem',borderTop:'1px solid var(--border-dim)'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',padding:'0 3rem'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'6rem',alignItems:'start'}}>
            <div className="reveal">
              <div className="sl">Get yours free</div>
              <h2 className="sh">Your content pack<br />is <em>one form away.</em></h2>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.78rem',color:'var(--ink-dim)',lineHeight:2,maxWidth:'380px',marginTop:'1.5rem'}}>Fill in your name, email, niche, and goal. That's all Claude needs to build your pack.</div>
              <div style={{display:'flex',flexDirection:'column',gap:'.8rem',marginTop:'2rem'}}>
                {['Delivered to your inbox in under 60 seconds','9 pieces — LinkedIn, X & Threads','Built for your specific niche and goal','No spam. No follow-up pitch.','Free. Always.'].map(p => (
                  <div key={p} style={{display:'flex',alignItems:'center',gap:'.8rem',fontFamily:"'JetBrains Mono',monospace",fontSize:'.62rem',color:'var(--ink-dim)',letterSpacing:'.06em'}}>
                    <span style={{color:'var(--gold)'}}>✓</span> {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal">
              <div style={{background:'var(--surface)',border:'1px solid var(--border-dim)',overflow:'hidden'}}>
                <iframe
                  src="https://tally.so/embed/zxLzMZ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="420"
                  title="Free Content Pack Form"
                  style={{border:'none',display:'block',minHeight:'420px'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{background:'var(--surface)',borderTop:'1px solid var(--border-dim)',padding:'2.5rem 3rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1.5rem'}}>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.2rem',fontWeight:900,color:'var(--ink)'}}>Klee<span style={{color:'var(--gold)'}}>OnAI</span></div>
            <div style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'.85rem',color:'var(--ink-dim)',marginTop:'.5rem',maxWidth:'380px',lineHeight:1.6}}>"Gentlemen by day. Philosopher by night. Contrarian by necessity. Rebel by fate &amp; anarchist by choice."</div>
          </div>
          <div style={{display:'flex',gap:'1.8rem'}}>
            <a href="https://x.com/kleeonai" target="_blank" rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>X</a>
            <a href="https://www.linkedin.com/in/abakar-ahmat-oumar-122b2a288/" target="_blank" rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>LinkedIn</a>
            <a href="/" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>Home</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
