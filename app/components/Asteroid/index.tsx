'use client';
import React, { useContext } from 'react';
import Link from 'next/link';
import { Danger } from '../Danger';
import { SizeThmb } from '../SizeThmb';
import { Size } from '../Size';
import { Distance } from '../Distance';
import { AppContext } from '../Layout';
import { AsteroidType } from '@/app/types';
import { formatDate } from '@/app/helpers';

import styles from './asteroid.module.scss';

interface AsteroidProps extends AsteroidType {
  checkable: boolean;
}
export const Asteroid = (props: AsteroidProps) => {
  const { id, name, close_approach_data, estimated_diameter, is_potentially_hazardous_asteroid, checkable } = props;

  const approach = close_approach_data[0];
  const d = estimated_diameter.meters.estimated_diameter_max;
  let { cart, setCart } = useContext(AppContext);

  const checked = cart.includes(id);

  const handleRemoveFromCart = () => {
    setCart([...cart.filter((cartId) => cartId !== id)]);
  };

  const handleAddToCart = () => {
    setCart([...cart, id]);
  };

  return (
    <li className={styles.card}>
      <p className={styles.date}>{formatDate(approach.close_approach_date_full)}</p>

      <div className={styles.row}>
        <Distance {...approach.miss_distance} />
        <SizeThmb d={d} />
        <div>
          <Link href={`/asteroid/${id}`} className={styles.name}>
            {name}
          </Link>
          <Size d={d} />
        </div>
      </div>
      <div className={styles.row}>
        {checkable &&
          (checked ? (
            <button className={styles.btn + ' ' + styles.btn_checked} onClick={handleRemoveFromCart}>
              В корзине
            </button>
          ) : (
            <button className={styles.btn} onClick={handleAddToCart}>
              Заказать
            </button>
          ))}
        {is_potentially_hazardous_asteroid && <Danger />}
      </div>
    </li>
  );
};
