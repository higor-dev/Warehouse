import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../Assets/usuario.svg';
import { ReactComponent as Tool } from '../Assets/tool.svg';
import { UserContext } from '../UserContext';
import Button from './Forms/Button';

const Header = () => {
  const { data, userLogout, login } = React.useContext(UserContext);
  const [active, setActive] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const pageClickEvent = (e) => {
      if (login)
        if (
          dropdownRef.current !== null &&
          !dropdownRef.current.contains(e.target)
        ) {
          setActive(!active);
        }
    };
    if (active) {
      window.addEventListener('click', pageClickEvent);
    }
    return () => {
      window.removeEventListener('click', pageClickEvent);
    };
  }, [active, setActive, login]);

  function handleActive() {
    setActive(!active);
  }
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link to="/" aria-label="Dogs - Home">
            <Tool className={styles.logo} />
          </Link>
          {data ? (
            <div className={styles.wrapper}>
              <Link className={styles.login} to="/conta">
                <p className={styles.nome}>{data.nome}</p>
              </Link>
              <div className={styles.dropdownContainer}>
                <button
                  onClick={handleActive}
                  className={styles.dropdownTrigger}
                >
                  <User />
                </button>
                {active && (
                  <nav
                    ref={dropdownRef}
                    className={`menu ${active ? 'active' : 'inactive'}`}
                  >
                    <ul className={styles.dropDownUL}>
                      <li onClick={userLogout}>
                        <Link onClick={userLogout} to="">
                          Sair
                        </Link>
                      </li>
                    </ul>
                  </nav>
                )}
              </div>
            </div>
          ) : (
            <Link className={styles.login} to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
