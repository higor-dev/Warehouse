import React from 'react';
import { createProduct } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './UserProductPost.module.css';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../Helper/Head';

const UserPhotoPost = () => {
  const product = useForm();
  const type = useForm();
  const sellingPrice = useForm();
  const quantity = useForm('number');
  const price = useForm('money');
  // const [img, setImg] = React.useState({});
  const image = useForm();
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/');
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();

    const productValues = JSON.stringify({
      productName: product.value,
      quantity: +quantity.value,
      price: Number(price.value.replace(/[$,]/g, '.')),
      type: type.value,
      companyId: 1,
      image: image.value,
      sellPrice: +sellingPrice.value,
    });

    const token = window.localStorage.getItem('token');
    const { url, options } = createProduct(productValues, token);
    request(url, options);
  }

  // async function handleImgChange({ target }) {
  //   const file = target.files[0];
  //   const base64 = await convertBase64(file);
  //   console.log(base64);
  //   setImg({
  //     preview: URL.createObjectURL(target.files[0]),
  //     raw: target.files[0],
  //     base64: base64,
  //   });
  // }

  // if we ever want to use base64 again.
  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       resolve(error);
  //     };
  //   });
  // };

  return (
    <>
      <Head title="Postar" description="Postar" />
      <section className={`${styles.photoPost} animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Ex.: Axial TR4"
            label="Produto"
            type="text"
            name="productName"
            {...product}
          />
          <Input label="Imagem" type="text" name="image" {...image} />
          <Input
            label="Categoria"
            placeholder="Ex.: Suspensão"
            type="text"
            name="type"
            {...type}
          />
          <Input
            label="Quantidade"
            type="number"
            placeholder="Ex.: 5"
            pattern="\d*"
            maxLength="4"
            name="quantity"
            {...quantity}
          />
          <Input
            label="Preço"
            placeholder="Ex.: 1000,99"
            type="text"
            name="price"
            {...price}
          />
          <Input
            label="Preço para venda"
            placeholder="Ex.: 1500,99"
            type="text"
            name="price"
            {...sellingPrice}
          />
          {/* <input
            className={styles.file}
            type="file"
            name="img"
            id="image"
            onChange={handleImgChange}
          /> */}
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
        {/* <div>
          {img.preview && (
            <div
              className={styles.preview}
            // style={{ backgroundImage: `url(' ${img.preview}')` }}
            >
              <img src={img.base64} alt="" />
            </div>
          )}
        </div> */}
      </section>
    </>
  );
};

export default UserPhotoPost;
