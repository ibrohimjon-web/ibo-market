import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerSuccess } from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API chaqiruvi o'rniga demo ma'lumot
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Demo foydalanuvchi ma'lumotlari
      const demoUser = {
        name: formData.name,
        email: formData.email,
        id: Date.now().toString(),
      };

      dispatch(
        registerSuccess({
          user: demoUser,
          token: 'demo-token-' + Date.now(),
        })
      );

      toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
      navigate('/');
    } catch (err) {
      toast.error("Ro'yxatdan o'tishda xatolik! Qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2 className='auth-title'>Ro'yxatdan o'tish</h2>

        <form onSubmit={handleSubmit} className='auth-form'>
          <div className='form-group'>
            <label htmlFor='name'>Ism</label>
            <input
              type='text'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder='Ismingiz'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='email@example.com'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>Parol (kamida 6 belgi)</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              minLength='6'
              placeholder='••••••••'
            />
          </div>

          <button type='submit' className='auth-button' disabled={loading}>
            {loading ? 'Yuklanmoqda...' : "Ro'yxatdan o'tish"}
          </button>
        </form>

        <div className='auth-footer'>
          <p>Hisobingiz bormi?</p>
          <Link to='/login' className='auth-link'>
            Kirish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
