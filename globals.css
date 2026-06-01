/* ============================================================
   CULTIVATE STUDIO — globals.css
   All design tokens, base styles, and responsive rules live here.
   To update colours, fonts, or spacing: edit the :root variables.
   ============================================================ */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Mono:wght@300;400&family=Jost:wght@200;300;400;500&display=swap');

/* ── DESIGN TOKENS ─────────────────────────────────────────── */
:root {
  /* Palette */
  --cs-oat:          #F2EBE0;
  --cs-parchment:    #EDE4D7;
  --cs-sand:         #D9C9B4;
  --cs-terracotta:   #C2744A;
  --cs-terra-lt:     #D4896A;
  --cs-terra-pale:   #EDD5C4;
  --cs-moss:         #5C6E4A;
  --cs-moss-lt:      #7D9168;
  --cs-moss-pale:    #C8D4BA;
  --cs-ember:        #C4623A;
  --cs-smoke:        #9A9186;
  --cs-warm-grey:    #B8AFA4;
  --cs-ash:          #5A5248;

  /* Semantic aliases */
  --color-bg:      var(--cs-oat);
  --color-surface: var(--cs-parchment);
  --color-text:    var(--cs-ash);
  --color-muted:   var(--cs-smoke);
  --color-accent:  var(--cs-terracotta);
  --color-accent2: var(--cs-moss);
  --color-border:  var(--cs-sand);

  /* Typography */
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --font-body:    'Jost', sans-serif;
  --font-mono:    'DM Mono', monospace;

  /* Spacing scale */
  --section-pad:  7rem 5rem;
  --section-pad-sm: 4rem 1.5rem;
}

/* ── RESET ──────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html  { scroll-behavior: smooth; }
body  {
  background:    var(--color-bg);
  color:         var(--color-text);
  font-family:   var(--font-body);
  font-weight:   300;
  line-height:   1.75;
  overflow-x:    hidden;
}

img   { content-visibility: auto; }

/* ── SHARED UTILITIES ───────────────────────────────────────── */
.eyebrow {
  font-family:    var(--font-mono);
  font-size:      0.62rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color:          var(--color-accent);
  margin-bottom:  1.2rem;
  display:        flex;
  align-items:    center;
  gap:            0.9rem;
}
.eyebrow::before { content:''; width:24px; height:1px; background:var(--color-accent); }
.eyebrow.moss    { color:var(--cs-moss); }
.eyebrow.moss::before { background:var(--cs-moss); }
.eyebrow.light   { color:var(--cs-moss-pale); }
.eyebrow.light::before { background:var(--cs-moss-pale); }

h2.section-title {
  font-family: var(--font-display);
  font-size:   clamp(2.2rem, 3.5vw, 3.4rem);
  font-weight: 400;
  line-height: 1.1;
  color:       var(--cs-ash);
}
h2.section-title.light { color: var(--cs-oat); }

.reveal { opacity:0; transform:translateY(20px); transition:opacity .75s ease, transform .75s ease; }
.reveal.visible { opacity:1; transform:translateY(0); }
.d1 { transition-delay:.1s; } .d2 { transition-delay:.2s; } .d3 { transition-delay:.3s; }

/* Shared buttons */
.btn-primary {
  font-family:    var(--font-mono);
  font-size:      0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color:          var(--cs-oat);
  background:     var(--color-accent);
  padding:        1rem 2.2rem;
  text-decoration:none;
  transition:     background .3s;
  font-weight:    400;
  display:        inline-block;
}
.btn-primary:hover { background: var(--cs-ember); }

.btn-ghost {
  font-family:    var(--font-mono);
  font-size:      0.65rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color:          var(--color-accent2);
  text-decoration:none;
  display:        flex;
  align-items:    center;
  gap:            0.5rem;
  transition:     color .3s;
}
.btn-ghost::after  { content:'→'; transition:transform .3s; }
.btn-ghost:hover   { color: var(--cs-moss); }
.btn-ghost:hover::after { transform: translateX(4px); }

