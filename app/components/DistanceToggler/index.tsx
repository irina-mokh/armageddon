'use client'
import { DistanceType } from '@/app/types';
import { useState } from 'react';
import styles from './styles.module.scss'


export const DistanceToggler = () => {
	const [distanceType, setDistanceType] = useState<DistanceType>('kilometers');

  const handleDistanceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value as DistanceType;
    setDistanceType(value); 
  }
	return (
		<form className={styles.filter} >
            <input
							type='radio'
							id="kilometers" value="kilometers"
							name="distance"
							className={styles.input}
							checked={distanceType === 'kilometers'}
							onChange={handleDistanceTypeChange}
						></input>
            <label htmlFor='km' className={styles.label}>в километрах</label>
            <span className={styles.divider}>|</span>
            <input
							type='radio'
							id="lunar"
							value="lunar"
							name="distance"
							className={styles.input}
							checked={distanceType === 'lunar'}
							onChange={handleDistanceTypeChange}
						></input>
            <label htmlFor='lunar' className={styles.label}>в лунных орбитах</label>
          </form>
	)
}