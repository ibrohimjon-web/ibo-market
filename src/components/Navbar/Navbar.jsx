import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { FaHeart, FaShoppingCart, FaUser, FaHome } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import mockProducts from '../../data/mockProduct';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const user = { name: 'Ibrohimjon' };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      const filtered = mockProducts.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
    }
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
      setSearchTerm('');
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (title) => {
    navigate(`/search?query=${title}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-wrapper'>
          <div className='nav-logo'>
            <NavLink to='/'>
              <img
                src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/market-cart-logo-template-design-1276b884c934d54065585fc153cce2eb_screen.jpg?ts=1677860657'
                alt='Logotip'
                className='logo-img'
              />
            </NavLink>
          </div>

          <div className='nav-search-wrapper'>
            <input
              type='text'
              placeholder='Mahsulot qidirish...'
              value={searchTerm}
              onChange={handleChange}
              onKeyDown={handleSearch}
            />
            <IoSearch className='nav-search-icon' onClick={() => handleSearch({ key: 'Enter' })} />
            {suggestions.length > 0 && (
              <ul className='search-suggestions'>
                {suggestions.map((item) => (
                  <li key={item.id} onClick={() => handleSuggestionClick(item.title)}>
                    {item.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <ul className='nav-links'>
            <li>
              <NavLink to='/likes' className='nav-link'>
                <FaHeart className='nav-icon' /> <span>Saralangan</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/cart' className='nav-link'>
                <FaShoppingCart className='nav-icon' /> <span>Savat</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/profile' className='nav-link'>
                <FaUser className='nav-icon' /> <span>{user.name}</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Pastki mobil navigatsiya */}
      <div className='mobile-nav'>
        <NavLink to='/' className='nav-link'>
          <FaHome className='nav-icon' />
          <span>Home</span>
        </NavLink>
        <NavLink to='/likes' className='nav-link'>
          <FaHeart className='nav-icon' />
          <span>Like</span>
        </NavLink>
        <NavLink to='/cart' className='nav-link'>
          <FaShoppingCart className='nav-icon' />
          <span>Cart</span>
        </NavLink>
        <NavLink to='/profile' className='nav-link'>
          <FaUser className='nav-icon' />
          <span>Profil</span>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
