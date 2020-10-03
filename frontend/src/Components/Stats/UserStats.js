import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { getStatistics } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Head from '../Helper/Head';
import History from './History';
import Stats from './Stats';
import StatsHeader from './StatsHeader';

const UserStats = () => {
  const { data, request } = useFetch();
  // const [history, setHistory] = React.useState(null);

  React.useEffect(() => {
    let unmounted = false;
    async function balance() {
      if (!unmounted) {
        const token = window.localStorage.getItem('token');
        const { url, options } = getStatistics(token);
        request(url, options);
      }
    }
    balance();
    return () => {
      unmounted = true;
    };
  }, [request]);

  return (
    <section className="animeLeft">
      <Head title="Estatísticas" description="Estatísticas" />;
      <StatsHeader />
      <Routes>
        <Route path="/estatisticas" element={<Stats />}></Route>
        <Route
          path="historico"
          element={<History dataBalance={data} />}
        ></Route>
      </Routes>
    </section>
  );
};

export default UserStats;
