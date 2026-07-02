/**
 * Single source of truth for business facts and page content.
 * Update copy, services, and gallery entries here — not inside components.
 */

export const site = {
  name: 'Dapper AV Solutions',
  shortName: 'Dapper AV',
  tagline: 'Professional, precise, and personal AV solutions for homes and businesses.',
  url: 'https://dapperav.com',
  phone: '(972) 824-1303',
  phoneHref: 'tel:+19728241303',
  smsHref: 'sms:+19728241303',
  email: 'contact@dapperav.com',
  serviceArea: 'Greater Houston Area',
  hours: 'Mon–Fri 8am–6pm · Evenings & weekends by appointment',
};

/**
 * Web3Forms access key — public by design (it only permits sending TO the
 * inbox it was registered with: contact@dapperav.com).
 * Placeholder until Mark provides the real key; the form detects the
 * placeholder and falls back to phone/email guidance instead of failing silently.
 */
export const WEB3FORMS_ACCESS_KEY = 'REPLACE_WITH_WEB3FORMS_ACCESS_KEY';

export const commitments = [
  {
    title: 'Owner-operated',
    body: 'The person who quotes your project is the person who shows up and installs it. No subcontractor roulette.',
  },
  {
    title: 'Free on-site consultations',
    body: 'We look at the room, the walls, and the wiring before we quote — so the number you get is the number you pay.',
  },
  {
    title: 'Transparent pricing',
    body: 'Up-front, itemized quotes. No hidden fees, no surprise add-ons on install day.',
  },
  {
    title: 'Clean, damage-free installs',
    body: 'Concealed cabling, patched and painted penetrations, and a spotless room when we leave.',
  },
];

export const services = [
  {
    id: 'tv-mounting',
    title: 'TV Mounting & Installation',
    price: '$150 – $400',
    blurb:
      'Any TV, any wall — drywall, brick, stone, or tile — mounted dead level with cables concealed in-wall.',
    features: [
      'Wall mounting on drywall, brick, stone & tile',
      'In-wall cable concealment',
      'Soundbar & subwoofer placement',
      'Remote programming & setup',
      'Safety anchoring & weight distribution',
      'Post-install calibration',
    ],
    category: 'residential',
  },
  {
    id: 'home-theater',
    title: 'Home Theater Systems',
    price: '$2,000 – $15,000+',
    blurb:
      'Dedicated theaters and living-room cinemas: projection, Dolby Atmos, acoustic treatment, and one-remote control.',
    features: [
      'Projector & screen installation',
      '5.1, 7.1 & Dolby Atmos surround',
      'Automation & remote programming',
      'Acoustic treatment',
      'Media streaming integration',
      'Professional calibration',
    ],
    category: 'residential',
  },
  {
    id: 'whole-home-audio',
    title: 'Whole Home Audio',
    price: '$800 – $5,000+',
    blurb:
      'Multi-zone music that follows you room to room — in-ceiling, in-wall, and outdoor speakers, controlled from your phone.',
    features: [
      'Multi-zone audio design',
      'Sonos, HEOS & wireless integration',
      'In-ceiling / in-wall speakers',
      'Outdoor & patio speakers',
      'Central amplification',
      'Voice control & smart-home tie-in',
    ],
    category: 'residential',
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    price: '$300 – $3,000+',
    blurb:
      'Lighting, climate, cameras, locks, and voice control — programmed into scenes that actually get used.',
    features: [
      'Smart lighting & dimmers',
      'Thermostat & climate control',
      'Security cameras & video doorbells',
      'Smart locks',
      'Alexa & Google voice assistants',
      'Scene programming',
    ],
    category: 'residential',
  },
  {
    id: 'networks',
    title: 'Smart Networks & Wi-Fi',
    price: '$500 – $2,500',
    blurb:
      'Wi-Fi that reaches every corner: professionally placed access points, structured cabling, and secure guest networks.',
    features: [
      'Wi-Fi 6/6E mesh design',
      'Professional access-point placement',
      'Ethernet & structured cabling',
      'Network security & guest networks',
      'IoT device integration',
      'Remote monitoring',
    ],
    category: 'residential',
  },
  {
    id: 'commercial',
    title: 'Commercial AV Solutions',
    price: '$1,000 – $25,000+',
    blurb:
      'Video walls, conference rooms, restaurant and bar entertainment — designed, installed, and serviced under contract.',
    features: [
      'Video walls & digital signage',
      'Conference room AV',
      'Restaurant & bar entertainment',
      'Retail audio & background music',
      'Paging systems',
      'Service contracts',
    ],
    category: 'commercial',
  },
];

export const process = [
  {
    step: '01',
    title: 'Consultation',
    body: 'We visit your space, listen to how you want to use it, and take real measurements — free of charge.',
  },
  {
    step: '02',
    title: 'Design & quote',
    body: 'You get an itemized proposal with equipment options at honest price points. No pressure, no padding.',
  },
  {
    step: '03',
    title: 'Installation',
    body: 'Clean, precise work — concealed wiring, level mounts, tidy racks — done when we say it will be done.',
  },
  {
    step: '04',
    title: 'Calibration & walkthrough',
    body: 'We tune the picture and sound, program the remotes, and walk you through everything before we leave.',
  },
];

export const serviceAreas = [
  {
    county: 'Harris County',
    cities: ['Houston', 'Sugar Land', 'Katy', 'Cypress', 'Spring', 'Tomball'],
  },
  {
    county: 'Fort Bend County',
    cities: ['Richmond', 'Rosenberg', 'Missouri City', 'Stafford', 'Pearland'],
  },
  {
    county: 'Montgomery County',
    cities: ['The Woodlands', 'Conroe', 'Montgomery', 'Magnolia', 'Willis'],
  },
  {
    county: 'Surrounding Areas',
    cities: ['Galveston County', 'Liberty County', 'Waller County', 'Brazoria County'],
  },
];

export const quoteFormOptions = {
  services: [
    'TV Mounting & Installation',
    'Home Theater',
    'Whole Home Audio',
    'Smart Home Automation',
    'Network & Wi-Fi',
    'Commercial AV',
    'Consultation Only',
    'Other',
  ],
  timelines: ['ASAP', '1–2 weeks', 'Within 1 month', '2–3 months', 'Just planning'],
  budgets: ['Under $500', '$500 – $1,500', '$1,500 – $3,000', '$3,000 – $5,000', '$5,000+'],
};
