'use client';
import { AppContext } from '../Layout';
import { useContext } from 'react';

import styles from './styles.module.scss'


export const CartBar = () => {
	const { cart } = useContext(AppContext);
	return (
		<nav className={styles.container}>
			<div>
				<h3>Корзина</h3>
				<p>{cart.length} астреоидов</p>
			</div>
			<button className={styles.btn}>Отправить</button>
		</nav>
	)
}