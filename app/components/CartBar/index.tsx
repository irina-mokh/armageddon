'use client';
import { AppContext } from '../Layout';
import { useContext } from 'react';

import styles from './styles.module.scss'
import { getDeclension } from '@/app/helpers';


export const CartBar = () => {
	const { cart } = useContext(AppContext);
	return (
		<nav className={styles.container}>
			<div>
				<h3>Корзина</h3>
				<p>{cart.length + ' ' + getDeclension(cart.length, 'астероид', 'астероида', 'астероидов')}</p>
			</div>
			<button className={styles.btn}>Отправить</button>
		</nav>
	)
}