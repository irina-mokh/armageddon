import Layout from '../components/Layout'
import { DistanceToggler } from '../components/DistanceToggler';

import '../globals.scss';
import styles from './page.module.scss';
import AsteroidList  from '../components/ServerAsteroidList';
import { CartBar } from '../components/CartBar';

export default function Home () {
  return (
    <Layout>
      <main className={styles.main}>
        <div className={styles.content}>
          <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
          <DistanceToggler />
          <AsteroidList />
        </div>
        <CartBar />
      </main>
    </Layout>
  )
};

