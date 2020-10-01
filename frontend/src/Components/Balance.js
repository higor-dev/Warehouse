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
      <div className={`${styles.balance} animeLeft`}>
        <h1>
          Gastos do mês:{' '}
          {data.balance > 0 ? (
            <span style={{ color: 'green' }}>R${data.balance}</span>
          ) : data.balance < 0 ? (
            <span style={{ color: 'red' }}>R${data.balance}</span>
          ) : (
            <span style={{ color: '#ccc' }}>R${data.balance}</span>
          )}
        </h1>
      </div>
    );
  } else {
    return <Loading />;
  }
};

export default Balance;
