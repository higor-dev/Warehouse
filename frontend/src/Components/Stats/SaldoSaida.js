import React from 'react';

const SaldoSaida = ({ data }) => {
  const [saldo, setSaldo] = React.useState(0);

  React.useEffect(() => {
    if (data) {
      const allPrices = data.map(({ price }) => Number(price));
      const sumNegatives = allPrices.reduce((a, b) => {
        return b < 0 ? a + b : a;
      }, 0);
      setSaldo(sumNegatives);
    }
  }, [data, setSaldo]);

  return (
    <div>
      Saldo de saída:<br></br>
      <span style={{ color: 'red' }}>
        -R${Math.abs((Math.round(saldo * 100) / 100).toFixed(2))}
      </span>
    </div>
  );
};

export default SaldoSaida;
