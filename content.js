/**
 * ============================================================
 * CULTIVATE STUDIO — content.js
 *
 * THIS IS THE FILE YOU EDIT TO UPDATE THE WEBSITE.
 *
 * Change text, add outlets, update recognition badges,
 * swap contact details — all in this one file.
 * No HTML, no CSS, no code knowledge needed.
 *
 * After editing, save the file and push to GitHub.
 * Cloudflare Pages will automatically rebuild the site.
 * ============================================================
 */

export const siteContent = {

  // ── META ────────────────────────────────────────────────────
  meta: {
    title:       'Cultivate Studio — R&D, Research & Concept Creation',
    description: 'Culinary research, concept development, and fine dining consultancy by Marco Turatti.',
    url:         'https://cultivatestudio.com',
  },

  // ── NAV ─────────────────────────────────────────────────────
  nav: {
    links: [
      { label: 'The Studio',    href: '#about' },
      { label: 'Intelligence',  href: '#intelligence' },
      { label: 'R&D',           href: '#studio-work' },
      { label: 'Sustainability', href: '#sustainability' },
      { label: 'Our Work',      href: '#outlets' },
      { label: 'Consulting',    href: '#services' },
      { label: 'Contact',       href: '#contact' },
    ],
    cta: { label: 'Start a Project', href: '#contact' },
  },

  // ── HERO ────────────────────────────────────────────────────
  hero: {
    eyebrow:   'Culinary Research & Concept Development',
    line1:     'Where concepts',
    line2:     'become food.',
    line3:     'Where research',
    line4:     'becomes culture.',
    statement: 'A culinary studio operating at the intersection of ingredient research, fermentation science, and concept architecture.',
    cta1:      { label: 'Explore The Studio', href: '#about' },
    cta2:      { label: 'Start a Project',    href: '#contact' },
  },

  // ── ABOUT / RECOGNITION ─────────────────────────────────────
  about: {
    eyebrow: 'The Studio',
    title:   'Built on research. Driven by ingredient.',
    bio: [
      'Cultivate Studio is the creative and research practice of Marco Turatti — Executive Chef, culinary researcher, and concept director with 16+ years across fine dining, luxury hospitality, and Southeast Asia.',
      'The Studio develops culinary concepts from zero: brief, pillars, menu language, sourcing frameworks, and team direction. It runs the R&D program at InterContinental Phuket Resort, oversees seven outlets including Michelin-listed and World\'s 50 Best Discovery recognised restaurants, and consults on F&B strategy across IHG brands in the region.',
      'Every project begins with an ingredient no one else is paying attention to.',
    ],
    quote: '"Every concept begins with an ingredient no one else is paying attention to."',
    tags: [
      'Fermentation', 'Fire Techniques', 'Thai Cuisine', 'Japanese Cuisine',
      'Farm-to-Table', 'Invasive Species', 'Concept Architecture', 'Team Direction',
    ],

    // ── Update recognition badges here ──────────────────────
    recognition: [
      {
        badge:    'michelin-key',   // 'michelin-key' | 'michelin-star' | 'w50b' | 'tatler' | 'ihg' | 'wwf' | 'custom'
        title:    '2 Michelin Keys · Hotel Award',
        sub:      'InterContinental Phuket Resort · 2024',
        fullWidth: true,
      },
      {
        badge:    'michelin-star',
        title:    'Michelin Guide 2024',
        sub:      'Jaras & hom · InterContinental Phuket Resort',
      },
      {
        badge:    'w50b',
        title:    "World's 50 Best Discovery · hom",
        sub:      'T+L Tastemaker · Tatler Asia\'s 100 Best · Tatler Thailand Best',
      },
      {
        badge:    'tatler',
        title:    'Tatler Best · Asia',
        sub:      "Tatler Asia's 100 Best · Tatler Thailand Best · hom, Phuket",
        fullWidth: true,
      },
      {
        badge:    'wwf',
        title:    'WWF Partnership',
        sub:      'Invasive Species Program · Southern Thailand',
      },
      {
        badge:    'ihg',
        title:    'IHG F&B Strategy',
        sub:      'Regional Consultant · Southeast Asia',
      },
    ],
  },

  // ── PILLARS ──────────────────────────────────────────────────
  pillars: [
    {
      num:   '01',
      title: 'Research',
      body:  'Ingredient provenance, fermentation science, fire techniques, invasive species, and global culinary movements. The Studio tracks what matters before it peaks.',
    },
    {
      num:   '02',
      title: 'Concept',
      body:  'Brief, pillars, menu language, spatial identity, and team culture. Every concept built from the ground up with a clear point of view.',
    },
    {
      num:   '03',
      title: 'Development',
      body:  'R&D in live kitchen environments. Fermentation programs, koji cultures, botanical extractions, fire testing. Ideas made edible.',
    },
    {
      num:   '04',
      title: 'Direction',
      body:  'Team training, menu engineering, sourcing frameworks, and ongoing creative direction for multiple outlets simultaneously.',
    },
  ],

  // ── R&D CARDS ────────────────────────────────────────────────
  rdCards: [
    {
      label:   'R&D · Fermentation & Preservation',
      title:   'Building flavour from the ground up',
      desc:    'Across InterContinental Phuket Resort, The Studio runs an active fermentation program producing tomato vinegar, jackfruit vinegar, mangostein vinegar, plum vinegar, and dozens of other live cultures — all from locally sourced Thai ingredients. These are not garnishes. They are the flavour architecture of the menus, replacing imported acids and umami sources with something alive and specific to this place.',
      status:  'Active program · IC Phuket Resort',
      wide:    true,  // spans 2 columns
    },
    {
      label:   'R&D · Koji & Miso Development',
      title:   'Koji, miso & amino pastes',
      desc:    "Carrot mustard miso, stinky bean miso, sunflower peaso — The Studio's koji and miso program applies Japanese fermentation technique to Southern Thai ingredients. Every paste is labelled, dated, and tracked through its full fermentation arc.",
      status:  'Active · IC Phuket fermentation lab',
    },
    {
      label:   'R&D · Live Culture Research',
      title:   'Inside the fermentation jar',
      desc:    'Buckwheat shrimp tamari, lacto-fermented vegetables, garum in development. Each jar is a live experiment — documented, observed, tasted weekly. The results inform both the menu and future projects.',
      status:  'Active · ongoing documentation',
    },
    {
      label:   'R&D · Koji Culture',
      title:   'Growing koji on local grains',
      desc:    'Aspergillus oryzae cultivated on Thai jasmine rice, barley, and corn. Each batch produces the enzymes that unlock umami across the menu — a living culture replacing imported ingredients entirely.',
      status:  'Live culture · Phuket lab',
    },
    {
      label:   'R&D · Ingredient Extraction',
      title:   'Infusions & extractions',
      desc:    'Wild herb infusions, botanical extractions, and preserved aromatics. Southern Thai botanicals captured at peak and held — for sauces, dressings, and beverage applications across multiple outlets.',
      status:  'Active · seasonal program',
    },
    {
      label:   'R&D → Plate · IC Phuket',
      title:   'From lab to service',
      desc:    'Wood sorrel, micro herbs, red weaver ants. The research becomes the dish. Every element on this plate went through the R&D process — sourced, tested, fermented, refined, then placed with intention.',
      status:  'Live menu · Michelin-listed hom & Jaras',
      wide:    true,  // spans full row
      fullRow: true,
    },
  ],

  // ── OUTLETS ──────────────────────────────────────────────────
  // Add, remove, or reorder outlets here.
  outlets: [
    {
      slug:     'jaras',
      name:     'Jaras',
      type:     'Thai Fine Dining',
      desc:     'Southern Thai fine dining rooted in ancient recipes, local produce, and regional technique. The flagship concept at IC Phuket.',
      awards:   ['Michelin Guide Listed 2024', "World's 50 Best Discovery"],
      featured: false,
      accentColor: 'var(--cs-moss)',
    },
    {
      slug:     'hom',
      name:     'hom',
      type:     'Progressive Thai',
      desc:     'A research-led progressive Thai experience. Every dish built from the fermentation lab up — live cultures, foraging, and fire.',
      awards:   ['Michelin Guide Listed 2024', "World's 50 Best Discovery", 'Tatler Asia Best'],
      featured: false,
      accentColor: 'var(--cs-terracotta)',
    },
    {
      slug:     'tengoku',
      name:     'Tengoku',
      type:     'Japanese Robatayaki',
      desc:     'Japanese robata grill and izakaya. Fire-forward cooking with premium imports and local seafood.',
      awards:   [],
      featured: false,
      accentColor: '#6A5FA0',
    },
    {
      slug:     'pinto',
      name:     'Pinto',
      type:     'All-Day Dining',
      desc:     'All-day dining with Thai and international breadth. High-volume, guest-first, consistently executed.',
      awards:   [],
      featured: false,
      accentColor: 'var(--cs-terracotta)',
    },
    {
      slug:     'pine-beach',
      name:     'Pine Beach Bar',
      type:     'Beachfront Bar',
      desc:     'Casual beachfront dining and cocktails. Sunset-driven, ingredient-led, consistently high standard.',
      awards:   [],
      featured: false,
      accentColor: 'var(--cs-moss)',
    },
    {
      slug:     '333',
      name:     '333 at the Beach',
      type:     'Beachfront Restaurant',
      desc:     'Relaxed beachfront dining with fresh seafood and local produce. Built for the Phuket guest experience.',
      awards:   [],
      featured: false,
      accentColor: '#C2744A',
    },
    {
      slug:     'devas',
      name:     "Devas' Lounge",
      type:     'Lobby Lounge',
      desc:     'Curated afternoon tea, cocktails, and light dining in the resort lobby. Refined and effortless.',
      awards:   [],
      featured: false,
      accentColor: 'var(--cs-sand)',
    },
    {
      slug:     'sipping-tiger',
      name:     'Sipping Tiger',
      type:     'Cocktail Bar',
      desc:     'Craft cocktail bar with a botanicals-first approach. Local ingredients, fermented spirits, and original serves.',
      awards:   [],
      featured: false,
      accentColor: 'var(--cs-moss)',
    },
    {
      slug:     'in-room',
      name:     'In-Room Dining',
      type:     '24h Room Service',
      desc:     '24-hour in-room dining. Consistent quality from first light to late night across all 179 rooms and villas.',
      awards:   [],
      featured: false,
      accentColor: 'var(--cs-warm-grey)',
    },
  ],

  // ── SERVICES ─────────────────────────────────────────────────
  services: [
    {
      num:   '01',
      title: 'Concept Creation',
      body:  'Full concept development from brief to opening — brand language, menu architecture, kitchen design input, sourcing strategy, and team direction.',
      tags:  ['Zero-to-one', 'Menu Architecture', 'Brand Language', 'Opening Strategy'],
    },
    {
      num:   '02',
      title: 'R&D Programs',
      body:  'Building in-house fermentation labs, koji programs, ingredient research systems, and seasonal preservation frameworks for hotels and restaurants.',
      tags:  ['Fermentation', 'Koji & Miso', 'Ingredient Research', 'Lab Setup'],
    },
    {
      num:   '03',
      title: 'Culinary Direction',
      body:  'Ongoing creative direction for existing concepts — menu evolution, seasonal updates, team training, and quality benchmarking for multi-outlet operations.',
      tags:  ['Menu Engineering', 'Team Training', 'Quality Systems', 'Multi-Outlet'],
    },
    {
      num:   '04',
      title: 'Sustainability Frameworks',
      body:  'Farm network development, local sourcing programs, invasive species integration, and sustainability reporting for luxury hospitality groups.',
      tags:  ['Farm Networks', 'Local Sourcing', 'Invasive Species', 'ESG Reporting'],
    },
    {
      num:   '05',
      title: 'F&B Strategy',
      body:  'Portfolio-level F&B strategy for hotel groups and resort operators — positioning, competitive analysis, concept gap mapping, and revenue optimisation.',
      tags:  ['Portfolio Strategy', 'Revenue Optimisation', 'Concept Gap Analysis', 'Hotel Groups'],
    },
    {
      num:   '06',
      title: 'Content & Identity',
      body:  'Defining the visual and editorial identity of a restaurant concept for social media — content pillars, photography direction, story angles, and platform strategy.',
      tags:  ['Content Strategy', 'Photography Direction', 'Social Media', 'Brand Identity'],
    },
  ],

  // ── CONTACT ──────────────────────────────────────────────────
  contact: {
    title:  'Start a conversation.',
    hook:   'Every project starts with a question: what does this place actually want to be?',
    body:   'The Studio takes on a limited number of projects each year. If you\'re building something worth building, let\'s talk.',
    email:  'marco@cultivatestudio.com',
    based:  'Phuket, Thailand · Available globally',
    enquiryTypes: [
      'Concept Development',
      'R&D Program',
      'Culinary Direction',
      'Sustainability Framework',
      'F&B Strategy',
      'Other',
    ],
  },

  // ── FOOTER ───────────────────────────────────────────────────
  footer: {
    copy: `© ${new Date().getFullYear()} Cultivate Studio. All rights reserved.`,
    links: [
      { label: 'Privacy',  href: '/privacy' },
      { label: 'Contact',  href: '#contact' },
      { label: 'LinkedIn', href: 'https://linkedin.com' },
      { label: 'Instagram',href: 'https://instagram.com' },
    ],
  },

}
