import React from 'react';
import styles from './FeedModal.module.css';
import useFetch from '../../Hooks/useFetch';
import { getProduct } from '../../api';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../../Photo/PhotoContent';

const FeedModal = ({ product, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch();

  function handleOutside(event) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  React.useEffect(() => {
    const token = window.localStorage.getItem('token')
    const { url, options } = getProduct(product.id, token);
    request(url, options);
  }, [product, request]);

  return (
    <div onClick={handleOutside} className={styles.modal}>
      {error && <Error />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  );
};

export default FeedModal;
