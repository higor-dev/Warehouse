import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/../Home/Header';
import Home from './Components/../Home/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import Products from './Photo/Products';
import { Provider } from 'react-redux';
import store from './Store';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <UserStorage>
            <Provider store={store}>
              <main className="appBody">
                <Header />

                <Routes>
                  <ProtectedRouter path="/" element={<Home />} />
                  <ProtectedRouter path="/react-store" element={<Login />} />
                  <Route path="/login/*" element={<Login />} />
                  <ProtectedRouter path="/produto/*" element={<Products />} />
                  <ProtectedRouter path="/conta/*" element={<User />} />
                </Routes>
              </main>
            </Provider>
          </UserStorage>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
