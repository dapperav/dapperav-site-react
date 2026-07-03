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
    slug: 'houston',
    city: 'Houston',
    county: 'Harris County',
    headline: 'AV Installation in Houston, TX',
    blurb:
      "From high-rise condos inside the Loop to sprawling suburban media rooms, Houston homes come in every shape — and so do their walls. We mount on drywall, brick, stone, and tile, conceal every cable, and design audio and Wi-Fi that actually covers the square footage Houston is famous for.",
    neighborhoods: ['River Oaks', 'Memorial', 'The Heights', 'West University', 'Galleria', 'Midtown'],
  },
  {
    slug: 'katy',
    city: 'Katy',
    county: 'Harris / Fort Bend County',
    headline: 'AV Installation in Katy, TX',
    blurb:
      "Katy's newer construction is a gift for clean installs — pre-wired media niches, open floor plans, and attics that make in-wall cable runs straightforward. We turn builder-grade living rooms in Cinco Ranch and Elyson into proper theaters and get Wi-Fi to the upstairs game room without a single visible wire.",
    neighborhoods: ['Cinco Ranch', 'Elyson', 'Cross Creek Ranch', 'Firethorne', 'Seven Meadows'],
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
    slug: 'cypress',
    city: 'Cypress',
    county: 'Harris County',
    headline: 'AV Installation in Cypress, TX',
    blurb:
      "Big lots, big houses, big expectations for movie night. In Cypress we spend a lot of time on dedicated media rooms and outdoor living — weather-rated TVs under the patio cover, speakers by the pool, and mesh Wi-Fi that reaches the back fence.",
    neighborhoods: ['Bridgeland', 'Towne Lake', 'Fairfield', 'Coles Crossing', 'Cypress Creek Lakes'],
  },
  {
    slug: 'the-woodlands',
    city: 'The Woodlands',
    county: 'Montgomery County',
    headline: 'AV Installation in The Woodlands, TX',
    blurb:
      "Technology in The Woodlands should behave like the town itself: present, but never loud about it. We specialize in installs that disappear into the architecture — invisible speakers, concealed wiring, and lighting scenes that make the house feel effortless.",
    neighborhoods: ['Creekside Park', 'Sterling Ridge', 'Alden Bridge', 'Panther Creek', 'Grogan’s Mill'],
  },
  {
    slug: 'spring',
    city: 'Spring',
    county: 'Harris County',
    headline: 'AV Installation in Spring, TX',
    blurb:
      "Spring and Klein-area homes range from established neighborhoods with plaster walls to brand-new builds off the Grand Parkway — we've got the right mounts, anchors, and fish tape for both. TV mounting, surround sound, and smart home setups done clean and done once.",
    neighborhoods: ['Klein', 'Gleannloch Farms', 'Augusta Pines', 'Harmony', 'Northgate Forest'],
  },
];
