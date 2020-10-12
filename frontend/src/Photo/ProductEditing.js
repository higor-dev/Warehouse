import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateProduct } from '../api';
import Button from '../Components/Forms/Button';
import Input from '../Components/Forms/Input';
import useFetch from '../Hooks/useFetch';
import useForm from '../Hooks/useForm';

const ProductEditing = ({ data }) => {
  const productNome = useForm();
  const sellingPrice = useForm();
  const productType = useForm();
  const productImg = useForm();
  const { request } = useFetch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const productValues = JSON.stringify({
      id: +data.id,
      productName: `${
        productNome.value ? productNome.value : data.productName
      }`,
      sellPrice: +`${
        +sellingPrice.value ? +sellingPrice.value : data.sellPrice
      }`,
      type: `${productType.value ? productType.value : data.type}`,
      image: `${productImg.value ? productImg.value : data.image}`,
    });

    console.log(productValues);
    const token = window.localStorage.getItem('token');
    const { url, options } = updateProduct(productValues, token);
    request(url, options);
    navigate('/');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder={`Antigo: ${data.productName}`}
          label="Novo nome do produto:"
          type="text"
          name="productName"
          {...productNome}
        />
        <Input
          placeholder={`Unitário: R$${data.price}`}
          label="Preço de venda:"
          type="text"
          name="productName"
          {...sellingPrice}
        />
        <Input label="Nova imagem:" type="text" name="image" {...productImg} />
        <Input
          placeholder={`Antigo: ${data.type}`}
          label="Nova categoria:"
          type="text"
          name="type"
          {...productType}
        />
        <Button>Editar</Button>
      </form>
    </div>
  );
};

export default ProductEditing;
