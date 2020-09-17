import React from 'react';
import { PHOTO_POST } from '../../api';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';
import styles from './UserPhotoPost.module.css';
import Error from '../Helper/Error';
import { useNavigate } from 'react-router-dom';

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
    console.log(data);
  }, [data, navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    console.log(formData);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  async function handleImgChange({ target }) {
    const file = target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
      base64: base64,
    });
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        resolve(error);
      };
    });
  };

  return (
    <>
      <section className={`${styles.photoPost} animeLeft`}>
        <form onSubmit={handleSubmit}>
          <Input
            label="Produto"
            maxLength="20"
            type="text"
            name="nome"
            {...nome}
          />
          <Input
            label="Quantidade"
            type="number"
            pattern="\d*"
            maxLength="4"
            name="peso"
            {...peso}
          />
          <Input
            label="Preço"
            type="number"
            pattern="\d*"
            maxLength="4"
            name="idade"
            {...idade}
          />
          <input
            className={styles.file}
            type="file"
            name="img"
            id="img"
            onChange={handleImgChange}
          />
          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar</Button>
          )}
          <Error error={error} />
        </form>
        <div>
          {img.preview && (
            <div
              className={styles.preview}
              // style={{ backgroundImage: `url(' ${img.preview}')` }}
            >
              <img src={img.base64} alt="" />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserPhotoPost;
