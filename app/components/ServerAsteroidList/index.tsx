// component for getting SSR first chunk of asteroids for today
import { AsteroidType, NearEarthType } from '@/app/types';
import { Asteroid } from '../Asteroid';
import { InfiniteLoader } from '../InfiniteLoader';
import { ClientAsteroidList } from '../ClientAsteroidList';
import { extractAsteroids } from '@/app/helpers';

export const API_KEY = "esOQVFTiGBHuLWMPuf2PLDW4mLDdemO71OdVGmr1";
// BhgFsluUBWJgMyfvqc8gUE9NAGRswpBjMvXpFYRd
const today = new Date();
const queryDay = today.toISOString().slice(0, 10);

// NASA feed API - query by date, no page filter
// NASA browse API - query by page, no date filter

async function getData() {
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${queryDay}&end_date=${queryDay}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: NearEarthType = (await res.json()).near_earth_objects;
  return data;
}
export default async function ServerAsteroidList () {
	const data = await getData();
	return (
		<>
			<ClientAsteroidList initial={extractAsteroids(data)} />
			<InfiniteLoader />
		</>

	)
}