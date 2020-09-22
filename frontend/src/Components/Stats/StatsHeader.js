import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './StatsHeader.module.css';

const StatsHeader = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <NavLink
            className={styles.navlink}
            activeClassName="navlinkAnime"
            to="historico"
          >
            Histórico
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default StatsHeader;
