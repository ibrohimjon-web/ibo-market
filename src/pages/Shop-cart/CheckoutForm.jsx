// src/components/CheckoutForm/CheckoutForm.jsx
import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborildi:', formData);
    alert('Buyurtma yuborildi!');
    onClose(); // modalni yopish
  };

  return (
    <div className='checkout-overlay'>
      <div className='checkout-form'>
        <h3>Rasmiylashtirish</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='name'
            placeholder='Ismingiz'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type='tel'
            name='phone'
            placeholder='Telefon raqam'
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name='address'
            placeholder='Manzil'
            value={formData.address}
            onChange={handleChange}
            required
          ></textarea>
          <div className='form-buttons'>
            <button type='submit'>Yuborish</button>
            <button type='button' className='cancel-btn' onClick={onClose}>
              Bekor qilish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
