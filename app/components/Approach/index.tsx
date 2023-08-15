'use client'
import { ApproachType } from '@/app/types';

import styles from './approach.module.scss';
import { Distance } from '../Distance';
import { formatDate } from '@/app/helpers';

export const Approach = (a: ApproachType) => {
	return <li className={styles.container}>
		<p>{formatDate(a.close_approach_date_full) + ' '+ a.close_approach_date_full.slice(-5)}</p>
		<p>Orbit: {a.orbiting_body}</p>
		<Distance {...a.miss_distance} />
		<p>{Math.round(+a.relative_velocity.kilometers_per_hour) + ' км/ч'}</p>
	</li>
}