import { getSize } from '@/app/helpers';
import styles from './size-thmb.module.scss';

export const SizeThmb = ({ d }: { d: number }) => {
  const thmb = getSize(Math.round(d));

  return <div className={styles[thmb] + ' ' + styles.thmb}></div>;
};
