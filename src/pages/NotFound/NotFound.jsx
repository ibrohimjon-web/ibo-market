import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='notfound-container'>
      <h1 className='notfound-title'>404</h1>
      <p className='notfound-text'>Sahifa topilmadi!</p>
      <Link to='/' className='notfound-btn'>
        Bosh sahifaga qaytish
      </Link>
    </div>
  );
};

export default NotFound;
