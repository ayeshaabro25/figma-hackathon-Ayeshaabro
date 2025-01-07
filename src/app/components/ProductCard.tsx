import React from 'react';

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  department: string;
  originalPrice: string;
  discountPrice: string;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  department,
  originalPrice,
  discountPrice,
  colors = [],
}) => {
  return (
    <div className="product-card max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="image-container relative">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="product-image w-full h-auto object-cover" 
        />
      </div>
      <div className="p-4">
        <h4 className="product-title text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="department text-sm text-gray-600 mb-2">{department}</p>
        <p className="price text-lg font-bold text-gray-800 mb-2">
          <span className="original-price text-sm text-gray-500 line-through mr-2">{originalPrice}</span>
          <span className="discount-price text-green-500">{discountPrice}</span>
        </p>
        <div className="color-options flex items-center gap-2">
          {colors.map((color, index) => (
            <span 
              key={index} 
              className="color-dot w-6 h-6 rounded-full" 
              style={{ backgroundColor: color }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
