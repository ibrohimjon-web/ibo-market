import React from 'react';
import { FaTelegram, FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className='footer-container'>
        <div className='footer-brand'>
          <h2>IBO Market</h2>
          <p>Sifatli va ishonchli mahsulotlar manzili</p>
        </div>

        <div className='footer-links'>
          <h4>Havolalar</h4>
          <ul>
            <li>
              <a href='/'>Bosh sahifa</a>
            </li>
            <li>
              <a href='/kategoriyalar'>Kategoriya</a>
            </li>
            <li>
              <a href='/kontakt'>Bog‘lanish</a>
            </li>
            <li>
              <a href='/haqida'>Biz haqimizda</a>
            </li>
          </ul>
        </div>

        <div className='footer-contact'>
          <h4>Bog‘lanish</h4>
          <p>
            <FaPhone /> +998 90 123 45 67
          </p>
          <div className='footer-socials'>
            <a href='https://t.me/ibomarket' target='_blank'>
              <FaTelegram />
            </a>
            <a href='https://instagram.com/ibomarket' target='_blank'>
              <FaInstagram />
            </a>
            <a href='https://facebook.com/ibomarket' target='_blank'>
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        © {new Date().getFullYear()} IBO Market. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
};

export default Footer;
