'use client';

import { Header } from '../Header'
import { Footer } from '../Footer'
import { Context, useState } from 'react';
import { createContext } from 'react';
import { AsteroidType, StateType } from '@/app/types';
import styles from './styles.module.scss'

const INITIAL_STATE: StateType = {
  cart: [],
  setCart: () => {},
};

export const AppContext: Context<StateType> = createContext<StateType>(INITIAL_STATE);

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const [cart, setCart] = useState<Array<number>>([]);
  // const [data, setData] = useState<Array<AsteroidType>>([]);

  const state: StateType = {
    cart, setCart,
  }
  return (
    <AppContext.Provider value={state}>
      <div className={styles.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </AppContext.Provider>
  )
}