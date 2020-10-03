import React from 'react';

const SaldoEntrada = ({ data }) => {
  const [saldo, setSaldo] = React.useState(0);

  React.useEffect(() => {
    if (data) {
      console.log(data);
      const allPrices = data.map(({ received }) => Number(received));
      console.log(allPrices);

      const sumPositives = allPrices.reduce((a, b) => {
        return b > 0 ? a + b : a;
      }, 0);
      setSaldo(sumPositives);
    }
  }, [data, setSaldo]);

  return (
    <div>
      Saldo de entrada:<br></br>
      <span style={{ color: 'green' }}>
        R$ {(Math.round(saldo * 100) / 100).toFixed(2)}
      </span>
    </div>
  );
};

export default SaldoEntrada;
