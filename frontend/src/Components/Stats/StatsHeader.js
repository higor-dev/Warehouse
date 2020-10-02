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
            to="estatisticas"
          >
            <span style={{ color: 'black', fontFamily: 'Poppins' }}>
              Estatísticas
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={styles.navlink}
            activeClassName="navlinkAnime"
            to="historico"
          >
            <span style={{ color: 'black', fontFamily: 'Poppins' }}>
              Histórico
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default StatsHeader;
