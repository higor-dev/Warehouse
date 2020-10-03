import React from 'react';
import styles from './UserProfile.module.css';
import fotoSidnei from '../../Assets/Sidnei.jpg';
import fotoJoao from '../../Assets/João.svg';
import Head from '../Helper/Head';

const UserProfile = ({ data }) => {
  if (data) {
    return (
      <>
        <Head title={data.name} description={`${data.name} JSBrakes`} />
        <div className={`${styles.profile}`}>
          <div className={styles.foto}>
            {data.name === 'Higor' && <img src={fotoSidnei} alt="" />}
            {data.name === 'João' && <img src={fotoJoao} alt="" />}
          </div>
          <div className={styles.info}>
            <div className={styles.wrapper}>
              <h1 className={styles.titulo}>{data.name}</h1>
            </div>
          </div>
        </div>
      </>
    );
  } else return null;
};

export default UserProfile;
