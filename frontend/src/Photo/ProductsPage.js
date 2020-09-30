import React from 'react';
import Button from '../Components/Forms/Button';
import styles from './ProductsPage.module.css';
import SellingModal from './SellingModal';
import AdicionarModal from './AdicionarModal';

const ProductsPage = ({ data }) => {
  const [modal, setModal] = React.useState(null);
  const [adicionarModal, setNovoModal] = React.useState(null);

  React.useEffect(() => {
    document.body.classList.add(styles.body);
    return () => {
      document.body.className = '';
    };
  });

  function handleClick(e) {
    e.preventDefault();
    setModal(data);
  }

  function handleAdicionar(e) {
    e.preventDefault();
    setNovoModal(data);
  }

  console.log(modal);

  return (
    <>
      {adicionarModal && (
        <AdicionarModal
          data={data}
          product={adicionarModal}
          setNovoModal={setNovoModal}
        />
      )}
      {modal && (
        <SellingModal data={data} product={modal} setModal={setModal} />
      )}
      <div>
        <div className={styles.grid}>
          <img src={data.image} alt={data.productName} />
          <div className={styles.description}>
            <h1 className="title">{data.productName}</h1>
            <span className={styles.id}>Product ID: {data.id}</span>
            <div>
              <h2 className={styles.preco}>Preço: R${data.price}</h2>
              <h2 className={styles.quantidade}>
                Quantidade em estoque: {data.quantity}{' '}
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
