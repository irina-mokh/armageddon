'use client';
import { DistanceType } from '@/app/types';
import { useContext, useState } from 'react';
import styles from './distance-toggler.module.scss';
import { AppContext } from '../Layout';

export const DistanceToggler = () => {
  const { measure, setMeasure } = useContext(AppContext);

  const handleDistanceTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as DistanceType;
    setMeasure(value);
  };
  return (
    <form className={styles.filter}>
      <input
        type="radio"
        id="kilometers"
        value="kilometers"
        name="distance"
        className={styles.input}
        checked={measure === 'kilometers'}
        onChange={handleDistanceTypeChange}
      ></input>
      <label htmlFor="kilometers" className={styles.label}>
        в километрах
      </label>
      <span className={styles.divider}>|</span>
      <input
        type="radio"
        id="lunar"
        value="lunar"
        name="distance"
        className={styles.input}
        checked={measure === 'lunar'}
        onChange={handleDistanceTypeChange}
      ></input>
      <label htmlFor="lunar" className={styles.label}>
        в лунных орбитах
      </label>
    </form>
  );
};
