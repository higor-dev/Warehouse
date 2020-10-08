import React from 'react';
import styles from './NavList.module.css';
import account from '../Assets/account.svg';
import home from '../Assets/home.svg';
import add from '../Assets/add.svg';
import stats from '../Assets/stats.svg';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../UserContext';

const NavList = () => {
  const { active, setActive } = React.useContext(UserContext);

  return (
    <div className={styles.navList}>
      <ul>
        <li
          onClick={() => {
            setActive(!active);
          }}
        >
          <NavLink to="/">
            <img src={home} alt="" /> <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/conta/estatisticas/estatisticas">
            <img src={stats} alt="" /> <span>Estatísticas</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/conta/postar">
            <img src={add} alt="" /> <span>Adicionar Produto</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/conta">
            <img src={account} alt="" /> <span>Minha Conta</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
