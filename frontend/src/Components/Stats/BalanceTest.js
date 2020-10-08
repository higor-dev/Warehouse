import React from 'react';

const BalanceTest = ({ data }) => {
  const [balance, setBalance] = React.useState(0);

  React.useEffect(() => {
    let unmounted = false;
    if (!unmounted) {
      setBalance(data.balance);
    }
    return () => {
      unmounted = true;
    };
  }, [data]);

  return (
    <div>
      <h1>
        Gastos do mês:{' '}
        {data.balance > 0 ? (
          <span style={{ color: 'green' }}>R${balance}</span>
        ) : data.balance < 0 ? (
          <span style={{ color: 'red' }}>R${balance}</span>
        ) : (
          <span style={{ color: '#ccc' }}>R${balance}</span>
        )}
      </h1>
    </div>
  );
};

export default BalanceTest;
