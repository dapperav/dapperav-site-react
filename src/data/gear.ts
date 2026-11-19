/**
 * Photos of the GEAR and kinds of rooms Dapper AV works on (not Dapper AV jobs).
 * Always caption them as the equipment or the kind of space, never as an install.
 * Stock photos under the Unsplash License (see assets/stock/sources.json): no credit required.
 */
import type { ImageMetadata } from 'astro';
import portsImg from '../assets/stock/switch-ports.jpg';
import runsImg from '../assets/stock/cable-runs.jpg';
import panelImg from '../assets/stock/patch-panel.jpg';
import meetingImg from '../assets/stock/meeting-room.jpg';
import barImg from '../assets/stock/sports-bar.jpg';
import barTvImg from '../assets/stock/bar-tv-wall.jpg';
import cameraImg from '../assets/stock/pole-cameras.jpg';

export type GearKey = 'ports' | 'runs' | 'panel' | 'meeting' | 'bar' | 'barTv' | 'camera';

export interface Gear {
  image: ImageMetadata;
  name: string;
  alt: string;
  /** what the photo stands for on this site */
  note: string;
  pos?: string;
}

export const gear: Record<GearKey, Gear> = {
  ports: {
    image: portsImg,
    name: 'Ethernet into a network switch',
    alt: 'Ethernet cables plugged into the numbered ports of a network switch on a wooden desk, in warm light',
    note: 'Wired where it matters: every port numbered and every cable going somewhere you can name.',
  },
  runs: {
    image: runsImg,
    name: 'Cable runs, dressed and bundled',
    alt: 'Yellow and green network cables bundled and run neatly down a rack',
    note: 'Bundled, dressed and labeled, so the next person can follow every run.',
  },
  panel: {
    image: panelImg,
    name: 'A patch panel, terminated',
    alt: 'Yellow and green cables terminated into a rack-mounted patch panel',
    note: 'Every drop ends on a numbered patch panel port.',
  },
  meeting: {
    image: meetingImg,
    name: 'A conference room with a wall display',
    alt: 'A warm wood-paneled conference room with a long table, office chairs and a wall-mounted display',
    note: 'The kind of room where the screen, camera and microphones should just start.',
  },
  bar: {
    image: barImg,
    name: 'A bar with a wall of TVs',
    alt: 'A busy bar and dining room with a row of TVs mounted above the bar',
    note: 'The kind of room where every seat needs a screen and the sound follows the game.',
    pos: '50% 35%',
  },
  barTv: {
    image: barTvImg,
    name: 'Screens behind a bar',
    alt: 'A bartender working in front of shelves of bottles with TVs mounted above',
    note: 'Screens mounted level and wired out of sight, with one remote for all of them.',
  },
  camera: {
    image: cameraImg,
    name: 'Commercial security cameras',
    alt: 'A dome camera and bullet cameras mounted on a pole against a cloudy sky',
    note: 'Cameras that record locally, so there are no per-camera cloud fees.',
  },
};

/** A picture of each kind of space, for the industry lists (stock, never shown as a Dapper AV job). */
export const industryThumb: Record<string, GearKey> = {
  'restaurants-bars': 'bar',
  'offices-conference-rooms': 'meeting',
  'retail-showrooms': 'camera',
  'digital-signage': 'barTv',
  'networks-wifi': 'ports',
  'structured-cabling': 'panel',
};
