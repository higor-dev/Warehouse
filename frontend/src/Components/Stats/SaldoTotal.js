import React from 'react';

const SaldoTotal = ({ data }) => {
  return (
    <div>
      <div>
        Saldo total: R${' '}
        {data.balance < 0 ? (
          <span style={{ color: 'red' }}>
            {(Math.round(data.balance * 100) / 100).toFixed(2)}
          </span>
        ) : data.balance > 0 ? (
          <span style={{ color: 'green' }}>
            {(Math.round(data.balance * 100) / 100).toFixed(2)}
          </span>
        ) : (
          <span style={{ color: 'gray' }}>
            {(Math.round(data.balance * 100) / 100).toFixed(2)}
          </span>
        )}
      </div>
    </div>
  );
};

export default SaldoTotal;
