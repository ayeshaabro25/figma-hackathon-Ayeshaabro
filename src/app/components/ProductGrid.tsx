import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    imageSrc: "/images/product1.jpg",
    imageAlt: "Product 1",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product2.jpg",
    imageAlt: "Product 2",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product3.jpg",
    imageAlt: "Product 3",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product4.jpg",
    imageAlt: "Product 4",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product5.jpg",
    imageAlt: "Product 5",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product6.jpg",
    imageAlt: "Product 6",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product7.jpg",
    imageAlt: "Product 7",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
  {
    imageSrc: "/images/product8.jpg",
    imageAlt: "Product 8",
    title: "Graphic Design",
    department: "English Department",
    originalPrice: "$16.48",
    discountPrice: "$6.48",
    colors: ["#007bff", "#ffa500", "#20c997", "#001f3f"],
  },
];

const ProductGrid: React.FC = () => {
  return (
    <div className="product-grid-container px-6 md:px-12 py-10">
      <h2 className="section-title text-2xl md:text-3xl font-bold text-center mb-4">Featured Products</h2>
      <h3 className="subtitle text-lg md:text-xl font-semibold text-center mb-2">BESTSELLER PRODUCTS</h3>
      <p className="description text-center text-gray-700 mb-6">Problems trying to resolve the conflict between</p>
      <div className="product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageSrc={product.imageSrc}
            imageAlt={product.imageAlt}
            title={product.title}
            department={product.department}
            originalPrice={product.originalPrice}
            discountPrice={product.discountPrice}
            colors={product.colors}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
