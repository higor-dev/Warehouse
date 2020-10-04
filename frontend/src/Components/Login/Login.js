import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';

import { UserContext } from '../../UserContext';
import styles from './Login.module.css';
import Head from '../Helper/Head';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) {
    return <Navigate to="/conta" />;
  }
  return (
    <section className={styles.login}>
      <Head title="Login" description="Login JSBrakes" />
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
