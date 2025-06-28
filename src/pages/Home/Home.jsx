import React from 'react';
import Category from '../../components/Category/Category';
import Swipper from '../../components/Swipper/Swipper';
import AllProducts from '../../components/AllProducts/AllProducts';
import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <section className='home-banner'>
        <Swipper />
      </section>

      <section className='home-category'>
        <Category />
      </section>

      <section className='home-products'>
        <h2 className='home-products-title'>
          <span className='title-highlight'>🔥 Eng so'nggi mahsulotlar</span>
        </h2>
        <AllProducts />
      </section>
    </div>
  );
};

export default Home;
