import React from 'react';
import { useParams } from 'react-router-dom';
import mockProducts from '../../data/mockProduct';
import Card from '../../components/Card/Card';
import { Link } from 'react-router-dom';
import './CategoryDetails.css';

const CategoryDetails = () => {
  const { kategoriyaNomi } = useParams();
  const filtered = mockProducts.filter((p) => p.category === kategoriyaNomi);

  return (
    <div className='category-details'>
      <div className='category-header'>
        <h2 className='category-details-title'>
          🗂 Kategoriya: <span className='highlight'>{kategoriyaNomi}</span>
        </h2>
        <Link to='/' className='back-to-home'>
          ← Bosh sahifaga qaytish
        </Link>
      </div>

      {filtered.length > 0 ? (
        <div className='category-products-grid'>
          {filtered.map((p, index) => (
            <Card key={p.id} {...p} animationDelay={index * 0.1} />
          ))}
        </div>
      ) : (
        <div className='empty-category'>
          <p className='empty-message'>❌ Bu kategoriyada hech qanday mahsulot topilmadi.</p>
          <Link to='/' className='continue-shopping'>
            Bosh sahifaga qaytish
          </Link>
        </div>
      )}
    </div>
  );
};

export default CategoryDetails;
