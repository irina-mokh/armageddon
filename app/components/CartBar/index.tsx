'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { AppContext } from '../Layout';
import { getDeclension } from '@/app/helpers';

import styles from './cart-bar.module.scss';

export const CartBar = () => {
  const { cart } = useContext(AppContext);

  const router = useRouter();
  const handleSubmit = () => {
    // TODO send submit logic
    router.push(`/order`);
  };
  return (
    <nav className={styles.container}>
      <div>
        <h3 className={styles.title}>Корзина</h3>
        <p>{cart.length + ' ' + getDeclension(cart.length, 'астероид', 'астероида', 'астероидов')}</p>
      </div>
      <button className={styles.btn} onClick={handleSubmit} disabled={!cart.length}>
        Отправить
      </button>
    </nav>
  );
};
