import React from 'react';
import useReveal from '../components/useReveal';

const services = [
  {
    num:'01', id:'ai-web-apps', icon:'⬡',
    title:'AI Web Apps',
    tags:['Claude API','OpenAI','Netlify','Vercel'],
    desc:'Custom AI-powered tools built for your specific use case — not generic ChatGPT wrappers. If you have a workflow that needs intelligence, I\'ll build the tool that fits it exactly. From idea to deployed product.',
    scope:['Custom AI assistants trained on your content or context','AI-powered form tools, generators, and summarizers','Multi-step AI workflows with structured outputs','Deployment on Netlify, Vercel, or Cloudflare Pages','Claude API or OpenAI integration depending on use case'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20an%20AI%20Web%20App",
  },
  {
    num:'02', id:'automation', icon:'◎',
    title:'Automation Systems',
    tags:['Make','Zapier','Airtable','Buffer'],
    desc:'Connected systems that run while you sleep. Content pipelines, lead capture flows, data routing, social publishing — automated end to end so you stop doing the same thing manually every day.',
    scope:['Content repurposing pipelines (one input → multiple platforms)','Lead capture and CRM automation','Data collection, storage, and routing via Airtable','Social media scheduling and publishing automation','Email sequences triggered by actions or form submissions'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20an%20Automation%20System",
  },
  {
    num:'03', id:'websites', icon:'◈',
    title:'Website Design & Build',
    tags:['HTML/CSS','React','Mobile-First'],
    desc:'Fast, sharp, mobile-first websites built from scratch. No bloated WordPress themes or drag-and-drop builders. Clean code, fast load times, and a design that actually matches what your brand is trying to say.',
    scope:['Full website design and development from scratch','Mobile-first, responsive across all devices','SEO foundations — meta tags, schema, sitemap, robots.txt','Security headers and performance optimization','Contact forms, analytics, and deployment setup','Multilingual versions available'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20a%20Website",
  },
  {
    num:'04', id:'landing-pages', icon:'▲',
    title:'Landing Pages & Sales Pages',
    tags:['Conversion','Copywriting','Fast Delivery'],
    desc:'Single-purpose pages built to convert. Product launches, lead capture, book sales, service offers — I handle the copy, the design, and the build. One page. One goal. Done.',
    scope:['Conversion-focused copy written for your audience','Design matched to your brand or built from scratch','Email capture, Selar/Gumroad payment integration','A/B-ready structure for testing headlines and CTAs','Fast turnaround — most pages delivered in 48–72 hours'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20a%20Landing%20Page",
  },
  {
    num:'05', id:'chatbots', icon:'✦',
    title:'AI Chatbots & API Integrations',
    tags:['Claude API','WhatsApp','REST','Webhooks'],
    desc:'Custom chatbots trained on your content, connected to your systems via API. Built to handle real conversations and real workflows — not canned responses.',
    scope:['Custom chatbot trained on your business data and tone','WhatsApp Business API integration','Website chat widget embed','REST API development and documentation','Third-party API integrations (payment, CRM, calendar, etc.)'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20a%20Chatbot%20or%20API",
  },
  {
    num:'06', id:'digital-products', icon:'❖',
    title:'Digital Products',
    tags:['Ebooks','Templates','Selar','Gumroad'],
    desc:'Ebooks, playbooks, templates, tools — packaged and ready to sell. From writing to design to distribution setup on Selar or Gumroad.',
    scope:['Product design and content structuring','PDF ebook design with professional layout','Template and prompt pack creation','Selar or Gumroad setup and listing','Sales page design and copywriting'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20a%20Digital%20Product",
  },
  {
    num:'07', id:'browser-extensions', icon:'⬡',
    title:'Browser Extensions',
    tags:['Chrome','Manifest V3','JavaScript'],
    desc:'Custom Chrome extensions that add AI or automation directly into the browser. Built for productivity, scraping, or custom workflows.',
    scope:['Chrome Extension with Manifest V3','AI-powered features via API integration','Content scripts for page interaction','Popup UI and options page','Chrome Web Store submission'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20a%20Browser%20Extension",
  },
  {
    num:'08', id:'mobile-apps', icon:'◐',
    title:'Mobile & Web Apps',
    tags:['React Native','Expo','App Store','Play Store'],
    desc:'Functional apps built for iOS, Android, and web — deployed everywhere. From idea to App Store and Play Store with a single codebase.',
    scope:['Cross-platform mobile apps (iOS + Android) with React Native','Web app version included in the same build','App Store and Google Play Store submission','Authentication, database, and backend integration','AI features and API integrations where needed'],
    wa:"Hi%20Klee%2C%20I'm%20interested%20in%20a%20Mobile%20App",
  },
];

export default function Services() {
  useReveal();
  return (
    <main>
      <div className="page-hero">
        <div className="page-eyebrow r">What I Build</div>
        <h1 className="page-h1 r">Services Built<br />From <em>Obsession.</em></h1>
        <p className="page-sub r">No retainers. No bloated agencies. Just sharp work, delivered fast — by someone who actually builds things out of interest, not obligation.</p>
      </div>

      <div className="services-wrap">
        {services.map(s => (
          <div key={s.id} id={s.id} className="svc-block r">
            <div className="svc-left">
              <div className="svc-num">{s.num}</div>
              <div>
                <div className="svc-icon-lg">{s.icon}</div>
                <div className="svc-title">{s.title}</div>
                <div style={{marginTop:'.8rem'}}>
                  {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
                </div>
              </div>
              <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:'.52rem',letterSpacing:'.12em',color:'var(--ink-dim)',opacity:.4,marginTop:'2rem'}}>kleeonai.com</div>
            </div>
            <div className="svc-right">
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-scope-title">Scope includes</div>
              <ul className="svc-scope">
                {s.scope.map((item,i) => <li key={i}>{item}</li>)}
              </ul>
              <div className="svc-cta">
                <a href={`https://wa.me/250798695863?text=${s.wa}`} target="_blank" rel="noreferrer" className="btn-wa">WhatsApp Me →</a>
                <a href="mailto:hello@kleeonai.com" className="btn-form">Send a Message</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="contact-strip">
        <h2>Not Sure <em>Where to Start?</em></h2>
        <p>Describe what you're trying to build or fix. I'll tell you exactly what makes sense and what doesn't.</p>
        <div className="cta-row">
          <a href="https://wa.me/250798695863?text=Hi%20Klee%2C%20I%20have%20a%20project%20idea" target="_blank" rel="noreferrer" className="btn-wa">WhatsApp Me →</a>
          <a href="mailto:hello@kleeonai.com" className="btn-form">Send a Message</a>
        </div>
      </div>
    </main>
  );
}
