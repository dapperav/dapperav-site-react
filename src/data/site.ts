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
  serviceArea: 'Richmond, TX & surrounding Fort Bend County',
  hours: 'Mon–Fri 8am–6pm · Evenings & weekends by appointment',
};

/**
 * Web3Forms access key — public by design (it only permits sending TO the
 * inbox it was registered with: contact@dapperav.com).
 * Placeholder until Mark provides the real key; the form detects the
 * placeholder and falls back to phone/email guidance instead of failing silently.
 */
export const WEB3FORMS_ACCESS_KEY = '0c3d3eeb-24db-4aca-9eb2-a24cd6a36dca';

/**
 * Analytics & search-engine verification — both optional and off until filled in.
 * GA4_MEASUREMENT_ID: from analytics.google.com → Admin → Data streams (looks like G-XXXXXXXXXX)
 * GOOGLE_SITE_VERIFICATION: from search.google.com/search-console → HTML tag method (content="...")
 */
export const GA4_MEASUREMENT_ID = '';
export const GOOGLE_SITE_VERIFICATION = 'iYv1B2NPcnjfuSLeMi5jD0lzPu2rFpR4vf_iK6AEypU';

export const faqs = [
  {
    q: 'How much does TV mounting cost in the Richmond and Katy area?',
    a: 'Single-TV mounts start at $150 and scale with TV size, wall type (drywall, brick, stone, or tile), and whether you want cables concealed inside the wall. You get an exact itemized price before any work starts — never a surprise on install day.',
  },
  {
    q: 'How much does a home theater installation cost?',
    a: 'Living-room surround systems start around $2,000 installed; dedicated theater rooms with projection, Dolby Atmos, and acoustic treatment scale from there. The free on-site consultation is where we scope what your room and budget actually call for.',
  },
  {
    q: 'Do you do free consultations?',
    a: "Yes — every project starts with a free on-site consultation across our Fort Bend County service area. We look at the room, the walls, and the wiring, then send an itemized quote. No pressure, no obligation.",
  },
  {
    q: 'Can you hide the wires when you mount a TV?',
    a: 'Yes. In-wall cable concealment is our standard for a clean install — power and signal cables route inside the wall so nothing dangles. Where code requires it, we relocate or add an outlet behind the TV.',
  },
  {
    q: 'What areas do you serve?',
    a: 'Richmond, Rosenberg, Fulshear, Sugar Land, Stafford, Katy, and the surrounding communities. Not sure if we reach you? Ask — we can often make it work.',
  },
  {
    q: 'Do you charge a trip fee?',
    a: "Within our regular Fort Bend County service area — never. For simple jobs beyond roughly 50 miles we add a modest trip fee to cover travel time and fuel. It's always quoted up front, never a surprise on the invoice.",
  },
  {
    q: 'Do you handle commercial jobs?',
    a: 'Yes — commercial AV (video walls, signage, conference rooms, restaurant and bar systems) plus managed IT: UniFi networks and cameras, firewall and VLAN configuration, Microsoft 365, and access control. Business work is custom-quoted after a free site survey.',
  },
];

/** Monthly managed-service tiers shown on /business — custom-quoted, no public prices. */
export const carePlans = [
  {
    name: 'Network Care',
    tagline: 'The essentials, watched.',
    features: [
      'UniFi network monitoring & updates',
      'Wi-Fi performance checks & tuning',
      'Firewall & VLAN upkeep',
      'Priority support response',
      'Monthly network health report',
    ],
  },
  {
    name: 'Network + Camera Care',
    tagline: 'Eyes on everything.',
    popular: true,
    features: [
      'Everything in Network Care',
      'UniFi Protect camera health checks',
      'Firmware & storage management',
      'Retention policy upkeep',
      'Footage export when you need it',
    ],
  },
  {
    name: 'Full Stack Care',
    tagline: 'Your entire IT, handled.',
    features: [
      'Everything in Network + Camera Care',
      'Microsoft 365 users, licenses & email',
      'Security baseline & reviews',
      'Access control & door entry management',
      'Quarterly on-site checkup',
    ],
  },
];

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
    price: 'From $150',
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
    price: 'From $2,000',
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
    price: 'From $800',
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
    price: 'From $300',
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
    price: 'From $500',
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
    price: null,
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
  {
    id: 'managed-it',
    title: 'Managed IT & Networking',
    price: null,
    blurb:
      'Your outsourced IT department: UniFi networks and cameras, firewall policies and VLANs, Microsoft 365, and access control — installed, then managed.',
    features: [
      'UniFi network design, install & management',
      'UniFi Protect camera systems',
      'Firewall policies, VLANs & dedicated Wi-Fi',
      'Microsoft 365 tenant setup & user provisioning',
      'Access control, door entry & intercoms',
      'Ongoing monitoring & support plans',
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
    county: 'Fort Bend County',
    cities: ['Richmond', 'Rosenberg', 'Fulshear', 'Sugar Land', 'Stafford'],
  },
  {
    county: 'Katy Area',
    cities: ['Katy', 'Cinco Ranch', 'Cane Island', 'Firethorne'],
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
    'Managed IT / Networking (Business)',
    'Consultation Only',
    'Other',
  ],
  timelines: ['ASAP', '1–2 weeks', 'Within 1 month', '2–3 months', 'Just planning'],
  budgets: ['Under $500', '$500 – $1,500', '$1,500 – $3,000', '$3,000 – $5,000', '$5,000+'],
};
