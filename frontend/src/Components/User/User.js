import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserProductPost from './UserProductPost';
import UserStats from '../Stats/UserStats';
import { UserContext } from '../../UserContext';
import UserProfile from './UserProfile';
import NavList from '../../Home/NavList';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <div className="generalContainer">
        <NavList />
        <section className="animeLeft">
          <UserHeader />
          <Routes>
            <Route path="/" element={<UserProfile data={data} />}></Route>
            <Route path="postar" element={<UserProductPost />}></Route>
            <Route path="estatisticas/*" element={<UserStats />}></Route>
          </Routes>
        </section>
      </div>
    </>
  );
};

export default User;
