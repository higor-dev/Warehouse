import React from 'react';
import { UserContext } from '../UserContext';
import Feed from './Feed/Feed';
import Loading from './Helper/Loading';
import NavList from './NavList';
import styles from './Home.module.css';
import Balance from './Balance';

const Home = () => {
  const { loading } = React.useContext(UserContext);
  return (
    <section className={styles.home}>
      {loading && <Loading />}
      <NavList />
      <Feed />
      <Balance />
    </section>
  );
};

export default Home;
