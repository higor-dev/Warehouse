import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import Button from '../Components/Forms/Button';
import { ReactComponent as Adicionar } from '../Assets/adicionar.svg';
import { UserContext } from '../UserContext';
import PhotoDelete from './PhotoDelete';
import ImageModal from '../Components/Helper/ImageModal';

const PhotoContent = ({ data }) => {
  const user = React.useContext(UserContext);
  const { photo } = data;

  console.log(data);

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <ImageModal src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.details}>
        <div>
          <p className={styles.author}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link to={`/perfil/${photo.author}`}>{photo.author}</Link>
            )}
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={styles.attributes}>
            <li>
              <h3>
                Preço: <span style={{ color: 'red' }}>R${photo.idade}</span>
              </h3>{' '}
            </li>
            <li>
              <h3>
                Quantidade em estoque:{' '}
                <span style={{ color: 'red' }}>{photo.peso}</span>
              </h3>{' '}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.xesque}>
        <div className={styles.wrapper}>
          <Adicionar className={styles.adicionar} />
          <Button>Vender</Button>
        </div>
      </div>
    </div>
  );
};

export default PhotoContent;
