import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../components/useReveal';

const BOOKS = [
  { slug:'ai-exam', number:'Book I', year:'2024', tags:['Career','AI'], title:'AI Beyond the Exam', description:'Using AI to build careers, not just pass exams. The alternative nobody wrote.', tagline:'For the ones the exam never tested.', price:'Get it →', selarLink:'https://selar.com/m/abakar-ahmat-oumar1' },
  { slug:'equanimity', number:'Book II', year:'2024', tags:['Mindset','Resilience'], title:'Equanimity', description:'Not a tools list. A book about how to think — then how to build.', price:'Get it →', selarLink:'https://selar.com/m/abakar-ahmat-oumar1' },
  { slug:'playbook', number:'Book III', year:'2025', tags:['Prompting','Workflows'], title:'The African AI Playbook', description:"The tools are already here. I needed to actually use them — not just know they exist.", price:'Get it →', selarLink:'https://selar.com/m/abakar-ahmat-oumar1' },
  { slug:'mirth', number:'Book IV · 33 Dispatches', year:'2026', tags:['Book IV','2026'], title:'Whispers of Mirth', description:"You were never the point. It's not for you. Read it anyway.", tagline:'', price:'', selarLink:'' },
  { slug:'lazy', number:'Book V', year:'2026', tags:['Automation','Productivity'], title:'Too Lazy Too Bored to Post', description:"The daily automation system I built so I never have to think about content again. Set it once. Let it run.", price:'Get it on Selar →', selarLink:'https://selar.com/m/abakar-ahmat-oumar1' },
];

const FEATURED = [
  { slug:'clarity', order:'01', tags:['AI','Web App'], title:'The Clarity Engine', description:"I couldn't articulate what I actually wanted. So I built 22 questions and an AI summary to force myself to say it clearly. Still use it.", status:'Live · Netlify', url:'https://kleeonaiengine.netlify.app/' },
  { slug:'inex', order:'05', tags:['Website','Multilingual','Client'], title:'INEX Partner', description:'They had a basic Wix page. I rebuilt it from scratch — multilingual (FR, EN, TR, 中), full services architecture, AI assistant, WhatsApp integration and a commercial corridor map connecting Africa, Turkey and China.', status:'Live · Client Project', url:'https://1c6a2480.inex-40h.pages.dev/' },
  { slug:'kleeopedia', order:'11', tags:['Directory','Pan-African','Free'], title:'Kleeopedia', description:'The largest open directory of startup ideas Africa needs built — and the tools to build them. Ideas section: 1,056 startup ideas across 26 categories and 54 African countries. Atlas section: 165+ curated resources for African builders. Free. No fluff.', status:'Live · Free', url:'https://kleeopediatlas.netlify.app' },
  { slug:'ledger', order:'12', tags:['Audit','Research','Africa'], title:'The Ledger', description:'Every "make money online" method audited against reality. The promise they sold you, against what actually happens when you try it from zero — no audience, no portfolio, no capital. 43 methods. Honest verdicts.', status:'Live · Netlify', url:'https://auditledger.netlify.app/' },
];

