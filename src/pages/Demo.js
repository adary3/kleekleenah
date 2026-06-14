import React, { useState } from 'react';

const outputs = {
  linkedin1:[`Most people want to be understood.\n\nI spent years chasing that too.\n\nThen I realized — the need to be understood is just ego with better posture.\n\nDrop it.\n\nNot because people don't matter. But because the moment you stop needing their read on you — you start showing up whole.\n\nThat's the move nobody talks about.`,`Everyone says build your personal brand. Post more. Be visible. Stay top of mind.\n\nHere's what they're not telling you: the obsession with being seen is slowly making you weak.\n\nYou optimize for likes instead of leverage. You craft narratives instead of building things.\n\nReal power has no content calendar. It has no engagement strategy.\n\nThe ones who built something that lasts were too busy building to need you to notice.`],
  linkedin2:[`We've built an entire culture around achievement. All of it pointed at one thing: getting what you want.\n\nWrong target.\n\nGetting things doesn't make you happy. Wanting things does. The anticipation. The possibility.\n\nStop chasing better outcomes. Start choosing better hungers.`,`You're told to find your passion. Follow your calling. Do what you love.\n\nNobody tells you that clarity doesn't precede action. It follows it.\n\nYou don't find what you love by thinking about it. You find it by doing things badly until something starts to feel less wrong.`],
  xthread:[`1/ The most powerful move I ever made was erasing my need to be understood.\n\n2/ For years I explained myself constantly. Every decision. Every choice.\n\n3/ The need to explain is the need for permission. And permission-seeking is the quietest form of self-abandonment.\n\n4/ When you stop needing people to get it — you stop diluting it to make it easier to get.\n\n5/ Follow for more on building without an audience in your head.`],
  xsingle:[`The need to be understood is just ego with better posture. Drop it.`,`Real power has no content calendar. It doesn't refresh notifications.`,`Overthinking is fear in a suit. It looks busy. It accomplishes nothing.`],
  threads:[`Stopped explaining myself six months ago. The silence felt like failure. Now it feels like the only honest thing I've ever done.`,`The quietest competitive advantage nobody talks about: loving what you do so much the noise becomes background.`],
};

