import { DistanceToggler } from '../components/DistanceToggler';
import AsteroidList from '../components/ServerAsteroidList';
import { CartBar } from '../components/CartBar';

import '../globals.scss';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
        <DistanceToggler />
        <AsteroidList />
      </div>
      <CartBar />
    </div>
  );
}
