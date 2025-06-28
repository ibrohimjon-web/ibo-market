import React, { useEffect } from 'react';
import mockProducts from '../../data/mockProduct';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './AllProducts.css';

const AllProducts = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='all-products'>
      <h2 className='section-title'>Barcha Mahsulotlar</h2>
      <div className='products-grid'>
        {mockProducts.map((product, index) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className='product-link'
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <Card {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
