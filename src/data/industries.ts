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
    metaTitle: 'Restaurant & Bar TV, Audio & Network Installation — Richmond, Sugar Land & Katy, TX | Dapper AV',
    metaDescription:
      'TV walls that put any game on any screen, zoned music for bar, dining room and patio, and a POS-safe network with guest Wi-Fi — installed after hours across Fort Bend County. Free site survey.',
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
    metaTitle: 'Conference Room AV, Office Wi-Fi & Microsoft 365 — Sugar Land, Stafford & Katy, TX | Dapper AV',
    metaDescription:
      'Conference rooms where Teams and Zoom just work, office Wi-Fi that reaches every desk, Microsoft 365 set up right, and door access — installed and managed across Fort Bend County.',
    intro:
      "A meeting that starts ten minutes late because nobody can get the screen to work costs more than the screen did. We build conference rooms where you walk in, share, and start — and back them with an office network and Microsoft 365 setup managed by someone with IT-director experience.",
    installs: [
      'Conference room displays and video bars for Teams and Zoom',
      'Wireless screen sharing — no cable hunt',
      'Ceiling microphones and speakers for larger rooms',
      'Office Wi-Fi and structured cabling to every desk',
      'Microsoft 365 setup, users, licensing and email security',
      'Door access and entry intercoms tied to your network',
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
        a: "Yes — that's what the care plans on our business page are for: network, cameras, Microsoft 365 and access control managed month to month, with one local person who answers the phone.",
      },
      carePlanFaq,
    ],
  },
  {
    slug: 'retail-showrooms',
    name: 'Retail & showrooms',
    headline: 'Retail and Showroom Displays, Audio and Cameras',
    metaTitle: 'Retail & Showroom Displays, Background Audio & Cameras — Fort Bend County, TX | Dapper AV',
    metaDescription:
      'Showroom displays mounted flush and clean, background music, guest Wi-Fi and UniFi Protect cameras for retail stores and dealerships in Richmond, Rosenberg, Sugar Land and Katy.',
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
    metaTitle: 'Digital Signage & Digital Menu Board Installation — Richmond, Sugar Land & Katy, TX | Dapper AV',
    metaDescription:
      'Digital menu boards, lobby displays and promo screens that you update from your phone and that turn on and off with your hours. Installed and supported across Fort Bend County.',
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
];
