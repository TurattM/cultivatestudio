import Head from 'next/head'
import { siteContent as c } from '../content'
import { useEffect, useRef, useState } from 'react'

// ── Logo SVG ────────────────────────────────────────────────
function LogoMark() {
  return (
    <svg width="30" height="34" viewBox="0 0 30 34" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 2L28 9.5V24.5L15 32L2 24.5V9.5L15 2Z" stroke="#5C6E4A" strokeWidth="1.5" fill="none"/>
      <path d="M15 8L22 12V20L15 24L8 20V12L15 8Z" fill="#5C6E4A" opacity="0.3"/>
      <circle cx="15" cy="17" r="2" fill="#C2744A"/>
    </svg>
  )
}

// ── Nav ─────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <a href="#" className="nav-logo">
        <div className="nav-logo-mark"><LogoMark /></div>
        <div className="nav-logo-text">
          <span className="nav-logo-word">Cultivate</span>
          <span className="nav-logo-sub">studio</span>
        </div>
      </a>

      <ul className="nav-links">
        {c.nav.links.map(l => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>

      <a href={c.nav.cta.href} className="nav-cta">{c.nav.cta.label}</a>

      {/* Mobile hamburger */}
      <button className="nav-hamburger" onClick={() => setOpen(o => !o)} aria-label="Menu">
        <span /><span /><span />
      </button>

      {/* Mobile drawer */}
      <div className={`nav-mobile ${open ? 'open' : ''}`}>
        {c.nav.links.map(l => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
        <a href={c.nav.cta.href} className="btn-primary" onClick={() => setOpen(false)}>
          {c.nav.cta.label}
        </a>
      </div>
    </nav>
  )
}

// ── Reveal hook ─────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

// ── Main page ────────────────────────────────────────────────
export default function Home() {
  useReveal()

  return (
    <>
      <Head>
        <title>{c.meta.title}</title>
        <meta name="description" content={c.meta.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <Nav />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-gradient" />
        <div className="hero-bottom-fade" />
        <div className="hero-left">
          <div className="hero-content">
            <div className="hero-pre">{c.hero.eyebrow}</div>
            <h1 className="hero-manifesto">
              <span>{c.hero.line1}</span>
              <em>{c.hero.line2}</em>
              <span>{c.hero.line3}</span>
              <span className="line-moss">{c.hero.line4}</span>
            </h1>
            <div className="hero-divider" />
            <p className="hero-statement">{c.hero.statement}</p>
            <div className="hero-actions">
              <a href={c.hero.cta1.href} className="btn-primary">{c.hero.cta1.label}</a>
              <a href={c.hero.cta2.href} className="btn-ghost">{c.hero.cta2.label}</a>
            </div>
          </div>
        </div>
        <div className="hero-right" />
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── PILLARS ──────────────────────────────────────── */}
      <section className="pillars" id="pillars">
        {c.pillars.map(p => (
          <div key={p.num} className="pillar-block reveal">
            <div className="pillar-num">{p.num}</div>
            <div className="pillar-title">{p.title}</div>
            <div className="pillar-body">{p.body}</div>
          </div>
        ))}
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section className="about" id="about">
        <div className="about-img-wrap reveal">
          <div className="about-img-main">
            {/* Replace with your actual photo: put image in /public/images/marco.jpg */}
            <div style={{width:'100%',height:'100%',background:'var(--cs-parchment)',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'0.6rem',letterSpacing:'0.2em',color:'var(--cs-smoke)',textTransform:'uppercase'}}>Marco Turatti · IC Phuket</span>
            </div>
          </div>
          <div className="about-img-tag">Executive Chef · IC Phuket Resort</div>
        </div>
        <div className="about-content reveal d1">
          <div className="eyebrow moss">{c.about.eyebrow}</div>
          <h2 className="section-title" style={{marginBottom:'1.8rem'}}>{c.about.title}</h2>
          {c.about.bio.map((p, i) => <p key={i}>{p}</p>)}
          <blockquote className="about-quote">{c.about.quote}</blockquote>

          {/* Recognition */}
          <div className="rec-row">
            <div className="rec-label">Recognition</div>
            <div className="rec-items">
              {c.about.recognition.filter(r => !r.fullWidth).map((r, i) => (
                <div key={i} className="rec-item">
                  <span className="rec-mark">◆</span>
                  <div>
                    <div className="rec-text">{r.title}</div>
                    <div className="rec-sub">{r.sub}</div>
                  </div>
                </div>
              ))}
            </div>
            {/* Full-width items */}
            {c.about.recognition.filter(r => r.fullWidth).map((r, i) => (
              <div key={i} className="rec-item" style={{marginTop:'1rem'}}>
                <span className="rec-mark">◆</span>
                <div>
                  <div className="rec-text">{r.title}</div>
                  <div className="rec-sub">{r.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="tags">
            {c.about.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </section>

      {/* ── R&D ──────────────────────────────────────────── */}
      <section className="studio-work" id="studio-work" style={{background:'#EDF1E8',padding:'var(--section-pad, 7rem 5rem)'}}>
        <div className="studio-work-header reveal" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5rem',marginBottom:'5rem',alignItems:'end'}}>
          <div>
            <div className="eyebrow">Active Research</div>
            <h2 className="section-title">the studio at work</h2>
          </div>
          <p style={{fontSize:'0.96rem',color:'var(--color-muted)',lineHeight:'1.9'}}>
            Step four of the process — and the most alive. This is where concepts become food.
            Fermentation programs running in parallel with menu development. Fire techniques tested
            against flavour hypotheses. Recipes documented, challenged, refined. The R&D phase is
            where the concept stops being an idea and starts being something you can taste.
          </p>
        </div>
        <div className="studio-work-grid" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'1px',background:'var(--color-border)'}}>
          {c.rdCards.map((card, i) => (
            <div
              key={i}
              className={`work-card reveal d${(i % 3) + 1}`}
              style={card.fullRow
                ? {gridColumn:'span 3',display:'grid',gridTemplateColumns:'1fr 2fr'}
                : card.wide ? {gridColumn:'span 2'} : {}
              }
            >
              <div className="work-body" style={{padding:'2rem 2rem 2.5rem'}}>
                <div className="work-label" style={{fontFamily:'var(--font-mono)',fontSize:'0.56rem',letterSpacing:'0.22em',textTransform:'uppercase',color:'var(--color-accent)',marginBottom:'0.7rem',display:'flex',alignItems:'center',gap:'0.5rem'}}>
                  <span style={{width:'14px',height:'1px',background:'var(--color-accent)',display:'inline-block'}} />
                  {card.label}
                </div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'1.35rem',fontWeight:400,color:'var(--cs-ash)',marginBottom:'0.8rem',lineHeight:1.2}}>{card.title}</div>
                <p style={{fontSize:'0.83rem',color:'var(--color-muted)',lineHeight:1.85}}>{card.desc}</p>
                <div style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',fontFamily:'var(--font-mono)',fontSize:'0.56rem',letterSpacing:'0.14em',textTransform:'uppercase',color:'var(--color-accent2)',marginTop:'1.2rem'}}>
                  <span style={{width:'6px',height:'6px',borderRadius:'50%',background:'var(--color-accent2)',animation:'pulse 2s infinite',display:'inline-block'}} />
                  {card.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── OUTLETS ──────────────────────────────────────── */}
      <section className="outlets-section-wrap" id="outlets">
        <div className="outlets-header reveal">
          <div>
            <div className="eyebrow moss">Our Work · IC Phuket Resort</div>
            <h2 className="section-title">Seven outlets. One standard.</h2>
          </div>
          <p>Overseeing the full F&B portfolio at InterContinental Phuket Resort — from Michelin-listed fine dining to beachfront casual. Each outlet distinct; all connected by the same research-driven approach to ingredient and technique.</p>
        </div>
        <div className="outlets-expanded">
          {c.outlets.map((o, i) => (
            <div
              key={o.slug}
              className={`outlet-card reveal ${o.featured ? 'featured' : ''}`}
            >
              <div className="outlet-card-body" style={{borderTop:`3px solid ${o.accentColor}`}}>
                <div className="outlet-card-type">{o.type}</div>
                <div className="outlet-card-name">{o.name}</div>
                <div className="outlet-card-desc">{o.desc}</div>
                {o.awards.length > 0 && (
                  <div className="outlet-card-awards">
                    {o.awards.map(a => <span key={a}>{a}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────── */}
      <section className="services" id="services">
        <div className="services-header reveal">
          <div className="eyebrow">Consulting</div>
          <h2 className="section-title">What The Studio builds.</h2>
          <p>Project-based consulting for luxury hotels, resort operators, and independent restaurant groups. A limited number of engagements each year — chosen for complexity and alignment.</p>
        </div>
        <div className="services-grid">
          {c.services.map(s => (
            <div key={s.num} className="service-card reveal">
              <div className="service-num">{s.num}</div>
              <div className="service-title">{s.title}</div>
              <div className="service-body">{s.body}</div>
              <div className="service-tags">
                {s.tags.map(t => <span key={t} className="service-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-left reveal">
            <div className="eyebrow">Contact</div>
            <h2 className="section-title">{c.contact.title}</h2>
            <p className="contact-hook">{c.contact.hook}</p>
            <p style={{fontSize:'0.94rem',color:'var(--color-muted)',lineHeight:1.9,maxWidth:'420px',marginBottom:'2.5rem'}}>{c.contact.body}</p>
            <div className="contact-detail">
              <div className="contact-item">
                <span className="contact-item-label">Email</span>
                <span className="contact-item-value">{c.contact.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-item-label">Based</span>
                <span className="contact-item-value">{c.contact.based}</span>
              </div>
            </div>
          </div>
          <form className="contact-form reveal d1" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First name</label>
                <input type="text" placeholder="Marco" />
              </div>
              <div className="form-group">
                <label>Last name</label>
                <input type="text" placeholder="Turatti" />
              </div>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@yourcompany.com" />
            </div>
            <div className="form-group">
              <label>Enquiry type</label>
              <select>
                <option value="">Select…</option>
                {c.contact.enquiryTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows={5} placeholder="Tell us about your project…" />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer>
        <div className="footer-logo">
          <LogoMark />
          <div>
            <div className="footer-logo-word">Cultivate</div>
            <div className="footer-logo-sub">studio</div>
          </div>
        </div>
        <ul className="footer-links">
          {c.footer.links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
        <div className="footer-copy">{c.footer.copy}</div>
      </footer>
    </>
  )
}
