import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PhotoContent.module.css';
import PhotoDelete from './PhotoDelete';
import ImageModal from '../Components/Helper/ImageModal';
import PhotoEdit from './PhotoEdit';

const PhotoContent = ({ data }) => {
  return (
    <>
      <div className={styles.photo}>
        <div className={styles.img}>
          <ImageModal src={data.image} alt={data.productName} />
        </div>
        <div className={styles.details}>
          <div className={styles.flexSla}>
            <div className={styles.flexOi}>
              <p className={styles.author}>
                <PhotoDelete data={data} id={data.id} />
              </p>
              <p className={styles.author}>
                <PhotoEdit id={data.id} />
              </p>
            </div>
            <h1 className={`${styles.titleNovo} title4`}>
              <Link to={`/produto/${data.id}`}>{data.productName}</Link>
            </h1>
            <ul className={styles.attributes}>
              <li>
                <h3>
                  Preço:{' '}
                  <span style={{ color: 'red' }}>
                    R$
                    {Math.abs(
                      (Math.round(data.sellPrice * 100) / 100).toFixed(2),
                    )}
                  </span>
                </h3>{' '}
              </li>
              <li>
                <h3>
                  Quantidade em estoque:{' '}
                  <span style={{ color: 'red' }}>{data.quantity}</span>
                </h3>{' '}
              </li>
              <li>
                <h3>
                  Status:{' '}
                  {data.quantity > 0 ? (
                    <span style={{ color: 'green' }}>Disponível!</span>
                  ) : (
                    <span style={{ color: 'red' }}>Indisponível.</span>
                  )}
                </h3>{' '}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.xesque}>
          <div className={styles.wrapper}>
            <Link className={styles.link} to={`/produto/${data.id}`}>
              Vender o produto
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoContent;
