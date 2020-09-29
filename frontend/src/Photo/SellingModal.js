import React from 'react';
import styles from './SellingModal.module.css';
import useForm from '../Hooks/useForm';
import Input from '../Components/Forms/Input';
import Button from '../Components/Forms/Button';
import { sellProduct } from '../api';
import useFetch from '../Hooks/useFetch';
import Error from '../Components/Helper/Error';
import { useNavigate } from 'react-router-dom';

const SellingModal = ({ data, modal, setModal }) => {
  const { loading, error, request } = useFetch();
  const valorVenda = useForm();
  const valorQuantidade = useForm();
  const [parcelas, setParcelas] = React.useState('');
  const formatarVenda = valorVenda.value.toString();
  const corrigirVenda = Number(formatarVenda.replace(/[$,]/g, '.'));
  const total = +valorQuantidade.value * corrigirVenda;
  const totalParcelado = total / parcelas;
  const navigate = useNavigate();

  console.log(total);

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setModal(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('id', data.id);
    formData.append('productName', data.productName);
    formData.append('quantity', valorQuantidade.value);
    formData.append('price', Number(valorVenda.value.replace(/[$,]/g, '.')));
    formData.append('type', data.type);
    formData.append('companyId', 1);
    formData.append('image', data.image);
    parcelas === 1
      ? formData.append('isApportioned', 0)
      : formData.append('isApportioned', 1);

    formData.append('portion', parcelas);

    const obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });
    const json = JSON.stringify(obj);

    console.log(json);

    const token = window.localStorage.getItem('token');
    const { url, options } = sellProduct(json, token);
    request(url, options);
    navigate('/');
  }

  if (data) {
    return (
      <>
        <div className={styles.modal} onClick={handleOutside}>
          <div className={styles.sell}>
            <h1 className={`${styles.title} title3`}>
              Efetuar venda de produto:
            </h1>

            <form className={styles.form} onSubmit={handleSubmit}>
              <Input
                label="Valor de venda:"
                maxLength="20"
                type="text"
                name="valorVenda"
                {...valorVenda}
              />
              {valorVenda.value ? (
                <Input
                  label="Quantidade:"
                  maxLength="20"
                  type="number"
                  name="quantidade"
                  {...valorQuantidade}
                />
              ) : (
                <Input
                  label="Quantidade:"
                  disabled
                  maxLength="20"
                  type="number"
                  name="quantidade"
                  {...valorQuantidade}
                />
              )}

              <label htmlFor="parcelas">Selecione o número de parcelas:</label>
              {total === 0 ? (
                <select disabled></select>
              ) : (
                <select
                  id="parcelas"
                  value={parcelas}
                  onChange={({ target }) => {
                    setParcelas(target.value);
                  }}
                >
                  <option disabled value=""></option>
                  <option value="1">
                    {`Uma vez de R$${(
                      Math.round((total / 1) * 100) / 100
                    ).toFixed(2)} sem juros`}{' '}
                  </option>
                  <option value="2">
                    {`Duas vezes de R$${(
                      Math.round((total / 2) * 100) / 100
                    ).toFixed(2)} sem juros`}{' '}
                  </option>
                  <option value="3">
                    {`Três vezes de R$${(
                      Math.round((total / 3) * 100) / 100
                    ).toFixed(2)} sem juros`}{' '}
                  </option>
                  <option value="4">
                    {`Quatro vezes de R$${(
                      Math.round((total / 4) * 100) / 100
                    ).toFixed(2)} sem juros`}{' '}
                  </option>
                  <option value="5">
                    {`Cinco vezes de R$${(
                      Math.round((total / 5) * 100) / 100
                    ).toFixed(2)} sem juros`}{' '}
                  </option>
                  <option value="6">
                    {`Seis vezes de R$${(
                      Math.round((total / 6) * 100) / 100
                    ).toFixed(2)} sem juros`}{' '}
                  </option>
                </select>
              )}
              <div className={styles.flexWrap}>
                {+valorQuantidade.value > data.quantity ? (
                  <Button disabled>Quantidade indisponível.</Button>
                ) : loading ? (
                  <Button disabled>Carregando...</Button>
                ) : (
                  <Button>Finalizar</Button>
                )}
                {parcelas && <h3>Valor final: R${totalParcelado}</h3>}
              </div>

              <Error error={error} />
            </form>
            <div className={styles.wrapper}>
              <img className={styles.image} src={data.image} alt="" />
            </div>
          </div>
        </div>
        ;{' '}
      </>
    );
  } else {
    return null;
  }
};

export default SellingModal;
