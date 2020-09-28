import React from 'react';
import Button from '../Components/Forms/Button';
import styles from './ProductsPage.module.css';

const ProductsPage = ({ data }) => {
  // const [select, setSelect] = React.useState('');
  // const [parcelas, setParcelas] = React.useState('');
  // const total = select * data.price;
  // const totalParcelado = total / parcelas;

  React.useEffect(() => {
    document.body.classList.add(styles.body);
    return () => {
      document.body.className = '';
    };
  });

  // console.log(total);

  // function polir() {
  //   if (totalParcelado > 0 && totalParcelado !== Infinity) {
  //     return totalParcelado;
  //   }
  // }

  // if (totalParcelado > 0 && totalParcelado !== Infinity) {
  //   console.log(totalParcelado);
  // }

  // function handleChange({ target }) {
  //   setSelect(target.value);
  // }

  // function handleParcelas({ target }) {
  //   setParcelas(target.value);
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('total', totalParcelado);
  //   formData.append('parcelas', parcelas);
  //   console.log(formData.get('total'));
  //   console.log(formData.get('parcelas'));
  // }
  return (
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
              <button className={styles.adicionar}>+</button>
              <button className={styles.remover}>-</button>
            </h2>
          </div>
          <div className={styles.vender}>
            <div className={styles.formWrap}>
              {/* <h1 className={`${styles.venderTitulo} title3`}>Vender</h1> */}
              <form className={styles.form}>
                {/* <label htmlFor="produtos">Selecione a quantidade:</label>
                <select id="produtos" value={select} onChange={handleChange}>
                  <option disabled value=""></option>
                  <option value="1">{`Um por R$${data.price}`} </option>
                  <option value="2">{`Dois por R$${data.price * 2}`} </option>
                  <option value="3">{`Três por R$${data.price * 3}`} </option>
                  <option value="4">{`Quatro por R$${data.price * 4}`} </option>
                  <option value="5">{`Cinco por R$${data.price * 5}`} </option>
                  <option value="6">{`Seis por R$${data.price * 6}`} </option>
                  <option value="7">{`Sete por R$${data.price * 7}`} </option>
                  <option value="8">{`Oito por R$${data.price * 8}`} </option>
                </select>
                <label className={styles.parcelas} htmlFor="">
                  Selecione o número de parcelas:
                </label>
                {total === 0 ? (
                  <select disabled></select>
                ) : (
                  <select
                    id="produtos"
                    value={parcelas}
                    onChange={handleParcelas}
                  >
                    <option disabled value=""></option>
                    <option value="1">
                      {`Uma vez de R$${total / 1} sem juros`}{' '}
                    </option>
                    <option value="2">
                      {`Duas vezes de R$${total / 2} sem juros`}{' '}
                    </option>
                    <option value="3">
                      {`Três vezes de R$${total / 3} sem juros`}{' '}
                    </option>
                    <option value="4">
                      {`Quatro vezes de R$${total / 4} sem juros`}{' '}
                    </option>
                    <option value="5">
                      {`Cinco vezes de R$${total / 5} sem juros`}{' '}
                    </option>
                    <option value="6">
                      {`Seis vezes de R$${total / 6} sem juros`}{' '}
                    </option>
                  </select>
                )} */}
                <Button>Vender</Button>
              </form>
            </div>
            {/* <div className={polir() ? styles.total : ''}>
              {parcelas > 1 ? (
                <h3 className={`${styles.subTotal} title3`}>
                  {polir() && `Valor parcelado: R$${polir()}`}
                </h3>
              ) : (
                <h3 className={`${styles.subTotal} title3`}>
                  {polir() && `Valor total: R$${polir()}`}
                </h3>
              )}
              {parcelas > 1 && (
                <h3 className={`${styles.subParcelas} title3`}>
                  {polir() && `Número de parcelas: ${parcelas}`}
                </h3>
              )}
              {parcelas > 1 && (
                <h3 className={`${styles.subTotalFinal} title3`}>
                  {polir() && `Valor em ${parcelas} meses: R$${total}`}
                </h3>
              )}
            </div> */}
          </div>
        </div>
        <div className={styles.descricao}>
          <h1 className="title3">Descrição do produto: </h1>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem,
            voluptas!
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
