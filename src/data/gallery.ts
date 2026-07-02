/**
 * Gallery entries. To add a project photo:
 *   1. Drop the image in src/assets/gallery/
 *   2. Import it below and add an entry — title, honest one-line caption,
 *      category ('residential' | 'commercial'), and alt text.
 */
import type { ImageMetadata } from 'astro';
import livingRoom from '../assets/header-bg.jpg';
import sportsBar from '../assets/header-bg2.jpg';
import boardroom from '../assets/header-bg3.jpg';

export interface GalleryItem {
  image: ImageMetadata;
  title: string;
  caption: string;
  category: 'residential' | 'commercial';
  alt: string;
}

export const gallery: GalleryItem[] = [
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
