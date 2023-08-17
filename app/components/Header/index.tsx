import Link from 'next/link';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <header className={styles.container}>
      <Link href="/" className={styles.title}>
        Armageddon 2023
      </Link>
      <p className={styles.text}>ООО “Команда им. Б. Уиллиса”. Взрываем астероиды с 1998 года.</p>
    </header>
  );
};
