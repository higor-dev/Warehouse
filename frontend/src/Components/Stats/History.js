import React from 'react';
import styles from './History.module.css';

const History = ({ dataBalance }) => {
  console.log(dataBalance) //To remove
  if (dataBalance) {
    return (
      <>
        {dataBalance.map((data,index) => {
          let contador = 0;
          //Para cada iteração do dataBalance.map, eu terei uma transaction em data.
          //Mas data possui installments, uma lista.
          //Logo, data.installments.map -> minhas parcelas.
          //Para cada iteração de dataBalance.map, eu preciso calcular quantas parcelas estão pagas e mostrar esse valor.
          
          //Iteração para pegar os installments
          data.installments.map((value,index) => {
            if(value.paid == true){
              contador++;
            }
          })

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
                  {contador}
              </span>
            </div>
          );
        })}
      </>
    );
  } else return null;
};

export default History;
