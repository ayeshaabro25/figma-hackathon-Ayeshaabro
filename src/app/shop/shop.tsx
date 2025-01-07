import React from 'react';
import ProductGrid from '../components/ProductGrid';

const Shop: React.FC = () => {
  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1 className="shop-title">Shop</h1>
        <p className="shop-subtitle">Explore our exclusive collection of products</p>
      </div>
      <ProductGrid />
    </div>
  );
};

export default Shop;
