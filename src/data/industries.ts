/**
 * Commercial landing pages — /business/[slug].
 * One page per kind of business buyer, written for what they actually search
 * ("restaurant TV installation Sugar Land", "conference room AV Katy").
 * Keep every claim honest: capabilities only — no invented clients, projects or stats.
 */
import type { ImageMetadata } from 'astro';

export interface Industry {
  slug: string;
  /** Short name for cards and links */
  name: string;
  /** H1 */
  headline: string;
  /** <title> */
  metaTitle: string;
  metaDescription: string;
  intro: string;
  /** What we install — 6 bullets */
  installs: string[];
  /** "How much does … cost?" — answered from costDrivers, never with invented numbers */
  costQuestion: string;
  /** What moves the price on this kind of job (Mark: no published dollar figures) */
  costDrivers: string[];
  /** Why us — exactly 3 */
  reasons: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  /** Optional REAL install photo (never an AI placeholder) */
  photo?: { image: ImageMetadata; alt: string; caption: string };
}

const afterHours = {
  q: 'Can you install without shutting us down?',
  a: 'Yes. Business installs are scheduled around your hours — before open, after close, or on weekends by appointment — so customers and staff never see a ladder.',
};

const carePlanFaq = {
  q: 'Who do we call when something stops working?',
  a: 'Me — the same person who installed it. Every system can be covered by a month-to-month care plan with monitoring and priority response, or you can call for service as needed.',
};

