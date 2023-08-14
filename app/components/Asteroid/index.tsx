import { AsteroidType } from '@/app/types'
import styles from './styles.module.scss'

interface AsteroidProps extends AsteroidType {
	checked: boolean;
}

const DISTANCE_MEASURE = {
	'kilometers': 'км',
	"lunar": 'лунных орбит',
}

const getSize = (n: number) => n > 100 ? "thmb_big" : "thmb_small";

export const Asteroid = ({name, checked, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid, }: AsteroidProps) => {
	const approach = close_approach_data[0];
	const measure = 'kilometers';

	const d = Math.round(+estimated_diameter.meters.estimated_diameter_max);
	const thmb = getSize(d);

	return (
		<div className={styles.card}>
			<p className={styles.date}>{new Date(approach.close_approach_date_full).toLocaleDateString('ru-Ru', {
				dateStyle: 'medium'
			}).slice(0, -3).replace('.', '')}</p>

			<div className={styles.row}>
				<div>
					<p className={styles.distance}>
						{Math.round(Number(approach.miss_distance[measure])).toLocaleString()}
						<span>{' ' + DISTANCE_MEASURE[measure]}</span>
					</p>
					<svg xmlns="http://www.w3.org/2000/svg" width="129" height="6" viewBox="0 0 129 6" fill="none">
						<path d="M0 3L5 5.88675L5 0.113249L0 3ZM129 3.00001L124 0.113259L124 5.88676L129 3.00001ZM4.5 3.5L124.5 3.50001L124.5 2.50001L4.5 2.5L4.5 3.5Z" fill="white" fill-opacity="0.5"/>
					</svg>
				</div>

				<div className={styles[thmb] + ' ' + styles.thmb}></div>

				<div>
					<p className={styles.name}>{name}</p>
					<p className={styles.size}>
						{d}
						<span>м</span>
					</p>
				</div>
			</div>
			<div className={styles.row}>
				{checked ? <button className={styles.btn + ' ' + styles.btn_checked}>В корзине</button> : <button className={styles.btn}>Заказать</button>}

				{is_potentially_hazardous_asteroid && <p className={styles.danger}>Опасен</p>}
			</div>

		</div>
	)
}