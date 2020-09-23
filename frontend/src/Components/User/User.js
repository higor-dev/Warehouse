import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feed from '../Feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from '../Stats/UserStats';
import { UserContext } from '../../UserContext';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />}></Route>
        <Route path="postar" element={<UserPhotoPost />}></Route>
        <Route path="estatisticas/*" element={<UserStats />}></Route>
      </Routes>
    </section>
  );
};

export default User;
