/**
 * City landing pages for local SEO — /areas/[slug].
 * Keep each blurb genuinely distinct and honest; these are quality pages,
 * not doorway spam. Add a city by adding an entry.
 */
export interface Area {
  slug: string;
  city: string;
  county: string;
  headline: string;
  blurb: string;
  neighborhoods: string[];
}

export const areas: Area[] = [
  {
    slug: 'richmond',
    city: 'Richmond',
    county: 'Fort Bend County',
    headline: 'AV Installation in Richmond, TX',
    blurb:
      "Richmond is home base for us — from the master-planned streets of Harvest Green and Veranda to established Pecan Grove, we're in these neighborhoods constantly. TV mounting, home theaters, and whole-home audio installed clean, with the kind of response time you only get from a local.",
    neighborhoods: ['Harvest Green', 'Veranda', 'Long Meadow Farms', 'Pecan Grove', 'Del Webb Sweetgrass'],
  },
  {
    slug: 'rosenberg',
    city: 'Rosenberg',
    county: 'Fort Bend County',
    headline: 'AV Installation in Rosenberg, TX',
    blurb:
      "Rosenberg mixes historic homes near downtown with brand-new builds off the Brazos — two very different install jobs, and we do both weekly. Older plaster walls get the careful treatment; new construction gets in-wall wiring done right the first time.",
    neighborhoods: ['Bonbrook Plantation', 'Summer Lakes', 'The Reserve at Brazos Town Center', 'Walnut Creek', 'Historic Downtown'],
  },
  {
    slug: 'fulshear',
    city: 'Fulshear',
    county: 'Fort Bend County',
    headline: 'AV Installation in Fulshear, TX',
    blurb:
      "Fulshear's newer estates are built for serious entertainment — media rooms, covered patios, and open living spaces that deserve better than a soundbar on a console. We design and install theaters, outdoor AV, and Wi-Fi that covers acreage lots.",
    neighborhoods: ['Cross Creek Ranch', 'Fulbrook on Fulshear Creek', 'Weston Lakes', 'Jordan Ranch', 'Polo Ranch'],
  },
  {
    slug: 'sugar-land',
    city: 'Sugar Land',
    county: 'Fort Bend County',
    headline: 'AV Installation in Sugar Land, TX',
    blurb:
      "Sugar Land homeowners tend to care about the details — which suits us fine, because details are the job. Level mounts over stone fireplaces, whole-home audio that follows you to the patio, and racks tidy enough to leave the closet door open.",
    neighborhoods: ['Telfair', 'Riverstone', 'First Colony', 'Greatwood', 'New Territory'],
  },
  {
    slug: 'stafford',
    city: 'Stafford',
    county: 'Fort Bend County',
    headline: 'AV Installation in Stafford, TX',
    blurb:
      "Stafford is where our residential and commercial work meet — established neighborhoods on one side, one of the area's busiest business corridors on the other. Home TV mounting and audio, plus conference rooms, digital signage, and restaurant AV for Stafford businesses.",
    neighborhoods: ['Stafford Run', 'Colony Lakes', 'The Grove', 'Promenade at Stafford Run', 'the US-59 business corridor'],
  },
  {
    slug: 'katy',
    city: 'Katy',
    county: 'Harris / Fort Bend County',
    headline: 'AV Installation in Katy, TX',
    blurb:
      "Katy's newer construction is a gift for clean installs — pre-wired media niches, open floor plans, and attics that make in-wall cable runs straightforward. We turn builder-grade living rooms in Cinco Ranch and Cane Island into proper theaters and get Wi-Fi to the upstairs game room without a single visible wire.",
    neighborhoods: ['Cinco Ranch', 'Cane Island', 'Firethorne', 'Seven Meadows', 'Grand Lakes'],
  },
];