/* Scrollbar */
::-webkit-scrollbar       { width:4px; }
::-webkit-scrollbar-track { background:var(--cs-oat); }
::-webkit-scrollbar-thumb { background:var(--cs-terracotta); }

/* ── NAV ────────────────────────────────────────────────────── */
nav {
  position:       fixed;
  top:0; left:0; right:0;
  z-index:        200;
  display:        flex;
  justify-content:space-between;
  align-items:    center;
  padding:        1.3rem 5rem;
  background:     rgba(242,235,224,0.94);
  backdrop-filter:blur(12px);
  border-bottom:  1px solid var(--color-border);
}
.nav-logo { display:flex; align-items:center; gap:.9rem; text-decoration:none; }
.nav-logo-mark { width:30px; height:34px; flex-shrink:0; }
.nav-logo-text { display:flex; flex-direction:column; gap:.05rem; }
.nav-logo-word { font-family:var(--font-display); font-size:1rem; font-weight:400; letter-spacing:.20em; color:var(--cs-ash); text-transform:uppercase; line-height:1; }
.nav-logo-sub  { font-family:var(--font-mono); font-size:.52rem; font-weight:300; letter-spacing:.28em; color:var(--color-accent); text-transform:lowercase; }
.nav-links { display:flex; gap:2rem; list-style:none; }
.nav-links a { font-family:var(--font-mono); font-size:.65rem; letter-spacing:.14em; text-transform:uppercase; color:var(--color-muted); text-decoration:none; transition:color .3s; }
.nav-links a:hover { color:var(--cs-ash); }
.nav-cta { font-family:var(--font-mono); font-size:.62rem; letter-spacing:.14em; text-transform:uppercase; color:var(--cs-oat); background:var(--color-accent2); padding:.65rem 1.4rem; text-decoration:none; transition:background .3s; }
.nav-cta:hover { background:var(--cs-moss); }
.nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:.5rem; }
.nav-hamburger span { display:block; width:22px; height:1px; background:var(--cs-ash); transition:all .3s; }
.nav-mobile { display:none; }

/* ── HERO ───────────────────────────────────────────────────── */
.hero { position:relative; width:100%; height:100vh; min-height:600px; overflow:hidden; display:flex; align-items:stretch; }
.hero-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center 25%; transform-origin:center; animation:kenBurns 22s ease-in-out infinite alternate; z-index:0; }
@keyframes kenBurns { 0%{transform:scale(1.0) translate(0%,0%)} 33%{transform:scale(1.06) translate(-1%,1.5%)} 66%{transform:scale(1.1) translate(1.5%,-1%)} 100%{transform:scale(1.07) translate(-0.5%,0.5%)} }
.hero-gradient { position:absolute; inset:0; z-index:1; background:linear-gradient(to right,rgba(58,48,38,.92) 0%,rgba(58,48,38,.72) 32%,rgba(58,48,38,.3) 58%,transparent 80%); }
.hero-bottom-fade { position:absolute; bottom:0; left:0; right:0; height:160px; z-index:1; background:linear-gradient(to top,rgba(30,22,14,.45),transparent); }
.hero-left { position:relative; z-index:2; width:52%; display:flex; flex-direction:column; justify-content:flex-end; padding:5rem 4rem 6rem 5rem; }
.hero-right { flex:1; position:relative; z-index:2; }
.hero-content { display:flex; flex-direction:column; }
.hero-pre { font-family:var(--font-mono); font-size:.6rem; letter-spacing:.32em; text-transform:uppercase; color:var(--cs-moss-pale); margin-bottom:2.5rem; opacity:0; animation:fadeUp 1s ease .3s forwards; display:flex; align-items:center; gap:.8rem; }
.hero-pre::before { content:''; width:24px; height:1px; background:var(--cs-moss-pale); opacity:.6; }
.hero-manifesto { font-family:var(--font-display); font-size:clamp(2.8rem,4.8vw,5.5rem); font-weight:300; line-height:1.0; letter-spacing:-.02em; color:var(--cs-oat); opacity:0; animation:fadeUp 1.2s ease .6s forwards; text-shadow:0 2px 30px rgba(20,14,8,.3); }
.hero-manifesto em { font-style:italic; color:var(--cs-terra-lt); display:block; }
.hero-manifesto .line-moss { font-style:italic; color:var(--cs-moss-pale); display:block; }
.hero-divider { width:32px; height:1px; background:var(--cs-terracotta); margin:2.5rem 0; opacity:0; animation:fadeIn 1s ease 1.5s forwards; }
.hero-statement { font-family:var(--font-display); font-size:clamp(.9rem,1.2vw,1.1rem); font-style:italic; font-weight:300; color:rgba(242,235,224,.7); max-width:400px; line-height:1.85; margin-bottom:3rem; opacity:0; animation:fadeUp 1s ease 1.7s forwards; }
.hero-actions { display:flex; gap:1.2rem; align-items:center; opacity:0; animation:fadeUp 1s ease 1.9s forwards; flex-wrap:wrap; }
.hero-actions .btn-primary { background:var(--cs-terracotta); color:var(--cs-oat); }
.hero-actions .btn-primary:hover { background:var(--cs-ember); }
.hero-actions .btn-ghost { color:rgba(200,212,186,.8); border:none; padding:0; }
.hero-actions .btn-ghost:hover { color:var(--cs-oat); }
.hero-scroll { position:absolute; bottom:2.5rem; left:50%; transform:translateX(-50%); z-index:3; display:flex; flex-direction:column; align-items:center; gap:.5rem; opacity:0; animation:fadeIn 1s ease 2.5s forwards; }
.hero-scroll span { font-family:var(--font-mono); font-size:.52rem; letter-spacing:.24em; text-transform:uppercase; color:rgba(242,235,224,.3); }
.scroll-line { width:1px; height:48px; background:linear-gradient(to bottom,var(--cs-moss-pale),transparent); animation:scrollPulse 2s ease-in-out infinite; }

