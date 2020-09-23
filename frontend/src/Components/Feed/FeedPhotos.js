import React from 'react';
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import FeedPhotosItem from './FeedPhotosItem';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import styles from './FeedPhotos.module.css';
import Search from '../Helper/Search';

const FeedPhotos = ({ user, setModalPhoto }) => {
  const { data, loading, error, request } = useFetch();
  const [search, setSearch] = React.useState('');

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page: 1, total: 200, user });
      const { json } = await request(url, options);
      console.log(json);
    }
    fetchPhotos();
  }, [request, user]);

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data) {
    const filter = data.filter((produto) => {
      return produto.title.toLowerCase().includes(search.toLowerCase());
    });

    return (
      <>
        <Search
          className={styles.search}
          value={search}
          onChange={({ target }) => {
            setSearch(target.value);
          }}
        />
        <ul className={`${styles.feed} animeLeft`}>
          {filter.map((photo, index) => (
            <FeedPhotosItem
              setModalPhoto={setModalPhoto}
              key={photo.id}
              photo={photo}
              filter={filter}
            />
          ))}
        </ul>
      </>
    );
  } else return null;
};

export default FeedPhotos;
