import React from 'react';
import styles from './History.module.css';
import moment from 'moment';
import Head from '../Helper/Head';

const History = ({ dataBalance }) => {
  if (dataBalance) {
    return (
      <>
        <Head title="Histórico" description="Histórico" />;
        {dataBalance.reverse().map((data, index) => {
          let contador = 0;

          data.installments.map((value, index) => {
            if (value.paid === true) {
              contador++;
            }
            return null;
          });

          return (
            <ul
              key={data.id}
              style={
                data.price < 0
                  ? { boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)' }
                  : { boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }
              }
              className={styles.container}
            >
              <div
                key={data.id}
                style={
                  data.price < 0
                    ? { background: '#B94141' }
                    : { background: '#14C15E' }
                }
                className={styles.produto}
              >
                <span>PRODUTO:</span> {data.product.productName}
              </div>
              <div className={styles.oi}>
                <li>
                  <div className={styles.wrap}>
                    <h4 style={{ color: '#ccc' }}>Tipo de transação</h4>
                    <span>
                      {data.price < 0 ? (
                        <span>Entrada</span>
                      ) : (
                        <span>Venda</span>
                      )}
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.wrap}>
                    <h4 style={{ color: '#ccc' }}>Data</h4>
                    <span>{moment(data.createdAt).format('DD/MM/YYYY')}</span>
                  </div>
                </li>
                <li>
                  <div className={styles.wrap}>
                    <h4 style={{ color: '#ccc' }}>Valor total</h4>
                    <span>
                      R${' '}
                      {Math.abs(
                        (Math.round(data.received * 100) / 100).toFixed(2),
                      )}
                    </span>
                  </div>
                </li>
                <li>
                  <div className={styles.wrap}>
                    <h4 style={{ color: '#ccc' }}>Parcelas</h4>
                    <span>
                      {contador} de {data.portion}
                    </span>
                  </div>
                </li>
                <li className={styles.ultimo}>
                  <div className={styles.wrap}>
                    <h4 style={{ color: '#ccc' }}>Quantidade</h4>
                    <span>{data.quantity}</span>
                  </div>
                </li>
              </div>
            </ul>
            // <div
            //   key={data.createdAt}
            //   style={
            //     data.price < 0
            //       ? { boxShadow: '0 20px 20px rgba(255, 0, 0, 0.1)' }
            //       : { boxShadow: '0 20px 20px rgba(0, 255, 0, 0.1)' }
            //   }
            //   className={`${styles.history}`}
            // >
            //   <span className={styles.nome}>Produto</span>
            //   <span className={styles.nome}>Data</span>
            //   <img src={data.product.image} alt="" />
            //   <span className={styles.nome}>Preço</span>
            //   <span className={styles.nome}>Tipo</span>
            //   <span className={styles.nome}>Pagamento</span>
            //   <span className={styles.nome}>Parcelas</span>
            //   <span
            //     className={styles.desc}
            //     style={{
            //       fontFamily: 'Poppins',
            //       color: 'red',
            //     }}
            //   >
            //     {data.createdAt}
            //   </span>
            //   <span className={styles.desc}>R${data.product.price}</span>
            //   <span className={styles.desc}>{data.product.type}</span>
            //   <span className={styles.desc}>
            //     {data.price < 0 ? 'Compra' : 'Venda'}
            //   </span>
            //   <span className={styles.desc}>{contador}</span>
            // </div>
          );
        })}
      </>
    );
  } else return null;
};

export default History;
