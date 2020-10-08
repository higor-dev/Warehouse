import React from 'react';
import styles from './SellingModal.module.css';
import useForm from '../Hooks/useForm';
import Input from '../Components/Forms/Input';
import Button from '../Components/Forms/Button';
import { sellProduct } from '../api';
import useFetch from '../Hooks/useFetch';
import Error from '../Components/Helper/Error';
import { useNavigate } from 'react-router-dom';

const SellingModal = ({ dataBalance, modal, setModal }) => {
  const { loading, error, request, data } = useFetch();
  const valor = useForm();
  const valorQuantidade = useForm();
  const valorPorcentagem = useForm();
  const [parcelas, setParcelas] = React.useState('');
  const formatarVenda = (+valor.value).toString();
  const corrigirVenda = Number(formatarVenda.replace(/[$,]/g, '.'));
  const total = +valorQuantidade.value * corrigirVenda;
  const totalParcelado = total / parcelas;
  const navigate = useNavigate();

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setModal(null);
    }
  }

  console.log(corrigirVenda);

  React.useEffect(() => {
    if (data) navigate('/');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (formatarVenda && valorQuantidade && parcelas) {
      //prettier-ignore
      const oi = JSON.stringify({
      'id': dataBalance.id,
      'productName': dataBalance.productName,
      'quantity': valorQuantidade.value,
      'price': Number(corrigirVenda),
      'type': dataBalance.type,
      'companyId': 1,
      'image': dataBalance.image,
      'isApportioned': Number(`${+parcelas === 1 ? 0 : 1}`),
      'portion': +parcelas,
    })
      const token = window.localStorage.getItem('token');
      const { url, options } = sellProduct(oi, token);
      request(url, options);
    } else {
      return alert('Você deve preencher todos os campos.');
    }
  }

  if (dataBalance) {
    return (
      <>
        <div className={styles.modal} onClick={handleOutside}>
          <div className={styles.sell}>
            <h1 className={`${styles.title} title3`}>
              Efetuar venda de produto:
            </h1>
            <div className={styles.wrapper}>
              <img className={styles.image} src={dataBalance.image} alt="" />
            </div>
            <div className={styles.espaco}>
              <span className={styles.calculado}>
                Preço unitário: R${' '}
                {Math.abs(
                  (Math.round(dataBalance.price * 100) / 100).toFixed(2),
                )}
              </span>
              <span className={styles.calculado2}>
                Calcular porcentagem: R$
                {valorPorcentagem.value &&
                  dataBalance.price +
                    dataBalance.price * (+valorPorcentagem.value / 100)}
                <Input
                  type="number"
                  name="porcentagem"
                  {...valorPorcentagem}
                ></Input>
              </span>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <Input
                label="Valor de venda:"
                maxLength="20"
                type="number"
                name="valor"
                {...valor}
              />
              {formatarVenda.value ? (
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
                {+valorQuantidade.value > dataBalance.quantity ? (
                  <Button disabled>Quantidade indisponível.</Button>
                ) : loading ? (
                  <Button disabled>Carregando...</Button>
                ) : (
                  <Button>Finalizar</Button>
                )}
                {parcelas && (
                  <h3>
                    Valor final: R$
                    {Math.abs(
                      (Math.round(totalParcelado * 100) / 100).toFixed(2),
                    )}
                  </h3>
                )}
              </div>

              <Error error={error} />
            </form>
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
