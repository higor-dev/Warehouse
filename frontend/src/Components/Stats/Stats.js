import React from 'react';
import { getAllTransactions, getBalance } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Head from '../Helper/Head';
import Loading from '../Helper/Loading';
import SaldoEntrada from './SaldoEntrada';
import SaldoSaida from './SaldoSaida';
import SaldoTotal from './SaldoTotal';
import styles from './Stats.module.css';

const Stats = () => {
  const { data, loading, request, error } = useFetch();
  const [history, setHistory] = React.useState(null);

  React.useEffect(() => {
    let unmounted = false;
    async function balance() {
      if (!unmounted) {
        const token = window.localStorage.getItem('token');
        const { url, options } = getBalance(token);
        request(url, options);
      }
    }
    balance();
    return () => {
      unmounted = true;
    };
  }, [request]);

  React.useEffect(() => {
    async function oiMano() {
      const token = window.localStorage.getItem('token');
      const { url, options } = getAllTransactions(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setHistory(json);
    }
    oiMano();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (data) {
    return (
      <>
        <Head title="Estatísticas" description="Estatísticas" />;
        <div className={styles.container}>
          <ul className={styles.stats}>
            <li className={styles.saldoTotal}>
              <SaldoTotal data={data} />
            </li>
            <li className={styles.entrada}>
              <SaldoEntrada data={history} />
            </li>
            <li className={styles.saida}>
              <SaldoSaida data={history} />
            </li>
          </ul>
        </div>
      </>
    );
  } else return <Loading />;
};

export default Stats;
