import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from '../Stats/UserStats';
import { UserContext } from '../../UserContext';
import UserProfile from './UserProfile';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container mainContainer">
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserProfile data={data} />}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas/*" element={<UserStats />}></Route>
      </Routes>
    </section>
  );
};

export default User;
