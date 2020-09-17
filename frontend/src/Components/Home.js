import React from 'react';
import { UserContext } from '../UserContext';
import Feed from './Feed/Feed';
import Loading from './Helper/Loading';

const Home = () => {
  const { loading } = React.useContext(UserContext);
  return (
    <section className="container mainContainer">
      {loading && <Loading />}
      <Feed />
    </section>
  );
};

export default Home;
