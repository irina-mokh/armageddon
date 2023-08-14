import Layout from '../components/Layout'
import styles from './page.module.scss'
import '../globals.scss';

export default function Home() {
  return (
    <Layout>
      <main className={styles.main}>
        <h2 className={styles.title}>Ближайшие подлёты астероидов</h2>
        <form className={styles.filter}>
          <input type='radio' id="km" value="km" name="distance" checked></input>
          <label htmlFor='km'>в километрах</label>
          <input type='radio' id="lunar" value="km" name="distance"></input>
          <label htmlFor='lunar'>в лунных орбитах</label>
        </form>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate pariatur fuga assumenda nisi ipsam accusantium numquam asperiores aut praesentium. Nulla, beatae voluptas facere ab fugiat laboriosam eligendi nobis. Maiores, cupiditate!</li>

        </ul>
      </main>
    </Layout>
  )
}
