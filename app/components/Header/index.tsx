import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>Armaggedon 2023</h1>
      <p className={styles.text}>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
    </header>
  );
};
