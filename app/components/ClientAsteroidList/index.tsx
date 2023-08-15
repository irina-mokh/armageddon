'use client'

import { useContext, useEffect } from 'react';
import { Asteroid } from '../Asteroid';
import { AppContext } from '../Layout';
import { AsteroidType } from '@/app/types';

type ClientAsteroidListType = {
	initial: Array<AsteroidType>;
}

export const ClientAsteroidList = ({ initial }: ClientAsteroidListType) => {

	const { asteroids, setAsteroids} = useContext(AppContext);
	useEffect(() => {
		if (asteroids.length === 0) {
			setAsteroids([...initial]);
		}
	}, []);	

	return (
		<ul>
			{asteroids.map(a => <Asteroid {...a} key={a.id}></Asteroid>)}
		</ul>
	)
}