@keyframes fadeUp  { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:translateY(0)} }
@keyframes fadeIn  { from{opacity:0} to{opacity:1} }
@keyframes scrollPulse { 0%,100%{opacity:.4;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(1.15)} }
@keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:.3} }

/* ── ABOUT ──────────────────────────────────────────────────── */
.about { background:var(--color-bg); padding:var(--section-pad); display:grid; grid-template-columns:1fr 1.1fr; gap:6rem; align-items:center; }
.about-img-wrap { position:relative; }
.about-img-main { height:560px; overflow:hidden; background:var(--cs-parchment); }
.about-img-main img { width:100%; height:100%; object-fit:cover; }
.about-img-inset { position:absolute; bottom:-2rem; right:-2rem; width:190px; height:190px; overflow:hidden; border:4px solid var(--color-bg); background:var(--cs-sand); }
.about-img-inset img { width:100%; height:100%; object-fit:cover; }
.about-img-tag { position:absolute; top:1.5rem; left:1.5rem; background:rgba(242,235,224,.92); border:1px solid var(--color-border); padding:.5rem 1rem; font-family:var(--font-mono); font-size:.6rem; letter-spacing:.16em; text-transform:uppercase; color:var(--cs-ash); }
.about-content h2 { margin-bottom:1.8rem; }
.about-content p { font-size:.95rem; color:var(--color-muted); line-height:1.95; margin-bottom:1.3rem; }
.about-content p em { font-style:italic; color:var(--cs-ash); font-family:var(--font-display); font-size:1.05rem; }
.about-quote { font-family:var(--font-display); font-size:clamp(1.3rem,1.8vw,1.75rem); font-style:italic; font-weight:300; color:var(--cs-moss); line-height:1.55; border-left:2px solid var(--cs-moss-pale); padding-left:1.8rem; margin:2.5rem 0; }
.rec-row { margin:2.5rem 0; padding:2rem 0; border-top:1px solid var(--cs-moss-pale); border-bottom:1px solid var(--cs-moss-pale); }
.rec-label { font-family:var(--font-mono); font-size:.58rem; letter-spacing:.24em; text-transform:uppercase; color:var(--cs-moss); margin-bottom:1.5rem; }
.rec-items { display:grid; grid-template-columns:1fr 1fr; gap:1.2rem 2rem; }
.rec-item { display:flex; align-items:flex-start; gap:.8rem; }
.rec-mark { color:var(--cs-terracotta); font-size:.8rem; flex-shrink:0; padding-top:.2rem; }
.rec-text { font-family:var(--font-display); font-size:1rem; font-weight:400; color:var(--cs-ash); line-height:1.3; }
.rec-sub  { font-family:var(--font-mono); font-size:.56rem; letter-spacing:.1em; color:var(--cs-smoke); margin-top:.2rem; line-height:1.5; }
.tags { display:flex; flex-wrap:wrap; gap:.5rem; margin-top:2rem; }
.tag { font-family:var(--font-mono); font-size:.58rem; letter-spacing:.14em; text-transform:uppercase; color:var(--color-accent2); border:1px solid var(--cs-moss-pale); padding:.35rem .8rem; background:var(--cs-oat); transition:all .3s; }
.tag:hover { background:var(--cs-moss-pale); border-color:var(--color-accent2); }

