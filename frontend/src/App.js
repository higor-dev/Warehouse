import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

import Home from './Components/Home';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext';
import User from './Components/User/User';
import ProtectedRouter from './Components/Helper/ProtectedRouter';
import Photo from './Photo/Photo';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <UserStorage>
            <main className="appBody">
              <Header />

              <Routes>
                <ProtectedRouter path="/" element={<Home />} />
                <ProtectedRouter path="/react-store" element={<Login />} />
                <Route path="/login/*" element={<Login />} />
                <ProtectedRouter path="produto/:id" element={<Photo />} />
                <ProtectedRouter path="/conta/*" element={<User />} />
              </Routes>
            </main>
          </UserStorage>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
