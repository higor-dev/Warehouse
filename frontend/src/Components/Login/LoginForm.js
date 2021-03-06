import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  // const username = useForm();
  const email = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (email.validate() && password.validate()) {
      // userLogin(username.value, password.value);
      userLogin(email.value, password.value);
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title3">Login</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="E-mail" type="text" name="email" {...email} />
        {/* <Input label="Usuário" type="text" name="username" {...username} /> */}
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando</Button>
        ) : (
          <Button>Entrar</Button>
        )}
        <Error error={error} />
        {error && <p>{error}</p>}
      </form>
      <Link className={styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
    </section>
  );
};

export default LoginForm;