/* ── PILLARS ────────────────────────────────────────────────── */
.pillars { display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:auto auto; gap:1px; background:var(--cs-moss); position:relative; overflow:hidden; }
.pillar-block { background:rgba(58,48,38,.88); padding:3.5rem 2.5rem; position:relative; overflow:hidden; transition:background .4s; z-index:1; }
.pillar-block::before { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:var(--cs-moss-pale); transform:scaleX(0); transform-origin:left; transition:transform .5s; }
.pillar-block:hover { background:rgba(72,60,46,.92); }
.pillar-block:hover::before { transform:scaleX(1); }
.pillar-num   { font-family:var(--font-mono); font-size:.58rem; letter-spacing:.2em; color:var(--cs-moss-pale); margin-bottom:2rem; opacity:.7; }
.pillar-title { font-family:var(--font-display); font-size:1.5rem; font-weight:400; color:var(--cs-oat); line-height:1.2; margin-bottom:1.2rem; }
.pillar-body  { font-size:.82rem; color:var(--cs-warm-grey); line-height:1.9; }
.pillar-ghost { display:flex; align-items:center; justify-content:center; padding:2rem; position:relative; overflow:hidden; z-index:1; background:rgba(58,48,38,.55); }

/* ── SERVICES ───────────────────────────────────────────────── */
.services { background:var(--cs-parchment); padding:var(--section-pad); }
.services-header { max-width:640px; margin-bottom:4.5rem; }
.services-header p { font-size:.96rem; color:var(--color-muted); line-height:1.9; margin-top:1.2rem; }
.services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--color-border); }
.service-card { background:var(--cs-oat); padding:2.8rem 2.5rem; transition:background .3s; position:relative; overflow:hidden; }
.service-card::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:var(--cs-moss); transform:scaleX(0); transform-origin:left; transition:transform .4s; }
.service-card:hover { background:var(--cs-parchment); }
.service-card:hover::after { transform:scaleX(1); }
.service-num  { font-family:var(--font-display); font-size:2.8rem; color:var(--cs-sand); line-height:1; margin-bottom:1.5rem; }
.service-title{ font-family:var(--font-display); font-size:1.35rem; font-weight:400; color:var(--cs-ash); margin-bottom:.9rem; line-height:1.25; }
.service-body { font-size:.85rem; color:var(--color-muted); line-height:1.85; }
.service-tags { display:flex; flex-wrap:wrap; gap:.45rem; margin-top:1.8rem; }
.service-tag  { font-family:var(--font-mono); font-size:.58rem; letter-spacing:.12em; text-transform:uppercase; color:var(--cs-ash); background:var(--cs-terra-pale); padding:.28rem .65rem; }

