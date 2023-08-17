import { AsteroidType, NearEarthType } from '../types';

export function getDeclension(n: number, v1: string, v2: string, v3: string) {
  // get last char
  const i: string = String(n)[String(n).length - 1];

  switch (i) {
    case '1':
      return v1;
    case '2':
    case '3':
    case '4':
      return v2;
    default:
      return v3;
  }
}

export const extractAsteroids = (data: NearEarthType) => {
  let asteroids: AsteroidType[] = [...Object.values(data).flat()].sort(
    (a, b) =>
      +new Date(a.close_approach_data[0].close_approach_date_full) -
      +new Date(b.close_approach_data[0].close_approach_date_full)
  );
  return asteroids;
};

export const getSize = (n: number) => (n > 100 ? 'thmb_big' : 'thmb_small');

export const formatDate = (d: string) => {
  return new Date(d)
    .toLocaleDateString('ru-Ru', {
      dateStyle: 'medium',
    })
    .slice(0, -3)
    .replace('.', '');
};
