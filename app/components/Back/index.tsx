import Link from 'next/link';

import styles from './back.module.scss';

export const Back = () => {
  return <Link className={styles.link} href="/">{`< На главную`}</Link>;
};
