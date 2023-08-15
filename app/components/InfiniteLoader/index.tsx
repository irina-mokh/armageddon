'use client';

import { NearEarthType } from '@/app/types';
import { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../Layout';
import { API_KEY } from '../ServerAsteroidList';
import { extractAsteroids } from '@/app/helpers';

import styles from './infinite-loader.module.scss';

export const InfiniteLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { asteroids, setAsteroids } = useContext(AppContext);
  const [page, setPage] = useState(0);
  // calculate date for request depending on page N
  const today = new Date();
  let day = new Date();
  day.setDate(today.getDate() + page);

  const loadMore = useCallback(async () => {
    const queryDay = day.toISOString().slice(0, 10);
    setIsLoading(true);
    const res = await fetch(
      `https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${queryDay}&end_date=${queryDay}`
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: NearEarthType = (await res.json()).near_earth_objects;
    setAsteroids([...asteroids, ...extractAsteroids(data)]);
    setIsLoading(false);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 5 >= document.scrollingElement!.scrollHeight &&
      !isLoading
    ) {
      setPage((page) => page + 1);
    }
  };

  useEffect(() => {
    if (page && !isLoading) loadMore();
  }, [page]);

  useEffect(() => {
    const listener = window.addEventListener('scroll', handleScroll);
    return listener;
  }, []);

  return <div className={styles.loader}></div>;
};
