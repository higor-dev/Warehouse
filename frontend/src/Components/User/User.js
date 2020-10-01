import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';
import UserStats from '../Stats/UserStats';
import { UserContext } from '../../UserContext';
import UserProfile from './UserProfile';
import NavList from '../NavList';

const User = () => {
  const { data } = React.useContext(UserContext);

  return (
    <>
      <div className="appContainerMain">
        <NavList />
        <section className="appDivider animeLeft">
          <UserHeader />
          <Routes>
            <Route path="/" element={<UserProfile data={data} />}></Route>
            <Route path="postar" element={<UserPhotoPost />}></Route>
            <Route path="estatisticas/*" element={<UserStats />}></Route>
          </Routes>
        </section>
      </div>
    </>
  );
};

export default User;
