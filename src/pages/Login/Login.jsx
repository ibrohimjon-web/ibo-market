import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
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
        name: 'Foydalanuvchi',
        email: formData.email,
        id: Date.now().toString(),
      };

      dispatch(
        loginSuccess({
          user: demoUser,
          token: 'demo-token-' + Date.now(),
        })
      );

      toast.success('Muvaffaqiyatli kirdingiz!');
      navigate('/');
    } catch (err) {
      toast.error("Kirishda xatolik! Qayta urinib ko'ring.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <h2 className='auth-title'>Kirish</h2>

        <form onSubmit={handleSubmit} className='auth-form'>
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
            <label htmlFor='password'>Parol</label>
            <input
              type='password'
              id='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
              placeholder='••••••••'
              minLength='6'
            />
          </div>

          <button type='submit' className='auth-button' disabled={loading}>
            {loading ? 'Kirilmoqda...' : 'Kirish'}
          </button>
        </form>

        <div className='auth-footer'>
          <p>Hisobingiz yo'qmi?</p>
          <Link to='/register' className='auth-link'>
            Ro'yxatdan o'tish
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
