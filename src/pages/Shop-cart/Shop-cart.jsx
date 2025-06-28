import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../../redux/slices/cartSlice';
import CheckoutForm from './CheckoutForm';
import './Shop-cart.css';
import { Link } from 'react-router-dom';

const ShopCart = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className='cart-container'>
      <h2 className='cart-title'>Savatdagi Mahsulotlar</h2>

      {cartItems.length === 0 ? (
        <p className='cart-empty'>Savatda mahsulot yo'q.</p>
      ) : (
        <>
          <div className='cart-items'>
            {cartItems.map((item) => (
              <Link to={`/product/${item.id}`} className='cart-item'>
                <img src={item.image} alt={item.title} />
                <div className='cart-info'>
                  <h4>{item.title}</h4>
                  <p>{item.price} so'm</p>
                  <button
                    className='delete-btn'
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleRemove(item.id);
                    }}
                  >
                    O'chirish
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <div className='cart-summary'>
            <p>
              Umumiy: <strong>{totalAmount.toLocaleString()} so'm</strong>
            </p>
            <button className='checkout-btn' onClick={() => setShowForm(true)}>
              Rasmiylashtirish
            </button>
            <button className='clear-btn' onClick={handleClearCart}>
              Savatni tozalash
            </button>
          </div>
        </>
      )}

      {showForm && <CheckoutForm onClose={() => setShowForm(false)} />}
    </div>
  );
};

export default ShopCart;
