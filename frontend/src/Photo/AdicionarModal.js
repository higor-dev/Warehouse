import React from 'react';
import { buyProduct } from '../api';
import Button from '../Components/Forms/Button';
import Input from '../Components/Forms/Input';
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';
import styles from './AdicionarModal.module.css';
import { useNavigate } from 'react-router-dom';
import Error from '../Components/Helper/Error';
import Loading from '../Components/Helper/Loading';

const AdicionarModal = ({ dataBalance, adicionarModal, setNovoModal }) => {
  const quantidade = useForm('number');
  const { loading, request, data, error } = useFetch();
  const quantidadeNumero = +quantidade.value;
  const navigate = useNavigate();

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setNovoModal(null);
    }
  }

  React.useEffect(() => {
    if (data) navigate('/');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if (quantidadeNumero) {
      //prettier-ignore
      const oi = JSON.stringify({
        'id': dataBalance.id,
        'productName': dataBalance.productName,
        'quantity': parseFloat(+quantidade.value),
        'price': dataBalance.price,
        'type': dataBalance.type,
        'companyId': 1,
        'image': dataBalance.image,
        'isApportioned': 0,
        'portion': 1,
      })

      const token = window.localStorage.getItem('token');
      const { url, options } = buyProduct(oi, token);
      request(url, options);
    } else {
      return alert('Você deve preencher todos os campos.');
    }
  }
  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  return (
    <div className={styles.modal} onClick={handleOutside}>
      <div className={styles.sell}>
        <h1 className={`${styles.title} title3`}>
          Adicionar produto ao estoque
        </h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <Input
            label="Adicionar quantidade:"
            maxLength="20"
            type="text"
            name="valorVenda"
            {...quantidade}
          />
          {loading ? (
            <Button disabled>Carregando...</Button>
          ) : (
            <Button>Adicionar</Button>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdicionarModal;
