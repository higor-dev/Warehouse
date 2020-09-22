import React from 'react';
import { Route, Routes } from 'react-router-dom';
import History from './History';
import Stats from './Stats';
import StatsHeader from './StatsHeader';

const UserStats = () => {
  return (
    <section className="container">
      <StatsHeader />
      <Routes>
        <Route path="/" element={<Stats />}></Route>
        <Route path="historico" element={<History />}></Route>
      </Routes>
    </section>
  );
};

export default UserStats;
