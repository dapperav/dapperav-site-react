/**
 * Gallery entries. To add a project photo:
 *   1. Drop the image in src/assets/gallery/
 *   2. Import it below and add an entry — title, honest one-line caption,
 *      category ('residential' | 'commercial'), and alt text.
 */
import type { ImageMetadata } from 'astro';
import fireplaceMount from '../assets/gallery/fireplace-mount.jpg';
import hifiRack from '../assets/gallery/hifi-rack.jpg';
import dealershipDisplay from '../assets/gallery/dealership-display.jpg';
import livingRoom from '../assets/header-bg.jpg';
import sportsBar from '../assets/header-bg2.jpg';
import boardroom from '../assets/header-bg3.jpg';

export interface GalleryItem {
  image: ImageMetadata;
  title: string;
  caption: string;
  category: 'residential' | 'commercial';
  alt: string;
  /** CSS object-position for the card crop (e.g. 'top') — defaults to center */
  pos?: string;
}

export const gallery: GalleryItem[] = [
  {
    image: fireplaceMount,
    title: 'Over-Mantel TV & Soundbar',
    caption: 'Mounted dead-center above the fireplace, soundbar aligned, not a wire in sight.',
    category: 'residential',
    alt: 'TV and soundbar mounted above a white mantel and tiled gas fireplace with no visible wires',
    pos: 'top',
  },
  {
    image: hifiRack,
    title: 'Vintage Hi-Fi, Modern Heart',
    caption: 'Pioneer turntable and reel-to-reel integrated with a modern Yamaha receiver — the classics, wired for today.',
    category: 'residential',
    alt: 'Walnut cabinet housing a Pioneer turntable, reel-to-reel tape deck, and modern Yamaha AV receiver',
  },
  {
    image: dealershipDisplay,
    title: 'Dealership Showroom Display',
    caption: 'Recessed showroom display mounted flush in a custom feature wall for an auto dealership.',
    category: 'commercial',
    alt: 'Flat-screen display mounted in a recessed dark feature wall with wood paneling in a car dealership showroom',
  },
  {
    image: livingRoom,
    title: 'Living Room Media Wall',
    caption: 'Wall-mounted display with concealed cabling and low-profile soundbar.',
    category: 'residential',
    alt: 'Warmly lit living room with a large wall-mounted TV above a walnut media console',
  },
  {
    image: sportsBar,
    title: 'Sports Bar Video Wall',
    caption: 'Multi-screen matrix so every seat in the house has the game.',
    category: 'commercial',
    alt: 'Sports bar with six wall-mounted TVs showing different games above cheering patrons',
  },
  {
    image: boardroom,
    title: 'Conference Room AV',
    caption: 'Presentation display and conferencing audio in a wood-paneled boardroom.',
    category: 'commercial',
    alt: 'Modern wood-paneled conference room with a wall-mounted presentation display',
  },
];
