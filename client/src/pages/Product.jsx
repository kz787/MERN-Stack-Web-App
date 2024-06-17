import Header from "../Component/Header";
import React from 'react';
import ProductList from '../Component/ProductList';
import ProductFom from '../Component/ProductFom';

const Product = () => {
  return (
    <>
    <Header />
    <div className='container'>
      <div className="row">
        <div className="col-md-6"><ProductFom/></div>
        <div className="col-md-6"><ProductList/></div>
      </div>
   </div>
   </>
  );
};

export default Product;
