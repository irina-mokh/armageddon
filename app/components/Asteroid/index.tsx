import { AsteroidType } from '@/app/types'
import styles from './styles.module.scss'

interface AsteroidProps extends AsteroidType {
	checked: boolean;
}

const DISTANCE_MEASURE = {
	'kilometers': 'км',
	"lunar": 'лунных орбит',
}
export const Asteroid = ({name, checked, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid, }: AsteroidProps) => {
	const approach = close_approach_data[0];
	const measure = 'kilometers'
	return (
		<div className={styles.card}>
			<p className={styles.date}>{approach.close_approach_date_full}</p>

			<p className={styles.distance}>
				{approach.miss_distance[measure]}
				<span>{DISTANCE_MEASURE[measure]}</span>
			</p>
			{is_potentially_hazardous_asteroid && <p className={styles.danger}>Опасен</p>}
			<p className={styles.name}>{name}</p>
			<p className={styles.size}>{estimated_diameter.meters.estimated_diameter_max} м</p>

		</div>
	)
}