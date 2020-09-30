import React from 'react';
import { getAllProducts } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import Search from '../Helper/Search';
import ProductFeed from './ProductFeed';

const FeedPhotos = ({ user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    async function fetchPhotos() {
      const token = window.localStorage.getItem('token');
      const { url, options } = getAllProducts(token);
      request(url, options);
    }
    fetchPhotos();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    const filter = data.filter((filteredProduct) => {
      return filteredProduct.productName
        .toLowerCase()
        .includes(search.toLowerCase());
    });
    return (
      <>
        <div className={`${styles.container} animeLeft`}>
          <h1 className={styles.title}>Produtos</h1>
          <Search
            className={styles.search}
            value={search}
            onChange={({ target }) => {
              setSearch(target.value);
            }}
          />

          <ul className={`${styles.feed}`}>
            {filter.reverse().map((produto, index) => (
              <ProductFeed
                setModalPhoto={setModalPhoto}
                key={produto.id}
                produto={produto}
              />
            ))}
          </ul>
        </div>
      </>
    );
  } else return null;
};

export default FeedPhotos;
