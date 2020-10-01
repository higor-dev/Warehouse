import React from 'react';
import Button from '../Components/Forms/Button';
import styles from './ProductsPage.module.css';
import SellingModal from './SellingModal';
import AdicionarModal from './AdicionarModal';

const ProductsPage = ({ dataBalance }) => {
  const [modal, setModal] = React.useState(null);
  const [adicionarModal, setNovoModal] = React.useState(null);

  function handleClick(e) {
    e.preventDefault();
    setModal(dataBalance);
  }

  function handleAdicionar(e) {
    e.preventDefault();
    setNovoModal(dataBalance);
  }

  console.log(modal);

  return (
    <>
      {adicionarModal && (
        <AdicionarModal
          dataBalance={dataBalance}
          product={adicionarModal}
          setNovoModal={setNovoModal}
        />
      )}
      {modal && (
        <SellingModal
          dataBalance={dataBalance}
          product={modal}
          setModal={setModal}
        />
      )}
      <div>
        <div className={styles.grid}>
          <img src={dataBalance.image} alt={dataBalance.productName} />
          <div className={styles.description}>
            <h1 className="title">{dataBalance.productName}</h1>
            <span className={styles.id}>Product ID: {dataBalance.id}</span>
            <div>
              <h2 className={styles.preco}>Preço: R${dataBalance.price}</h2>
              <h2 className={styles.quantidade}>
                Quantidade em estoque: {dataBalance.quantity}{' '}
                <button onClick={handleAdicionar} className={styles.adicionar}>
                  +
                </button>
              </h2>
            </div>
            <div className={styles.vender}>
              <div className={styles.formWrap}>
                <form className={styles.form}>
                  <Button onClick={handleClick}>Vender</Button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.descricao}>
            <h1 className="title3"> </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
