import { Approach } from '@/app/components/Approach';
import Layout  from '@/app/components/Layout';
import { API_KEY } from '@/app/components/ServerAsteroidList';
import { AsteroidType } from '@/app/types';
import { Danger } from '@/app/components/Danger';
import { Size } from '@/app/components/Size';

import styles from './page.module.scss';
import '@/app/globals.scss';
import { SizeThmb } from '@/app/components/SizeThmb';
import { DistanceToggler } from '@/app/components/DistanceToggler';


async function getAsteroidData(id: string) {
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${API_KEY}`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  const data = await res.json();
  return data;
}

export default async function  AsteroidPage ({params}: { params: { id: string } }) {
	const { id } = params;
	const data: AsteroidType = await getAsteroidData(id);

	const { name, is_potentially_hazardous_asteroid, estimated_diameter } = data;

	const approaches = data.close_approach_data.map(a => <Approach key={a.close_approach_date_full} {...a} />)
	return (
		<Layout>
			<DistanceToggler />
				<p className={styles.title}>{name}</p>
				<Size d={estimated_diameter.meters.estimated_diameter_max}/>

			{is_potentially_hazardous_asteroid && <Danger />}

			<ul>{approaches}</ul>
		</Layout>
	)
}