// In src/app/page.tsx
import React from 'react';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import NeutralUniverse from './components/NeutralUniverse';
import FeaturedPost from './components/FeaturedPosts';
import EditorPickGrid from './components/EditorsPick';
import VitsClassic from './components/VitsClassic';
import Breadcrumb from './components/BreadCrumb';


const HomePage: React.FC = () => {
  return (
    <div>
      <Hero/>
      <Breadcrumb/>
      <EditorPickGrid/>
      <ProductGrid />
      <VitsClassic/>
      <NeutralUniverse />
      <FeaturedPost/>
    </div>
  );
};

export default HomePage;

