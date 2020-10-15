import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as User } from '../Assets/usuario.svg';
import { ReactComponent as Tool } from '../Assets/tool.svg';
import { UserContext } from '../UserContext';
import Button from '../Components/Forms/Button';
import { connect } from 'react-redux';
import cart from '../Assets/cart.png';

const Header = ({ basketProps }) => {
  const { data, userLogout, login } = React.useContext(UserContext);
  const [active, setActive] = React.useState(false);
  const dropdownRef = React.useRef(null);
  const [cartCount, setCartCount] = React.useState(0);

  React.useEffect(() => {
    let count = 0;
    basketProps.cart.forEach((item) => {
      count += item.qty;
    });
    setCartCount(count);
  }, [basketProps.cart, cartCount]);

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
      <div>
        <nav className={styles.nav}>
          <Link to="/" aria-label="JSBrakes">
            <Tool className={styles.logo} />
          </Link>
          {data ? (
            <div className={styles.wrapper}>
              <Link
                className={styles.margin}
                to="/carrinho"
                aria-label="JSBrakes"
              >
                <div className={cart}>
                  <img src={cart} alt="cart" />
                  <span
                    style={
                      cartCount === 0
                        ? { display: 'none' }
                        : { display: 'block' }
                    }
                    className={styles.cartNumber}
                  >
                    {cartCount}
                  </span>
                </div>
              </Link>
              <Link className={styles.login} to="/conta">
                <p className={styles.nome}>{data.name}</p>
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

const mapStateToProps = (state) => {
  return {
    basketProps: state.basketState,
  };
};

export default connect(mapStateToProps)(Header);
