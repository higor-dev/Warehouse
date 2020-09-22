import React from 'react';
import styles from './History.module.css';
import { ReactComponent as AdicionarFoto } from '../../Assets/adicionar.svg';
import { ReactComponent as Filtro } from '../../Assets/filtro.jpg';
import logo from '../../Assets/filtro.jpg';

const History = () => {
  return (
    <>
      <div className={`${styles.history} animeLeft`}>
        <h2 className={styles.produto}>Produto</h2>
        <h2 className={styles.produtoPc}>Preço</h2>
        <h2 className={styles.produtoQtd}>Quantidade</h2>
        <h2 className={styles.produtoData}>Data</h2>
        <div className={styles.imagemContainer}>
          <img className={styles.img} src={logo} alt="" />
          <div className={styles.drop}>
            <h3>Filtro de Óleo</h3>
          </div>
        </div>
        <div className={styles.gridPc}>
          <span className={styles.descPc}>R$20,00</span>
        </div>
        <div className={styles.gridQtd}>
          <span className={styles.descQtd}>3</span>
        </div>
        <div className={styles.gridData}>
          <span className={styles.descData}>22/09/2020</span>
        </div>
      </div>
      <div className={`${styles.history} animeLeft`}>
        <h2 className={styles.produto}>Produto</h2>
        <h2 className={styles.produtoPc}>Preço</h2>
        <h2 className={styles.produtoQtd}>Quantidade</h2>
        <h2 className={styles.produtoData}>Data</h2>
        <div className={styles.imagemContainer}>
          <img className={styles.img} src={logo} alt="" />
          <div className={styles.drop}>
            <h3>Filtro de Óleo</h3>
          </div>
        </div>
        <div className={styles.gridPc}>
          <span className={styles.descPc}>R$20,00</span>
        </div>
        <div className={styles.gridQtd}>
          <span className={styles.descQtd}>3</span>
        </div>
        <div className={styles.gridData}>
          <span className={styles.descData}>22/09/2020</span>
        </div>
      </div>
    </>
  );
};

export default History;
