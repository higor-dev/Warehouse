import React from 'react';
import { useNavigate } from 'react-router-dom';
import { buyProduct } from '../api';
import Button from '../Components/Forms/Button';
import Input from '../Components/Forms/Input';
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';
import styles from './AdicionarModal.module.css';

const AdicionarModal = ({ data, adicionarModal, setNovoModal }) => {
  const quantidade = useForm('number');
  const { loading, request } = useFetch();
  const navigate = useNavigate();

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setNovoModal(null);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (quantidade) {
      const formData = new FormData();
      formData.append('id', data.id);
      formData.append('productName', data.productName);
      formData.append('quantity', +quantidade.value);
      formData.append('price', data.price);
      formData.append('type', data.type);
      formData.append('companyId', 1);
      formData.append('image', data.image);
      formData.append('isApportioned', 0);

      formData.append('portion', 1);

      const obj = {};
      formData.forEach((value, key) => {
        obj[key] = value;
      });
      const json = JSON.stringify(obj);

      console.log(json);

      const token = window.localStorage.getItem('token');
      const { url, options } = buyProduct(json, token);
      request(url, options);
      navigate('/');
    } else {
      return alert('Você deve preencher todos os campos.');
    }
  }

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
