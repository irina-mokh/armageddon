// 'use client'
import Layout from '../components/Layout'
import styles from './page.module.scss'
import '../globals.scss';
import { Asteroid } from '../components/Asteroid';
import { AsteroidType, NearEarthType } from '../types';
import { DistanceToggler } from '../components/DistanceToggler';

const API_KEY = "BhgFsluUBWJgMyfvqc8gUE9NAGRswpBjMvXpFYRd";

async function getData() {
  const today = (new Date()).toISOString().slice(0, 10);
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/feed?api_key=${API_KEY}&start_date=${today}`);

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data: NearEarthType = (await res.json()).near_earth_objects;
  return data;
}

export default async function Home() {
  const data = await getData();
  const asteroids: AsteroidType[] = [...Object.values(data).flat()];
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <DistanceToggler />
          <ul className={styles.list}>
            {asteroids.map(a => <li key={a.id} className={styles.asteroid}><Asteroid {...a} checked={false}></Asteroid></li>)}
          </ul>
        </div>
      </main>
    </Layout>
  )
};