export const industries: Industry[] = [
  {
    slug: 'restaurants-bars',
    name: 'Restaurants & bars',
    headline: 'Restaurant & Bar TVs, Audio and Networks',
    metaTitle: 'Restaurant & Bar TV and Audio Installation | Dapper AV',
    metaDescription:
      'TV walls where any screen shows any game, zoned music and a POS-safe network for Fort Bend County restaurants and bars. Installed after hours.',
    intro:
      "Game day is your busiest day, and that's exactly when a dead TV or a dropped card reader costs you the most. We design the whole room — TVs, sound, and the network underneath — so every seat sees the game, the patio plays its own music, and the POS never shares a network with the guest Wi-Fi.",
    installs: [
      'Multi-TV walls with a video matrix — any source on any screen',
      'Zoned background music: bar, dining room, patio, restrooms',
      'Outdoor-rated TVs and speakers for patios',
      'POS, cameras and guest Wi-Fi on separate, secured networks',
      'UniFi Protect cameras for the register, bar and back door',
      'One simple control for staff — no remote-control roulette',
    ],
    costQuestion: "How much does a restaurant or bar TV and audio install cost?",
    costDrivers: [
      "How many TVs, and how big",
      "Whether you need a video matrix so any source can go to any screen",
      "Wall types and how far cable has to run",
      "How many music zones, and whether the patio needs outdoor speakers",
      "How much network work the POS, cameras and guest Wi-Fi need",
    ],
    reasons: [
      {
        title: 'One vendor for the room and the network',
        body: "The TVs, the music and the network all come from one person, so there's no finger-pointing between the AV company and the IT company when something breaks on a Saturday.",
      },
      {
        title: 'Built for staff, not technicians',
        body: 'Your bartender should change a channel in two taps. Controls are set up and labeled for whoever is on shift.',
      },
      {
        title: 'Installed around service',
        body: 'Work happens before open or after close. You open the next day with a finished room.',
      },
    ],
    faqs: [
      afterHours,
      {
        q: 'Can different TVs show different games?',
        a: 'Yes. With a video matrix any cable box or streaming source can go to any TV or group of TVs, and staff switch them from a tablet or wall panel instead of hunting for the right remote.',
      },
      {
        q: 'Why should the POS be on its own network?',
        a: "Card terminals sharing a network with guest phones is a security and reliability risk. We separate POS, cameras, staff and guest traffic with VLANs and firewall rules so a busy guest network can't slow down or expose your registers.",
      },
      carePlanFaq,
    ],
  },
  {
    slug: 'offices-conference-rooms',
    name: 'Offices & conference rooms',
    headline: 'Conference Room AV and Office IT',
    metaTitle: 'Conference Room AV & Office IT, Fort Bend TX | Dapper AV',
    metaDescription:
      'Conference rooms where Teams and Zoom just work, office Wi-Fi and Microsoft 365 for Fort Bend County businesses. Installed, then managed.',
    intro:
      "A meeting that starts ten minutes late because nobody can get the screen to work costs more than the screen did. We build conference rooms where you walk in, share, and start — and back them with an office network and Microsoft 365 setup managed by someone with IT-director experience.",
    installs: [
      'Conference room displays and video bars for Teams and Zoom',
      'Wireless screen sharing — no cable hunt',
      'Ceiling microphones and speakers for larger rooms',
      'Office Wi-Fi and structured cabling to every desk',
      'Microsoft 365 setup, users, licensing and email security',
      'Network rack, cabling and documentation for the server closet',
    ],
    costQuestion: "How much does a conference room AV setup cost?",
    costDrivers: [
      "Room size and how many people it seats",
      "Display size, and whether you need a video bar or ceiling microphones",
      "Teams or Zoom room licensing",
      "How many desks need cabling or Wi-Fi coverage",
      "Whether Microsoft 365 needs a fresh setup or a migration",
    ],
    reasons: [
      {
        title: 'AV and IT from the same person',
        body: "Conference room problems are usually network or account problems in disguise. When one person owns the room, the network and Microsoft 365, the problem gets fixed instead of passed around.",
      },
      {
        title: 'Simple enough for the first meeting',
        body: 'One way to join, one way to share. Rooms are tested with your people before we call them done.',
      },
      {
        title: 'Managed after install',
        body: 'Firmware, user changes and new hires handled under a month-to-month care plan, so the room still works next year.',
      },
    ],
    faqs: [
      afterHours,
      {
        q: 'Do you work with Microsoft Teams and Zoom?',
        a: 'Yes. Rooms are set up for whichever platform you use — including Microsoft 365 accounts, room licensing, and the network settings that keep calls clear.',
      },
      {
        q: 'Can you take over IT for a small office?',
        a: "Yes — that's what the care plans on our business page are for: network, cameras and Microsoft 365 managed month to month, with one local person who answers the phone.",
      },
      carePlanFaq,
    ],
  },
  {
    slug: 'retail-showrooms',
    name: 'Retail & showrooms',
    headline: 'Retail and Showroom Displays, Audio and Cameras',
    metaTitle: 'Retail & Showroom Displays and Audio | Dapper AV',
    metaDescription:
      'Flush-mounted displays, background music, guest Wi-Fi and cameras for retail stores and showrooms in Richmond, Sugar Land, Katy and Rosenberg.',
    intro:
      "In a showroom the display is part of the design — it should look built in, not bolted on. We mount displays flush and level with no visible wiring, add background music that fills the floor without blasting the counter, and put cameras and guest Wi-Fi on a network you don't have to think about.",
    installs: [
      'Showroom and feature-wall displays with concealed wiring',
      'Product and promo screens on a schedule',
      'Background music zoned for floor, counter and offices',
      'Guest Wi-Fi kept separate from business systems',
      'UniFi Protect cameras with local storage — no per-camera cloud fees',
      'Rack and cabling cleanup for the back office',
    ],
    costQuestion: "How much do retail and showroom displays cost?",
    costDrivers: [
      "How many displays, and whether they mount flush, recessed or standard",
      "Whether screens need scheduled content",
      "How many background-music zones",
      "Square footage the Wi-Fi has to cover",
      "How many cameras, and how many days of recording you want",
    ],
    reasons: [
      {
        title: 'Finish-carpentry standards',
        body: 'Displays recessed or mounted dead level, cables inside the wall, penetrations patched. It should look like it came with the building.',
      },
      {
        title: 'Cameras you own',
        body: 'UniFi Protect records locally, so there are no monthly per-camera cloud fees, and you can still watch from your phone.',
      },
      {
        title: 'One call for everything electronic',
        body: 'Displays, music, Wi-Fi and cameras from one local vendor who knows how they all connect.',
      },
    ],
    faqs: [
      afterHours,
      {
        q: 'Can screens show different content at different times?',
        a: 'Yes. Displays can run scheduled content — promotions during the day, something else after hours — and turn themselves on and off with your store hours.',
      },
      carePlanFaq,
    ],
  },
  {
    slug: 'digital-signage',
    name: 'Digital signage & menu boards',
    headline: 'Digital Signage and Menu Boards',
    metaTitle: 'Digital Signage & Menu Board Installation | Dapper AV',
    metaDescription:
      'Digital menu boards and lobby screens you update from your phone, on a schedule. Installed and supported across Fort Bend County.',
    intro:
      "A printed menu board is out of date the day a price changes. Digital signage lets you change prices, run specials, and swap the lunch menu for dinner on a schedule — from your phone, without a ladder. We install the screens, the players and the network, and set it up so your staff can actually run it.",
    installs: [
      'Digital menu boards for counters and drive-thrus',
      'Lobby, waiting-room and wayfinding displays',
      'Content updated remotely from a phone or computer',
      'Day-part scheduling — breakfast, lunch, dinner, happy hour',
      'Screens that power on and off with your hours',
      'Reliable wired or Wi-Fi connections for every player',
    ],
    costQuestion: "How much does digital signage or a digital menu board cost?",
    costDrivers: [
      "How many screens and media players",
      "Indoor screens, or outdoor-rated and drive-thru displays",
      "The signage software subscription",
      "Whether new power and data runs are needed at each screen",
    ],
    reasons: [
      {
        title: 'The network is half the job',
        body: "Signage fails when the player loses its connection. Because we build networks too, the screens get a connection that doesn't drop.",
      },
      {
        title: 'Your staff runs it',
        body: 'We set up templates and show your team how to change a price or a special in minutes, so you are not paying someone every time the menu changes.',
      },
      {
        title: 'Clean, level, commercial-grade mounts',
        body: 'Rows of screens mounted dead level and evenly spaced, with power and data hidden — the same standard as every other install.',
      },
    ],
    faqs: [
      afterHours,
      {
        q: 'Can I change prices myself?',
        a: 'Yes. Content is managed from a web dashboard, so a price or a special can change from your phone and show up on the screens in minutes.',
      },
      carePlanFaq,
    ],
  },
  {
    slug: "networks-wifi",
    name: "Business Wi-Fi & networks",
    headline: "Business Wi-Fi and Network Installation",
    metaTitle: "Business Wi-Fi & Network Installation, Fort Bend TX | Dapper AV",
    metaDescription: "UniFi business Wi-Fi and networks with POS, cameras, staff and guests kept separate. Installed and managed across Fort Bend County.",
    intro: "Dapper AV Solutions designs and installs UniFi business networks in Richmond, Rosenberg, Sugar Land, Fulshear, Stafford and Katy. Owner Mark Immler, an IT director by day, places access points for your floor plan and keeps the POS, cameras, staff and guests on separate networks, then manages it all if you want.",
    installs: [
      "UniFi access points placed and tuned for your floor plan",
      "Switches, gateway and firewall set up properly",
      "Separate networks (VLANs) for POS, cameras, staff and guests",
      "Guest Wi-Fi that cannot reach business systems",
      "Cabling to every access point",
      "Remote monitoring and updates under a care plan",
    ],
    costQuestion: "How much does business Wi-Fi installation cost?",
    costDrivers: [
      "Square footage, and what the walls are made of",
      "How many access points and switches it takes",
      "Firewall and network segmentation needs",
      "Whether cabling already reaches the access point locations",
      "Whether you want ongoing management under a care plan",
    ],
    reasons: [
      { title: "Designed by an IT director", body: "The network is planned the way an IT department would plan it: documented, segmented and secured, not just plugged in." },
      { title: "Coverage you can count on", body: "Access points are placed for your floor plan and tuned after install, so the back office and the patio both get a signal." },
      { title: "Managed after install", body: "Firmware, monitoring and changes handled under a month-to-month care plan, with one local person who answers." },
    ],
    faqs: [
      afterHours,
      { q: "Why should the POS be on its own network?", a: "Card terminals sharing a network with guest phones is a security and reliability risk. Separate networks and firewall rules keep a busy guest network from slowing down or exposing your registers." },
      carePlanFaq,
    ],
  },
  {
    slug: "structured-cabling",
    name: "Structured cabling & low voltage",
    headline: "Structured Cabling and Low-Voltage Installation",
    metaTitle: "Structured Cabling & Low Voltage, Fort Bend TX | Dapper AV",
    metaDescription: "Data drops, racks and low-voltage rough-in for new builds and remodels in Fort Bend County. Clean, labeled and documented, as your sub or direct.",
    intro: "Dapper AV Solutions runs the low-voltage side of commercial builds and remodels in Richmond, Rosenberg, Sugar Land, Fulshear, Stafford and Katy: data cabling, racks, and the pre-wire for TVs, speakers, Wi-Fi and cameras. General contractors and electricians get one sub for everything with a cable; owners get it labeled and documented.",
    installs: [
      "Cat6 data drops, jacks and patch panels",
      "Network racks with clean cable management",
      "Pre-wire for TVs, speakers, Wi-Fi access points and cameras",
      "Rough-in at framing, trim-out after paint",
      "Labeling and as-built documentation at closeout",
      "Retrofits in finished spaces with patched penetrations",
    ],
    costQuestion: "How much does structured cabling cost?",
    costDrivers: [
      "How many drops, and how far each run is",
      "Open framing, or finished walls and ceilings",
      "Rack, patch panel and cable management needs",
      "How many floors, and how the runs get between them",
      "How the work is phased around the build schedule",
    ],
    reasons: [
      { title: "One sub for everything with a cable", body: "Data, Wi-Fi, cameras, TVs and speakers come from one sub, so there is no coordination between three low-voltage trades at the end of the job." },
      { title: "On the schedule", body: "Rough-in when the walls are open and trim-out after paint. You get a walkthrough and documentation at closeout, not a punch list." },
      { title: "Support after the job", body: "Your client gets a local contact and an optional care plan, so the Wi-Fi calls don't come back to you." },
    ],
    faqs: [
      { q: "Do you work as a subcontractor?", a: "Yes. I work under general contractors and electricians on the low-voltage scope, or directly for owners on retrofits." },
      { q: "Can you cable a space that is already finished?", a: "Yes. Retrofits in finished spaces are routine; runs go through attics, ceilings and walls, and every penetration is patched." },
      carePlanFaq,
    ],
  },
];
