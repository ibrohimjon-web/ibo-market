import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
import './Category.css';

const CategoryItem = ({ name, path, delay = 0 }) => {
  return (
    <NavLink to={path} className='category-item' style={{ animationDelay: `${delay}s` }}>
      <span>{name}</span>
      <FaAngleRight className='category-icon' />
    </NavLink>
  );
};

export default CategoryItem;
