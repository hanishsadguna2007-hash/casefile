import { Mystery, MysteryCategory } from '@/types/mystery';
import { crimeMysteries } from './crime';
import { robberyMysteries } from './robbery';
import { mythologyMysteries } from './mythology';
import { historicalMysteries } from './historical';
import { supernaturalMysteries } from './supernatural';
import { modernMysteries } from './modern';
import { logicMysteries } from './logic';

export const allMysteries: Mystery[] = [
  ...crimeMysteries,
  ...robberyMysteries,
  ...mythologyMysteries,
  ...historicalMysteries,
  ...supernaturalMysteries,
  ...modernMysteries,
  ...logicMysteries,
];

export function getAllMysteries(): Mystery[] {
  return allMysteries;
}

export function getMysteryById(id: string): Mystery | undefined {
  return allMysteries.find((m) => m.id === id || m.caseNumber.toLowerCase() === id.toLowerCase());
}

export function getMysteryByCaseNumber(caseNumber: string): Mystery | undefined {
  return allMysteries.find(
    (m) => m.caseNumber.toLowerCase() === caseNumber.toLowerCase()
  );
}

export function getMysteriesByCategory(category: MysteryCategory): Mystery[] {
  return allMysteries.filter((m) => m.category === category);
}

export function getFeaturedMysteries(): Mystery[] {
  return allMysteries.filter((m) => m.featured);
}

export interface CategoryInfo {
  id: MysteryCategory;
  title: string;
  count: number;
  description: string;
  iconName: string;
}

export const mysteryCategories: CategoryInfo[] = [
  {
    id: 'crime',
    title: 'Crime & Detective',
    count: crimeMysteries.length,
    description: 'Locked-room murders, poison plots, staged alibis, and forensic autopsies.',
    iconName: 'Skull',
  },
  {
    id: 'robbery',
    title: 'Robbery & Heist',
    count: robberyMysteries.length,
    description: 'Impossible vault breaches, jewel switches, museum thefts, and optical heists.',
    iconName: 'KeyRound',
  },
  {
    id: 'mythology',
    title: 'Indian Mythology Inspired',
    count: mythologyMysteries.length,
    description: 'Fiction inspired by Indian folklore, stepwells, dynastic relics, and temple sanctums.',
    iconName: 'Landmark',
  },
  {
    id: 'historical',
    title: 'Historical & Ancient',
    count: historicalMysteries.length,
    description: 'Lost expedition journals, Renaissance ledgers, colonial seals, and papyri.',
    iconName: 'Scroll',
  },
  {
    id: 'supernatural',
    title: 'Supernatural-Style',
    count: supernaturalMysteries.length,
    description: 'Eerie phenomena, phantom trains, and spectral wails with rational explanations.',
    iconName: 'Ghost',
  },
  {
    id: 'modern',
    title: 'Modern Mysteries',
    count: modernMysteries.length,
    description: 'Algorithmic extortion, streaming hoaxes, drone espionage, and cyber intrusions.',
    iconName: 'Cpu',
  },
  {
    id: 'logic',
    title: 'Logic & Puzzle',
    count: logicMysteries.length,
    description: 'Truth-teller paradoxes, tidal timelines, ciphered sheet music, and deduction.',
    iconName: 'Puzzle',
  },
];
