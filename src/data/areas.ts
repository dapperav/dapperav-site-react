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
  /** Business-first copy (commercial is the priority). Honest: places, not invented clients. */
  blurb: string;
  /** The residential copy, shown under "For homes in {city}" */
  homeBlurb: string;
  neighborhoods: string[];
}

export const areas: Area[] = [
  {
    slug: 'richmond',
    city: 'Richmond',
    county: 'Fort Bend County',
    headline: 'Commercial AV & IT in Richmond, TX',
    blurb:
      "Richmond is home base for Dapper AV. For restaurants, offices and shops from downtown Richmond out along FM 359 and the Grand Parkway, we design and install TV walls, background music, business Wi-Fi and cameras, then keep them running. The person who surveys your site lives down the road.",
    homeBlurb:
      "Richmond is home base for us — from the master-planned streets of Harvest Green and Veranda to established Pecan Grove, we're in these neighborhoods constantly. TV mounting, home theaters, and whole-home audio installed clean, with the kind of response time you only get from a local.",
    neighborhoods: ['Harvest Green', 'Veranda', 'Long Meadow Farms', 'Pecan Grove', 'Del Webb Sweetgrass'],
  },
  {
    slug: 'rosenberg',
    city: 'Rosenberg',
    county: 'Fort Bend County',
    headline: 'Commercial AV & IT in Rosenberg, TX',
    blurb:
      "Rosenberg businesses range from the historic storefronts on Avenue H to new pads around Brazos Town Center and the I-69 corridor. Older buildings get careful cabling that respects the walls; new builds get the low-voltage pre-wire done right while the walls are open.",
    homeBlurb:
      "Rosenberg mixes historic homes near downtown with brand-new builds off the Brazos — two very different install jobs, and we do both weekly. Older plaster walls get the careful treatment; new construction gets in-wall wiring done right the first time.",
    neighborhoods: ['Bonbrook Plantation', 'Summer Lakes', 'The Reserve at Brazos Town Center', 'Walnut Creek', 'Historic Downtown'],
  },
  {
    slug: 'fulshear',
    city: 'Fulshear',
    county: 'Fort Bend County',
    headline: 'Commercial AV & IT in Fulshear, TX',
    blurb:
      "Fulshear is adding restaurants, offices and retail fast along FM 1093 and FM 359. New construction is the best time to get TVs, speakers, Wi-Fi and cameras planned, so we work with owners and builders to pre-wire before the drywall goes up.",
    homeBlurb:
      "Fulshear's newer estates are built for serious entertainment — media rooms, covered patios, and open living spaces that deserve better than a soundbar on a console. We design and install theaters, outdoor AV, and Wi-Fi that covers acreage lots.",
    neighborhoods: ['Cross Creek Ranch', 'Fulbrook on Fulshear Creek', 'Weston Lakes', 'Jordan Ranch', 'Polo Ranch'],
  },
  {
    slug: 'sugar-land',
    city: 'Sugar Land',
    county: 'Fort Bend County',
    headline: 'Commercial AV & IT in Sugar Land, TX',
    blurb:
      "Sugar Land has one of the busiest business districts in Fort Bend County, from the offices along US-59 and Highway 6 to the restaurants around Sugar Land Town Square. We install conference rooms that just work, menu boards and TV walls, and business networks that keep the POS off the guest Wi-Fi.",
    homeBlurb:
      "Sugar Land homeowners tend to care about the details — which suits us fine, because details are the job. Level mounts over stone fireplaces, whole-home audio that follows you to the patio, and racks tidy enough to leave the closet door open.",
    neighborhoods: ['Telfair', 'Riverstone', 'First Colony', 'Greatwood', 'New Territory'],
  },
  {
    slug: 'stafford',
    city: 'Stafford',
    county: 'Fort Bend County',
    headline: 'Commercial AV & IT in Stafford, TX',
    blurb:
      "Stafford's US-59 corridor is lined with offices, warehouses and restaurants, which is where our commercial work and IT background meet. Conference rooms, wide-area warehouse Wi-Fi, cameras and digital signage, installed and then managed under a month-to-month plan.",
    homeBlurb:
      "Stafford is where our residential and commercial work meet — established neighborhoods on one side, one of the area's busiest business corridors on the other. Home TV mounting and audio, plus conference rooms, digital signage, and restaurant AV for Stafford businesses.",
    neighborhoods: ['Stafford Run', 'Colony Lakes', 'The Grove', 'Promenade at Stafford Run', 'the US-59 business corridor'],
  },
  {
    slug: 'katy',
    city: 'Katy',
    county: 'Harris / Fort Bend County',
    headline: 'Commercial AV & IT in Katy, TX',
    blurb:
      "Katy's commercial growth runs along I-10 and the Grand Parkway, from LaCenterra at Cinco Ranch to the new centers going up farther west. Restaurants, offices and retail get TV walls, music, business Wi-Fi and cameras from one local installer who also runs IT.",
    homeBlurb:
      "Katy's newer construction is a gift for clean installs — pre-wired media niches, open floor plans, and attics that make in-wall cable runs straightforward. We turn builder-grade living rooms in Cinco Ranch and Cane Island into proper theaters and get Wi-Fi to the upstairs game room without a single visible wire.",
    neighborhoods: ['Cinco Ranch', 'Cane Island', 'Firethorne', 'Seven Meadows', 'Grand Lakes'],
  },
];
