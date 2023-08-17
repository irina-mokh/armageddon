'use client';

import { Header } from '../Header';
import { Footer } from '../Footer';
import { Context, useState, createContext, useMemo } from 'react';
import { AsteroidType, DistanceType, StateType } from '@/app/types';
import styles from './layout.module.scss';

const INITIAL_STATE: StateType = {
  cart: [],
  setCart: () => {},
  measure: 'kilometers' as DistanceType,
  setMeasure: () => {},
  asteroids: [],
  setAsteroids: () => {},
};

export const AppContext: Context<StateType> = createContext<StateType>(INITIAL_STATE);


export default function Layout({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Array<number>>(INITIAL_STATE.cart);
  const [measure, setMeasure] = useState<DistanceType>(INITIAL_STATE.measure);
  const [asteroids, setAsteroids] = useState<Array<AsteroidType>>(INITIAL_STATE.asteroids);

  const state: StateType = useMemo(() => ({
    cart,
    setCart,
    measure,
    setMeasure,
    asteroids,
    setAsteroids,
  }), [asteroids, cart, measure]);


  return (
    <AppContext.Provider value={state}>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.content}>
          {children}
          </div>
        </main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}