function rand(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

export default function Demo() {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [meta, setMeta] = useState('');
  const [toast, setToast] = useState(false);
  const [source, setSource] = useState('Raw Idea');
  const [topic, setTopic] = useState('Philosophy');

  function generate() {
    if (!input.trim()) return;
    setLoading(true);
    setCards([]);
    setTimeout(() => {
      const now = new Date();
      setMeta(`${source} · ${topic} · ${now.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})}`);
      setCards([
        {label:'LinkedIn Post 1', content:rand(outputs.linkedin1)},
        {label:'LinkedIn Post 2', content:rand(outputs.linkedin2)},
        {label:'X Thread', content:rand(outputs.xthread)},
        {label:'X Single Post', content:rand(outputs.xsingle)},
        {label:'Threads Post', content:rand(outputs.threads)},
      ]);
      setLoading(false);
    }, 2200);
  }

  function copy(text) {
    navigator.clipboard.writeText(text).then(() => {
      setToast(true);
      setTimeout(() => setToast(false), 1800);
    });
  }

  return (
    <main style={{background:'#06050A',color:'#EDE8DF',fontFamily:"'JetBrains Mono',monospace",minHeight:'100vh'}}>
      <div style={{borderBottom:'1px solid #1A1820',padding:'20px 40px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <a href="/" style={{fontFamily:"'Playfair Display',serif",fontSize:'22px',fontWeight:300,letterSpacing:'2px',color:'#EDE8DF',textDecoration:'none'}}>Klee<span style={{color:'#D4AF72'}}>OnAI</span></a>
        <a href="/" style={{fontSize:'11px',color:'#6A6458',textDecoration:'none',letterSpacing:'2px',textTransform:'uppercase'}}>← Back</a>
      </div>

      <div style={{padding:'80px 40px 60px',maxWidth:'780px',margin:'0 auto'}}>
        <span style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#D4AF72',marginBottom:'24px',display:'block'}}>Live Demo · Content Engine</span>
        <h1 style={{fontFamily:"'Playfair Display',serif",fontSize:'clamp(42px,7vw,72px)',fontWeight:300,lineHeight:1.05,color:'#EDE8DF',marginBottom:'20px'}}>
          One thought.<br /><em style={{fontStyle:'italic',color:'#D4AF72'}}>Five platforms.</em><br />Zero effort.
        </h1>
        <p style={{fontSize:'12px',color:'#6A6458',lineHeight:1.8,letterSpacing:'.5px',maxWidth:'480px'}}>Type a raw idea, a book excerpt, or anything on your mind. The engine turns it into ready-to-post content for LinkedIn, X, and Threads — in a voice that doesn't sound like everyone else.</p>
      </div>

      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 40px 40px'}}>
        <label style={{fontSize:'10px',letterSpacing:'3px',textTransform:'uppercase',color:'#6A6458',marginBottom:'12px',display:'block'}}>Your raw input</label>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if(e.key==='Enter'&&e.metaKey) generate(); }}
          rows={6}
          placeholder="The most dangerous person in any room is the one who genuinely does not need to be seen..."
          style={{width:'100%',background:'#0D0C12',border:'1px solid #1A1820',color:'#EDE8DF',fontFamily:"'Playfair Display',serif",fontSize:'20px',fontWeight:300,lineHeight:1.6,padding:'28px 32px',resize:'none',outline:'none',minHeight:'160px'}}
          onFocus={e => e.target.style.borderColor='#D4AF72'}
          onBlur={e => e.target.style.borderColor='#1A1820'}
        />
        <div style={{display:'flex',gap:'12px',marginTop:'12px',alignItems:'center',flexWrap:'wrap'}}>
          {[['source',source,setSource,['Raw Idea','Book Excerpt','Threads Post','Content Bank']],['topic',topic,setTopic,['Philosophy','AI & Building','Mindset','Career','Book Promo']]].map(([name,val,set,opts]) => (
            <select key={name} value={val} onChange={e=>set(e.target.value)} style={{background:'#0D0C12',border:'1px solid #1A1820',color:'#6A6458',fontFamily:"'JetBrains Mono',monospace",fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 16px',outline:'none',cursor:'pointer',flex:1,minWidth:'140px'}}>
              {opts.map(o => <option key={o}>{o}</option>)}
            </select>
          ))}
          <button
            onClick={generate}
            disabled={loading}
            style={{background:'#D4AF72',color:'#06050A',border:'none',fontFamily:"'Syne',sans-serif",fontWeight:700,fontSize:'11px',letterSpacing:'3px',textTransform:'uppercase',padding:'14px 32px',cursor:loading?'not-allowed':'pointer',opacity:loading?.3:1,whiteSpace:'nowrap'}}
          >{loading ? 'Generating...' : 'Generate →'}</button>
        </div>
        {loading && (
          <div style={{width:'100%',height:'1px',background:'#1A1820',marginTop:'2px',overflow:'hidden'}}>
            <div style={{height:'100%',background:'#D4AF72',animation:'demoLoad 2s ease-in-out infinite'}} />
          </div>
        )}
        <style>{`@keyframes demoLoad{0%{width:0%;marginLeft:0}50%{width:60%;marginLeft:20%}100%{width:0%;marginLeft:100%}}`}</style>
      </div>

      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 40px',borderTop:'1px solid #1A1820',marginTop:'20px'}} />

      {cards.length > 0 && (
        <div style={{maxWidth:'780px',margin:'0 auto',padding:'40px 40px 80px'}}>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'32px'}}>
            <span style={{fontSize:'10px',letterSpacing:'4px',textTransform:'uppercase',color:'#D4AF72'}}>Generated Content</span>
            <span style={{fontSize:'10px',color:'#6A6458',letterSpacing:'1px'}}>{meta}</span>
          </div>
          <div style={{display:'grid',gap:'2px'}}>
            {cards.map((c,i) => (
              <div
                key={i}
                onClick={() => copy(c.content)}
                style={{background:'#0D0C12',border:'1px solid #1A1820',padding:'28px 32px',cursor:'pointer',transition:'border-color .2s'}}
                onMouseEnter={e=>e.currentTarget.style.borderColor='#D4AF72'}
                onMouseLeave={e=>e.currentTarget.style.borderColor='#1A1820'}
              >
                <div style={{fontSize:'9px',letterSpacing:'3px',textTransform:'uppercase',color:'#D4AF72',marginBottom:'16px',display:'flex',justifyContent:'space-between'}}>
                  <span>{c.label}</span>
                  <span style={{color:'#6A6458',fontSize:'9px'}}>Click to copy</span>
                </div>
                <div style={{fontFamily:"'Playfair Display',serif",fontSize:'18px',fontWeight:300,lineHeight:1.7,color:'#EDE8DF',whiteSpace:'pre-wrap'}}>{c.content}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{maxWidth:'780px',margin:'0 auto',padding:'0 40px 40px',fontSize:'10px',color:'#6A6458',letterSpacing:'1px',borderTop:'1px solid #1A1820',paddingTop:'24px'}}>
        This is a live demo of the KleeOnAI Content OS. <a href="/" style={{color:'#D4AF72',textDecoration:'none'}}>See the full work →</a>
      </div>

      {toast && (
        <div style={{position:'fixed',bottom:'32px',right:'32px',background:'#D4AF72',color:'#06050A',fontFamily:"'JetBrains Mono',monospace",fontSize:'10px',letterSpacing:'2px',textTransform:'uppercase',padding:'12px 20px'}}>
          Copied
        </div>
      )}
    </main>
  );
}
