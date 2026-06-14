import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';

const PROJECTS = [
  { n:'01', tags:['AI','Web App'], title:'The Clarity Engine', desc:"I couldn't articulate what I actually wanted. So I built 22 questions and an AI summary to force myself to say it clearly. Still use it.", status:'Live', statusFull:'Live · Netlify', url:'https://kleeonaiengine.netlify.app/', featured:false },
  { n:'02', tags:['AI','Content'], title:'Content Engine', desc:"I needed to grow on X and LinkedIn with no audience and no system. Built a 5-step engine to turn one raw thought into something worth posting.", status:'Live', statusFull:'Live · Replit', url:'https://klee-on-ai-content-engine-replit-1-zip--kleeonai.replit.app', featured:false },
  { n:'03', tags:['Chrome','Extension'], title:'KleeOnAI Assistant', desc:"I wanted AI that reads whatever page I'm on and answers questions about it without switching tabs. Currently in review on the Chrome Store.", status:'Building', statusFull:'In Review · Chrome', url:'https://github.com/kleeonai/kleeonai-assistant', featured:false },
  { n:'04', tags:['AI','Career'], title:'Atlas', desc:"I needed a map — tools, platforms, resources to go digital. Nothing existed for where I was. So I built the directory and curated 53 resources myself.", status:'Live', statusFull:'Live · Netlify', url:'https://atlaskleeon.netlify.app/', featured:false },
  { n:'05', tags:['Website','Multilingual','Client'], title:'INEX Partner', desc:"They had a basic Wix page. I rebuilt it — multilingual (FR, EN, TR, 中), full services architecture, AI assistant, WhatsApp integration and a commercial corridor map connecting Africa, Turkey and China.", status:'Live', statusFull:'Live · Client Project', url:'https://1c6a2480.inex-40h.pages.dev/', featured:false },
  { n:'06', tags:['Website','Restaurant','Client'], title:'Azzurri', desc:"They had no website. I cold-approached them, built from scratch — Mediterranean fine dining meets vibrant nightlife. Reservations, full menu, events.", status:'Live', statusFull:'Live · Kigali', url:'https://d763efa7.inex-40h.pages.dev/', featured:false },
  { n:'07', tags:['AI','Web App','Tools'], title:'KleeOnAI Tools', desc:"Two AI tools — the Clarity Engine and a Prompt Audit Tool built on the RGCF framework. Paste any prompt, get a score, get it rewritten.", status:'Live', statusFull:'Live · Cloudflare', url:'https://inex-40h.pages.dev/', featured:false },
  { n:'08', tags:['AI','Automation','Claude API'], title:'KleeOnAI Automation', desc:"Three AI tools in one — content pipeline for LinkedIn and X, task automator, and career advisor. Powered by Claude.", status:'Live', statusFull:'Beta · Vercel', url:'https://kleeonai-applic.vercel.app/', featured:false },
  { n:'09', tags:['AI','Career','Students'], title:'Career Roadmap Generator', desc:"Generates a personalized 9-month career roadmap for African students. Specific, honest, actionable — not generic advice.", status:'Live', statusFull:'Live · Vercel', url:'https://klee-on-ai-roadmap.vercel.app/', featured:false },
  { n:'10', tags:['Automation','Make','No-Code'], title:'Klee Automation', desc:"A raw thought goes in. Two LinkedIn posts, an X thread, an X post, and a Threads post come out — stored in Airtable, queued to Buffer automatically.", status:'Live', statusFull:'Live · Running Daily', url:'', featured:false },
  { n:'11', tags:['Directory','Pan-African','Free'], title:'Kleeopedia', desc:"The largest open directory of startup ideas Africa needs built. Ideas section: 1,056 startup ideas, 26 categories, 54 countries. Atlas section: 165+ curated resources. Free. No fluff. Built for the continent.", status:'Live', statusFull:'Live · Free', url:'https://kleeopediatlas.netlify.app', featured:true },
  { n:'12', tags:['Audit','Research','Africa'], title:'The Ledger', desc:'Every "make money online" method audited against reality — the promise they sold you, against what actually happens with no audience, no portfolio, no capital. 43 methods. Honest verdicts. Built for Africa.', status:'Live', statusFull:'Live · Netlify', url:'https://auditledger.netlify.app/', featured:true },
];

