import React from 'react';
import CategoryItem from './CategoryItem';
import './Category.css';

const categories = [
  { id: 1, name: 'Elektronika', path: '/kategoriya/elektronika' },
  { id: 2, name: 'Kiyim-kechak', path: '/kategoriya/kiyim' },
  { id: 3, name: 'Oziq-ovqat', path: '/kategoriya/oziq-ovqat' },
  { id: 4, name: 'Uy-ro‘zg‘or', path: '/kategoriya/uy' },
];

const Category = () => {
  return (
    <div className='category-container'>
      <h2 className='category-title'>Kategoriyalar</h2>
      <div className='category-list'>
        {categories.map((cat, index) => (
          <CategoryItem key={cat.id} name={cat.name} path={cat.path} delay={index * 0.1} />
        ))}
      </div>
    </div>
  );
};

export default Category;