export default function Home() {
  useReveal();
  return (
    <main>
      {/* HERO */}
      <section id="hero">
        <div className="hero-eyebrow">AI Tools · Automation · Websites · Digital Products</div>
        <h1 className="hero-h1">
          <span className="w1">Life happens</span>
          <span className="w2">through you,</span>
          <span className="w3">not at you.</span>
        </h1>
        <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.75rem',color:'var(--gold)',opacity:.6,letterSpacing:'.08em',marginBottom:'3rem',maxWidth:'480px'}}>You're looking for heaven but you're the one hiding.</p>
        <div className="hero-bottom">
          <div>
            <p className="hero-sub">Obsessive by nature. Following what pulls me.<br />Building until it's second nature.</p>
            <div className="hero-cta">
              <Link to="/services" className="btn-p">Work With Me →</Link>
              <a href="#projects" className="btn-s">See the Work</a>
            </div>
          </div>
          <div className="hero-right" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="sw">
          <div className="about-grid">
            <div className="r">
              <div className="sl">Why This Exists</div>
              <h2 className="sh"><span>Not for the Market.</span><br /><em>For Me.</em></h2>
              <div className="about-text">
                <p>I build because I'm interested. That's the whole reason.</p>
                <p>Something catches my attention and I go all the way in — until I understand it, until I can make something with it, until it becomes part of how I think.</p>
                <p>This is my latest obsession.</p>
              </div>
              <p className="about-note">This is a live document. Not a finished portfolio — a building log.</p>
            </div>
            <div className="r" style={{transitionDelay:'.15s'}}>
              <div style={{border:'1px solid var(--border-dim)',padding:'2rem',background:'var(--surface2)'}}>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.55rem',letterSpacing:'.25em',textTransform:'uppercase',color:'var(--gold)',opacity:.7,marginBottom:'1.5rem'}}>Currently</div>
                <div style={{display:'flex',flexDirection:'column',gap:'1.2rem'}}>
                  {['Building Kleeopedia','Building an ERP system for African SMEs','Shipping new tools weekly'].map(item=>(
                    <div key={item} style={{display:'flex',alignItems:'center',gap:'1rem'}}>
                      <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'#5a8a5a',flexShrink:0,animation:'pulse 2s infinite'}} />
                      <span style={{fontSize:'.82rem',color:'var(--ink-dim)'}}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{marginTop:'2rem',paddingTop:'1.5rem',borderTop:'1px solid var(--border-dim)',fontFamily:"'JetBrains Mono',monospace",fontSize:'.58rem',color:'var(--ink-dim)',letterSpacing:'.06em',opacity:.5}}>Last updated · June 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="sw">
          <div className="sl r">What I Build</div>
          <h2 className="sh r">Services</h2>
          <div className="services-grid">
            {[
              {n:'01',icon:'⬡',title:'AI Web Apps',desc:'Custom AI-powered tools built for your specific use case — not generic wrappers.',href:'/services#ai-web-apps'},
              {n:'02',icon:'◎',title:'Automation Systems',desc:'Make, Zapier, Airtable, Buffer — connected into systems that run while you sleep.',href:'/services#automation'},
              {n:'03',icon:'◈',title:'Website Design & Build',desc:'Fast, sharp, mobile-first websites built from scratch. Clean code that loads fast.',href:'/services#websites'},
              {n:'04',icon:'▲',title:'Landing Pages & Sales Pages',desc:'Single-purpose pages built to convert. Copy, design, done.',href:'/services#landing-pages'},
              {n:'05',icon:'✦',title:'AI Chatbots & API Integrations',desc:'Custom chatbots trained on your content, connected to your systems via API.',href:'/services#chatbots'},
              {n:'06',icon:'❖',title:'Digital Products',desc:'Ebooks, playbooks, templates, tools — packaged and ready to sell.',href:'/services#digital-products'},
            ].map(s=>(
              <div key={s.n} className="svc r">
                <span className="svc-n">{s.n}</span>
                <span className="svc-icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={s.href} className="svc-link">Learn more →</Link>
              </div>
            ))}
          </div>
          <div style={{marginTop:'2.5rem'}} className="r">
            <Link to="/services" className="btn-p">See Full Services →</Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="projects">
        <div className="sw">
          <div className="sl r">Built From Obsession</div>
          <h2 className="sh r">The Work</h2>
          <div className="tools-grid">
            {FEATURED.map((p,i)=>(
              <div key={p.slug} className="tool r" style={{transitionDelay:`${i*.08}s`}}>
                <span className="tool-n">{p.order}</span>
                <div style={{display:'flex',flexWrap:'wrap',gap:'.2rem',marginBottom:'.5rem'}}>
                  {p.tags.map(t=><span key={t} className="tool-tag">{t}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tool-live"><span className="dot" />&nbsp;{p.status}</div>
                {p.url&&<a href={p.url} target="_blank" rel="noreferrer" className="tool-link">Visit →</a>}
              </div>
            ))}
          </div>
          <div className="see-all-wrap r">
            <Link to="/work" className="btn-p">See All Work →</Link>
            <span className="count">12 projects total</span>
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books">
        <div className="sw">
          <div className="sl r">Written From Experience</div>
          <h2 className="sh r">Books I Wrote<br /><em>For Myself.</em></h2>
          <div className="books-grid">
            {BOOKS.map((b,i)=>(
              <div key={b.slug} className="book r" style={{transitionDelay:`${i*.08}s`,borderStyle:b.selarLink?'solid':'dashed'}}>
                <div className="book-ey">{b.tags.join(' · ')}</div>
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.5rem',letterSpacing:'.12em',color:'var(--gold)',opacity:.6,marginBottom:'.4rem'}}>{b.number} · {b.year}</div>
                <h3>{b.title}</h3>
                <p style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.72rem',color:'var(--ink-dim)',lineHeight:1.8,marginBottom:'1rem',flex:1}}>{b.description}</p>
                {b.tagline&&<p style={{fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'.82rem',color:'var(--ink-dim)',marginBottom:'1rem'}}>{b.tagline}</p>}
                {b.selarLink
                  ?<a href={b.selarLink} target="_blank" rel="noreferrer" className="btn-s" style={{fontSize:'.65rem',padding:'.6rem 1.2rem'}}>{b.price}</a>
                  :<span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.6rem',color:'var(--ink-dim)'}}>Order via <a href="mailto:hello@kleeonai.com" style={{color:'var(--gold)',textDecoration:'none'}}>email</a> or <a href="https://wa.me/250798695863" target="_blank" rel="noreferrer" style={{color:'var(--gold)',textDecoration:'none'}}>WhatsApp</a></span>
                }
              </div>
            ))}
          </div>
          <div style={{marginTop:'2.5rem'}} className="r">
            <a href="https://selar.com/m/abakar-ahmat-oumar1" target="_blank" rel="noreferrer" className="btn-s">Get the Books →</a>
          </div>
        </div>
      </section>

      {/* COLLAB */}
      <section style={{background:'var(--surface2)',borderTop:'1px solid var(--border-dim)',borderBottom:'1px solid var(--border-dim)'}}>
        <div className="sw">
          <div className="r" style={{maxWidth:'680px'}}>
            <div className="sl">Open for Collaboration</div>
            <h2 className="sh">Let's Build <em>Together.</em></h2>
            <p style={{color:'var(--ink-dim)',lineHeight:1.9,fontSize:'.88rem',marginBottom:'2rem'}}>If you're working on something that interests me, adds value, or helps Africans build better — I'm in. Not everything is transactional. Some things are worth building just because they matter.</p>
            <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.65rem',color:'var(--ink-dim)',lineHeight:2,marginBottom:'1.5rem',padding:'1.2rem 1.4rem',border:'1px solid var(--border-dim)',background:'var(--surface)'}}>
              <div style={{color:'var(--gold)',fontSize:'.55rem',letterSpacing:'.2em',textTransform:'uppercase',marginBottom:'.8rem'}}>What moves me</div>
              <div>→ Tools that help African builders go digital</div>
              <div>→ Products that solve real African problems</div>
              <div>→ Ideas that are contrarian and make sense</div>
              <div>→ Anything that leaps instead of catching up</div>
            </div>
            <a href="https://wa.me/250798695863?text=Hi%20Klee%2C%20I%20have%20a%20collaboration%20idea" target="_blank" rel="noreferrer" className="btn-p" style={{display:'inline-block'}}>Start the Conversation →</a>
          </div>
        </div>
      </section>
    </main>
  );
}
