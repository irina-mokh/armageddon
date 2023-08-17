'use client';
import { ApproachType } from '@/app/types';
import { Approach } from '../Approach';
import { useState } from 'react';

import styles from './approach-list.module.scss';

type ApproachListProps = {
  title: string;
  data: Array<ApproachType>;
};

export const ApproachList = ({ title, data }: ApproachListProps) => {
  const [show, setShow] = useState(false);
  const approaches = data.map((a) => <Approach key={a.close_approach_date_full} {...a} />);

  const toggleList = () => {
    setShow(!show);
  };

  return (
    <section className={styles.list}>
      <h4 className={styles.title + ' ' + (show ? styles.title_open : '')} onClick={toggleList}>
        {title}:
      </h4>
      {show && <ul>{approaches}</ul>}
    </section>
  );
};
