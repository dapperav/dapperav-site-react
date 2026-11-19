/**
 * Credited photos of the GEAR Dapper AV installs (not Dapper AV jobs).
 * Always caption them as the equipment, never as an install, and keep the credit visible.
 */
import type { ImageMetadata } from 'astro';
import switchImg from '../assets/gear/switch.jpg';
import apImg from '../assets/gear/unifi-ac-lite-access-point.jpg';
import sonosImg from '../assets/gear/sonos-one-speaker-49671374307.jpg';
import credits from '../../design-system/gear/credits.json';

export type GearKey = 'switch' | 'ap' | 'sonos';

export interface Gear {
  image: ImageMetadata;
  name: string;
  alt: string;
  /** what the photo stands for on this site */
  note: string;
  credit: { title: string; creator: string; license: string; licenseUrl: string; page: string; via: string };
  pos?: string;
}

const credit = (file: string) => {
  const c = credits.find((x) => x.file.endsWith(file))!;
  return { title: c.title, creator: c.creator, license: c.license, licenseUrl: c.licenseUrl, page: c.page, via: c.via };
};

export const gear: Record<GearKey, Gear> = {
  switch: {
    image: switchImg,
    name: 'Labeled patch cables on a network switch',
    alt: 'Rows of blue patch cables plugged into a network switch, each cable wearing a printed label',
    note: 'Every cable labeled, so the next person can tell which one is which. The standard I hold a closet to.',
    credit: credit('switch.jpg'),
  },
  ap: {
    image: apImg,
    name: 'A UniFi access point on the ceiling',
    alt: 'A white round UniFi access point with a glowing blue ring, mounted high on a wall near the ceiling',
    note: 'The Ubiquiti UniFi access points I install and manage for business Wi-Fi.',
    credit: credit('unifi-ac-lite-access-point.jpg'),
    pos: '50% 28%',
  },
  sonos: {
    image: sonosImg,
    name: 'A Sonos One speaker',
    alt: 'A black Sonos One speaker on a white shelf beside a pencil cup',
    note: 'Sonos is one of the systems I install for background music and whole-home audio.',
    credit: credit('sonos-one-speaker-49671374307.jpg'),
    pos: '30% 50%',
  },
};
