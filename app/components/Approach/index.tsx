'use client';
import { Distance } from '../Distance';
import { formatDate } from '@/app/helpers';
import { ApproachType } from '@/app/types';

import styles from './approach.module.scss';

export const Approach = (a: ApproachType) => {
  return (
    <li className={styles.container}>
      <p>{formatDate(a.close_approach_date_full) + ' ' + a.close_approach_date_full.slice(-5)}</p>
      <p>Орбита: {a.orbiting_body}</p>
      <Distance {...a.miss_distance} />
      <p className={styles.speed}>{(+a.relative_velocity.kilometers_per_second).toFixed(2) + ' км/c'}</p>
    </li>
  );
};
