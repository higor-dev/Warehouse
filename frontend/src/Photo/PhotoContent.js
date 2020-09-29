import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import Button from '../Components/Forms/Button';
import { ReactComponent as Adicionar } from '../Assets/adicionar.svg';
import PhotoDelete from './PhotoDelete';
import ImageModal from '../Components/Helper/ImageModal';

const PhotoContent = ({ data }) => {
  return (
    <>
      <div className={styles.photo}>
        <div className={styles.img}>
          <ImageModal src={data.image} alt={data.productName} />
        </div>
        <div className={styles.details}>
          <div className={styles.flexSla}>
            <p className={styles.author}>
              <PhotoDelete id={data.id} />
            </p>
            <h1 className={`${styles.titleNovo} title2`}>
              <Link to={`/produto/${data.id}`}>{data.productName}</Link>
            </h1>
            <ul className={styles.attributes}>
              <li>
                <h3>
                  Preço: <span style={{ color: 'red' }}>R${data.price}</span>
                </h3>{' '}
              </li>
              <li>
                <h3>
                  Quantidade em estoque:{' '}
                  <span style={{ color: 'red' }}>{data.quantity}</span>
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
    </>
  );
};

export default PhotoContent;
