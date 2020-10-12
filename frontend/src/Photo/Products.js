import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductById from './ProductById';

const Products = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path=":id/*" element={<ProductById />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Products;
