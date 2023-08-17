'use client';
import { useEffect } from 'react';
import { AppContext } from '@/app/components/Layout';
import { Asteroid } from '@/app/components/Asteroid';

import '@/app/globals.scss';
import { useContext } from 'react';

export default function OrderPage() {
  const { cart, setCart, asteroids } = useContext(AppContext);

  const items = cart.map((id) => {
    const data = asteroids.filter((asteroid) => asteroid.id === id)[0];
    return <Asteroid checkable={false} key={id} {...data} />;
  });

  useEffect(() => () => setCart([]), [setCart]);

  return (
    <>
      <h2>Заказ отправлен!</h2>
      <ul>{items}</ul>
    </>
  );
}
