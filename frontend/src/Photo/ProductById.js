import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Photo from './Photo';
import UpdateProduct from './UpdateProduct';

const ProductById = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Photo />}></Route>
        <Route path="editar" element={<UpdateProduct />}></Route>
      </Routes>
    </div>
  );
};

export default ProductById;
