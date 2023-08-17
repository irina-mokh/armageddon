import Layout from '../components/Layout';
import { DistanceToggler } from '../components/DistanceToggler';
import AsteroidList from '../components/ServerAsteroidList';
import { CartBar } from '../components/CartBar';

import '../globals.scss';
import styles from './page.module.scss';

export default function Home() {
  return (
    <>
      <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
      <DistanceToggler />
      <AsteroidList />
      <CartBar />
    </>
  );
}
