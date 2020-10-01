import React from 'react';
import styles from './NavList.module.css';
import account from '../Assets/account.svg';
import home from '../Assets/home.svg';
import add from '../Assets/add.svg';
import stats from '../Assets/stats.svg';
import { Link, NavLink } from 'react-router-dom';
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
          <Link to="/conta/estatisticas">
            <img src={stats} alt="" /> <span>Estatísticas</span>
          </Link>
        </li>
        <li>
          <Link to="/conta/postar">
            <img src={add} alt="" /> <span>Adicionar Produto</span>
          </Link>
        </li>
        <li>
          <Link to="/conta">
            <img src={account} alt="" /> <span>Minha Conta</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavList;
