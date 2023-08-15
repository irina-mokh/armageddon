import { AsteroidType, NearEarthType } from '@/app/types';
import { Asteroid } from '../Asteroid';

const API_KEY = "esOQVFTiGBHuLWMPuf2PLDW4mLDdemO71OdVGmr1";
// BhgFsluUBWJgMyfvqc8gUE9NAGRswpBjMvXpFYRd

// NASA feed API - query by date, no page filter
// NASA browse API - query by page, no date filter
// that's why getting all data from today and render it on client by scroll
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
  let asteroids: AsteroidType[] = [...Object.values(data).flat()];
	asteroids = asteroids.sort((a, b) => +new Date(a.close_approach_data[0].close_approach_date_full) - +new Date(b.close_approach_data[0].close_approach_date_full))

	return (
		<ul>
			{asteroids.map(a => <Asteroid {...a} key={a.id}></Asteroid>)}
		</ul>

	)
}