/* ── OUTLETS ────────────────────────────────────────────────── */
.outlets-section-wrap { padding:var(--section-pad); background:#EDF1E8; }
.outlets-header { display:grid; grid-template-columns:1fr 1fr; gap:5rem; margin-bottom:1rem; align-items:end; }
.outlets-header p { font-size:.96rem; color:var(--color-muted); line-height:1.9; }
.outlets-expanded { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--cs-moss-pale); margin-top:3rem; }
.outlet-card { background:#F5F7F2; overflow:hidden; transition:background .3s; position:relative; }
.outlet-card:hover { background:#EDF1E8; }
.outlet-card.featured { grid-column:span 3; }
.outlet-card-body { padding:1.8rem 2rem 2.2rem; }
.outlet-card-type { font-family:var(--font-mono); font-size:.54rem; letter-spacing:.2em; text-transform:uppercase; color:var(--color-accent); margin-bottom:.5rem; display:flex; align-items:center; gap:.5rem; }
.outlet-card-type::before { content:''; width:12px; height:1px; background:var(--color-accent); }
.outlet-card-name { font-family:var(--font-display); font-size:1.4rem; font-weight:400; color:var(--cs-moss); margin-bottom:.6rem; line-height:1.15; }
.outlet-card-desc { font-size:.78rem; color:var(--color-muted); line-height:1.8; }
.outlet-card-awards { font-family:var(--font-mono); font-size:.52rem; letter-spacing:.1em; text-transform:uppercase; color:var(--cs-smoke); margin-top:.9rem; line-height:1.7; display:flex; flex-direction:column; gap:.2rem; }
.outlet-card-awards span { display:flex; align-items:center; gap:.4rem; }
.outlet-card-awards span::before { content:'—'; color:var(--cs-moss-pale); }

/* ── CONTACT ────────────────────────────────────────────────── */
.contact { background:var(--cs-terra-pale); padding:var(--section-pad); }
.contact-inner { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:start; }
.contact-left h2 { margin-bottom:1rem; }
.contact-hook { font-family:var(--font-display); font-size:clamp(1.1rem,1.5vw,1.35rem); font-style:italic; color:var(--cs-terracotta); margin-bottom:1.5rem; line-height:1.6; max-width:380px; }
.contact-detail { display:flex; flex-direction:column; gap:.9rem; }
.contact-item { display:flex; gap:1.2rem; align-items:baseline; }
.contact-item-label { font-family:var(--font-mono); font-size:.58rem; letter-spacing:.16em; text-transform:uppercase; color:var(--color-muted); min-width:80px; }
.contact-item-value { font-family:var(--font-display); font-size:1rem; color:var(--cs-ash); }
.contact-form { display:flex; flex-direction:column; gap:1.3rem; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
.form-group { display:flex; flex-direction:column; gap:.45rem; }
label { font-family:var(--font-mono); font-size:.58rem; letter-spacing:.16em; text-transform:uppercase; color:var(--color-muted); }
input, textarea, select { background:var(--cs-oat); border:1px solid var(--color-border); color:var(--cs-ash); padding:.85rem 1rem; font-family:var(--font-body); font-size:.87rem; font-weight:300; outline:none; transition:border-color .3s; width:100%; resize:none; appearance:none; }
input:focus, textarea:focus, select:focus { border-color:var(--cs-ash); }
input::placeholder, textarea::placeholder { color:var(--color-muted); }
.submit-btn { font-family:var(--font-mono); font-size:.65rem; letter-spacing:.18em; text-transform:uppercase; color:var(--cs-oat); background:var(--color-accent); border:none; padding:1rem 2.2rem; cursor:pointer; transition:background .3s; align-self:flex-start; }
.submit-btn:hover { background:var(--cs-ember); }

/* ── FOOTER ─────────────────────────────────────────────────── */
footer { background:var(--cs-ash); color:var(--cs-warm-grey); padding:2.8rem 5rem; display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(255,255,255,.06); flex-wrap:wrap; gap:1rem; }
.footer-logo { display:flex; align-items:center; gap:.8rem; }
.footer-logo-word { font-family:var(--font-display); font-size:1rem; font-weight:400; letter-spacing:.20em; color:var(--cs-oat); text-transform:uppercase; }
.footer-logo-sub  { font-family:var(--font-mono); font-size:.52rem; letter-spacing:.28em; color:var(--color-accent); text-transform:lowercase; }
.footer-links { display:flex; gap:2rem; list-style:none; flex-wrap:wrap; }
.footer-links a { font-family:var(--font-mono); font-size:.6rem; letter-spacing:.14em; text-transform:uppercase; color:var(--cs-smoke); text-decoration:none; transition:color .3s; }
.footer-links a:hover { color:var(--cs-oat); }
.footer-copy { font-family:var(--font-mono); font-size:.6rem; color:var(--cs-smoke); letter-spacing:.1em; }

/* ══════════════════════════════════════════════════════════════
   RESPONSIVE — MOBILE FIRST
   All breakpoints collapse multi-column to single column,
   reduce padding, and adapt navigation.
   ══════════════════════════════════════════════════════════════ */

/* Tablet (≤ 1024px) */
@media (max-width: 1024px) {
  :root { --section-pad: 5rem 3rem; }

  nav { padding: 1.2rem 2.5rem; }
  .nav-links { gap: 1.2rem; }

  .hero-left { width: 65%; padding: 4rem 3rem 5rem 3rem; }

  .pillars { grid-template-columns: repeat(2,1fr); }

  .about { grid-template-columns: 1fr; gap: 3rem; }
  .about-img-inset { display: none; }
  .about-img-main { height: 400px; }

  .rec-items { grid-template-columns: 1fr; }

  .outlets-header { grid-template-columns: 1fr; gap: 1.5rem; }
  .outlets-expanded { grid-template-columns: 1fr 1fr; }
  .outlet-card.featured { grid-column: span 2; }

  .services-grid { grid-template-columns: 1fr 1fr; }

  .contact-inner { grid-template-columns: 1fr; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
}

/* Mobile (≤ 768px) */
@media (max-width: 768px) {
  :root { --section-pad: var(--section-pad-sm); }

  /* Nav — collapse to hamburger */
  nav { padding: 1rem 1.5rem; }
  .nav-links { display: none; }
  .nav-cta   { display: none; }
  .nav-hamburger { display: flex; }
  .nav-mobile {
    display: none;
    position: fixed;
    top: 60px; left: 0; right: 0;
    background: rgba(242,235,224,.97);
    backdrop-filter: blur(12px);
    padding: 2rem 1.5rem;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 199;
    border-bottom: 1px solid var(--color-border);
  }
  .nav-mobile.open { display: flex; }
  .nav-mobile a { font-family:var(--font-mono); font-size:.75rem; letter-spacing:.18em; text-transform:uppercase; color:var(--cs-ash); text-decoration:none; }
  .nav-mobile .btn-primary { align-self: flex-start; margin-top:.5rem; }

  /* Hero */
  .hero { min-height: 100svh; }
  .hero-left  { width: 100%; padding: 7rem 1.5rem 4rem; }
  .hero-right { display: none; }
  .hero-gradient { background: linear-gradient(to bottom, rgba(58,48,38,.85) 0%, rgba(58,48,38,.5) 60%, transparent 100%); }
  .hero-manifesto { font-size: clamp(2.2rem, 9vw, 3.5rem); }
  .hero-actions { flex-direction: column; align-items: flex-start; }

  /* Pillars */
  .pillars { grid-template-columns: 1fr 1fr; }

  /* About */
  .about-img-main { height: 280px; }

  /* Outlets */
  .outlets-expanded { grid-template-columns: 1fr; }
  .outlet-card.featured { grid-column: span 1; }

  /* Services */
  .services-grid { grid-template-columns: 1fr; }

  /* Contact */
  .contact-inner { grid-template-columns: 1fr; }

  /* Footer */
  footer { flex-direction: column; align-items: flex-start; padding: 2.5rem 1.5rem; gap: 1.5rem; }
  .footer-links { gap: 1rem; }
}

/* Small mobile (≤ 480px) */
@media (max-width: 480px) {
  .pillars { grid-template-columns: 1fr; }
  .rec-items { grid-template-columns: 1fr; }
}
