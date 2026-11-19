/**
 * Gallery entries. (The dealership display photo was removed at Mark's request, 2026-11-18.) To add a project photo:
 *   1. Drop the image in src/assets/gallery/
 *   2. Import it below and add an entry (REAL installs only — never AI or stock images) — title, honest one-line caption,
 *      category ('residential' | 'commercial'), and alt text.
 */
import type { ImageMetadata } from 'astro';
import fireplaceMount from '../assets/gallery/fireplace-mount.jpg';
import hifiRack from '../assets/gallery/hifi-rack.jpg';

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
    title: 'Over-mantel TV and soundbar',
    caption: 'Mounted dead-center above the fireplace, soundbar aligned, not a wire in sight.',
    category: 'residential',
    alt: 'TV and soundbar mounted above a white mantel and tiled gas fireplace with no visible wires',
    pos: 'top',
  },
  {
    image: hifiRack,
    title: 'Vintage hi-fi, modern heart',
    caption: 'Pioneer turntable and reel-to-reel integrated with a modern Yamaha receiver — the classics, wired for today.',
    category: 'residential',
    alt: 'Walnut cabinet housing a Pioneer turntable, reel-to-reel tape deck, and modern Yamaha AV receiver',
  },
];
