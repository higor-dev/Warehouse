import React from 'react';
import { getBalance } from '../api';
import useFetch from '../Hooks/useFetch';
import styles from './Balance.module.css';
import Error from './Helper/Error';
import Loading from './Helper/Loading';

const Balance = () => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const token = window.localStorage.getItem('token');
    const { url, options } = getBalance(token);
    request(url, options);
  }, [request]);

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) {
    return (
      <div className={styles.balance}>
        <h1>
          Saldo do mês:{' '}
          {data.balance > 0 ? (
            <span style={{ color: 'green' }}>R${data.balance}</span>
          ) : (
            <span style={{ color: 'red' }}>R${data.balance}</span>
          )}
        </h1>
      </div>
    );
  } else {
    return null;
  }
};

export default Balance;
