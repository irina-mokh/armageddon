import { AsteroidType, NearEarthType } from '@/app/types';
import { Asteroid } from '../Asteroid';
import { getDeclension } from '@/app/helpers';

const API_KEY = "esOQVFTiGBHuLWMPuf2PLDW4mLDdemO71OdVGmr1";
// BhgFsluUBWJgMyfvqc8gUE9NAGRswpBjMvXpFYRd

async function getData() {
  const today = (new Date()).toISOString().slice(0, 10);
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${today}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: NearEarthType = (await res.json()).near_earth_objects;
  return data;
}
export default async function AsteroidList () {
	const data = await getData();
  const asteroids: AsteroidType[] = [...Object.values(data).flat()];

	

	return (
		<ul>
			{asteroids.map(a => <Asteroid {...a} key={a.id}></Asteroid>)}
		</ul>

	)
}