const SC = {
  Live:{ bg:'rgba(100,200,100,0.1)',color:'#6dc86d',border:'rgba(100,200,100,0.2)' },
  Building:{ bg:'rgba(212,175,114,0.1)',color:'var(--gold)',border:'rgba(212,175,114,0.2)' },
};

function Card({ p }) {
  const s = SC[p.status] || SC.Building;
  return (
    <div className="work-card r"
      onMouseEnter={e=>e.currentTarget.style.background='var(--surface2)'}
      onMouseLeave={e=>e.currentTarget.style.background='var(--surface)'}
    >
      <div className="work-card-num">{p.n}</div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:'1rem',marginBottom:'.5rem'}}>
        <h3>{p.title}</h3>
        <span className="work-status" style={{background:s.bg,color:s.color,border:`1px solid ${s.border}`,flexShrink:0}}>{p.status}</span>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:'.3rem',marginBottom:'.8rem'}}>
        {p.tags.map(t=><span key={t} className="work-tag">{t}</span>)}
      </div>
      <p>{p.desc}</p>
      <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.52rem',color:'var(--ink-dim)',opacity:.5,marginBottom:'.8rem'}}>{p.statusFull}</div>
      {p.url&&<a href={p.url} target="_blank" rel="noreferrer" className="btn-s" style={{fontSize:'.6rem',padding:'.55rem 1rem',alignSelf:'flex-start'}}>Visit →</a>}
    </div>
  );
}

export default function Work() {
  useReveal();
  const featured = PROJECTS.filter(p=>p.featured);
  const rest = PROJECTS.filter(p=>!p.featured);
  return (
    <main>
      <div className="page-header">
        <Link to="/" className="back-link r v">← Back to Home</Link>
        <div className="sl r v">Built From Obsession</div>
        <h1 className="r v">All the <em>Work.</em></h1>
        <p className="r v">Every tool, site and app — built because something pulled me in. Not because there was a plan.</p>
      </div>

      <div className="work-section">
        <div className="sl r" style={{marginBottom:'1.5rem'}}>Featured</div>
        <div className="work-featured-grid r">
          {featured.map(p=><Card key={p.n} p={p} />)}
        </div>

        <div className="sl r" style={{marginBottom:'1.5rem',marginTop:'3rem'}}>All Projects</div>
        <div className="work-all-grid r">
          {rest.map(p=><Card key={p.n} p={p} />)}
        </div>
      </div>

      <footer style={{background:'var(--surface)',borderTop:'1px solid var(--border-dim)',padding:'2.5rem 3rem'}}>
        <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'1.5rem'}}>
          <div>
            <div style={{fontFamily:"'Playfair Display',serif",fontSize:'1.2rem',fontWeight:900,color:'var(--ink)'}}>Klee<span style={{color:'var(--gold)'}}>OnAI</span></div>
            <div style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'.85rem',color:'var(--ink-dim)',marginTop:'.5rem',maxWidth:'380px',lineHeight:1.6}}>"Gentlemen by day. Philosopher by night. Contrarian by necessity. Rebel by fate &amp; anarchist by choice."</div>
          </div>
          <div style={{display:'flex',gap:'1.8rem',flexWrap:'wrap'}}>
            <a href="https://x.com/kleeonai" target="_blank" rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>X</a>
            <a href="https://www.linkedin.com/in/abakar-ahmat-oumar-122b2a288/" target="_blank" rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>LinkedIn</a>
            <a href="https://selar.com/m/abakar-ahmat-oumar1" target="_blank" rel="noreferrer" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',letterSpacing:'.15em',textTransform:'uppercase',color:'var(--ink-dim)',textDecoration:'none'}}>Selar</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
