import { Approach } from '@/app/components/Approach';
import Layout  from '@/app/components/Layout';
import { API_KEY } from '@/app/components/ServerAsteroidList';
import { ApproachType, AsteroidType } from '@/app/types';
import { Danger } from '@/app/components/Danger';
import { Size } from '@/app/components/Size';
import { DistanceToggler } from '@/app/components/DistanceToggler';
import { ApproachList } from '@/app/components/ApproachList';

import styles from './page.module.scss';
import '@/app/globals.scss';


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

	const prev: Array<ApproachType> = [];
	const next: Array<ApproachType>= [];

	data.close_approach_data.forEach(a => {
		Number(new Date(a.close_approach_date_full) < new Date) ? prev.push(a) : next.push(a);
	});

	return (
		<>
			<DistanceToggler />
			<p className={styles.title}>{name}</p>

			<div className={styles.row}>
				<Size d={estimated_diameter.meters.estimated_diameter_max}/>

				{is_potentially_hazardous_asteroid && <Danger />}
			</div>

			<section className={styles.approaches}>
				<h3>Приближения:</h3>
				<ApproachList data={prev} title="Прошлые" />
				<ApproachList data={next} title="Предстоящие" />
			</section>
		</>
	)
}