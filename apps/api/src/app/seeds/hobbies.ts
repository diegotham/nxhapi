import { IHobby, PassionLevel } from '../model/hobby';

export const hobbiesYearsSeeds = [2009, 2011, 2015, 2020];

export const hobbiesSeeds: Partial<IHobby>[] = [
  {
    name: 'Football',
    passionLevel: PassionLevel.HIGH,
    year: hobbiesYearsSeeds[0],
  },
  {
    name: 'Tenis',
    passionLevel: PassionLevel.LOW,

    year: hobbiesYearsSeeds[0],
  },
  {
    name: 'Yoga',
    passionLevel: PassionLevel.MEDIUM,
    year: hobbiesYearsSeeds[1],
  },
  {
    name: 'Basketball',
    passionLevel: PassionLevel.HIGH,
    year: hobbiesYearsSeeds[1],
  },
  {
    name: 'Boxing',
    passionLevel: PassionLevel.MEDIUM,
    year: hobbiesYearsSeeds[2],
  },
  {
    name: 'Trekking',
    passionLevel: PassionLevel.LOW,
    year: hobbiesYearsSeeds[2],
  },
  {
    name: 'Climbing',
    passionLevel: PassionLevel.MEDIUM,
    year: hobbiesYearsSeeds[2],
  },
  {
    name: 'Surf',
    passionLevel: PassionLevel.VERY_HIGH,
    year: hobbiesYearsSeeds[3],
  },
  {
    name: 'Swimming',
    passionLevel: PassionLevel.VERY_HIGH,
    year: hobbiesYearsSeeds[3],
  },
];
