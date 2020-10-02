import React from 'react';
import styles from './History.module.css';

const History = ({ dataBalance }) => {
  let contador = 0;
  console.log(contador);
  if (dataBalance) {
    return (
      <>
        {dataBalance.map((data) => {
          return (
            <div
              key={data.createdAt}
              style={
                data.price < 0
                  ? { boxShadow: '0 20px 20px rgba(255, 0, 0, 0.1)' }
                  : { boxShadow: '0 20px 20px rgba(0, 255, 0, 0.1)' }
              }
              className={`${styles.history}`}
            >
              <span className={styles.nome}>Produto</span>
              <span className={styles.nome}>Data</span>
              <img src={data.product.image} alt="" />
              <span className={styles.nome}>Preço</span>
              <span className={styles.nome}>Tipo</span>
              <span className={styles.nome}>Pagamento</span>
              <span className={styles.nome}>Parcelas</span>
              <span
                className={styles.desc}
                style={{
                  fontFamily: 'Poppins',
                  color: 'red',
                }}
              >
                {data.createdAt}
              </span>
              <span className={styles.desc}>R${data.product.price}</span>
              <span className={styles.desc}>{data.product.type}</span>
              <span className={styles.desc}>
                {data.price < 0 ? 'Compra' : 'Venda'}
              </span>
              <span className={styles.desc}>
                {/* Sua conta precisa ficar dentro desse span. */}
                {data.installments.map(function (installment, index) {
                  if (installment.paid) {
                    return contador++;
                  }
                  if (data.installments.length - 1 === index) {
                    contador = 0;
                  }
                  return <h1 key={index}>{contador}</h1>;
                })}
              </span>
            </div>
          );
        })}
      </>
    );
  } else return null;
};

export default History;
