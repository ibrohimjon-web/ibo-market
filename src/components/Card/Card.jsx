import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import { toggleLike } from '../../redux/slices/likeSlice';
import { addToCart } from '../../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import './Card.css';

const Card = ({ id, image, title, category, price, oldPrice, perMonth, rating, reviews }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  const likedProducts = useSelector((state) => state.like.likedProducts);

  // ID solishtirishda type mismatch bo'lmasligi uchun
  const isLiked = likedProducts.some((p) => p.id === id);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // if (!isAuthenticated) {
    //   toast.warning('Saralash uchun tizimga kiring');
    //   return;
    // }

    dispatch(
      toggleLike({
        id,
        image,
        title,
        category,
        price,
        oldPrice,
        perMonth,
        rating,
        reviews,
      })
    );

    // Debug uchun konsolga chiqaramiz
    console.log('Dispatching toggleLike with:', {
      id,
      image,
      title,
      category,
      price,
      oldPrice,
      perMonth,
      rating,
      reviews,
    });
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      addToCart({
        id,
        image,
        title,
        price,
        quantity: 1,
      })
    );

    toast.success("Mahsulot savatga qo'shildi");
  };

  return (
    <div className='product-card'>
      <div className='product-image-wrapper'>
        <img src={image} alt={title} className='product-image' loading='lazy' />
        <span className='category-badge'>{category}</span>
        <button
          className={`like-button ${isLiked ? 'active' : ''}`}
          onClick={handleLike}
          aria-label={isLiked ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isLiked ? (
            <AiFillHeart className='heart-icon' />
          ) : (
            <AiOutlineHeart className='heart-icon' />
          )}
        </button>
      </div>

      <div className='product-info'>
        <h3 className='product-title'>{title}</h3>

        <div className='product-price-container'>
          <span className='price'>{price} so'm</span>
          {oldPrice && <span className='old-price'>{oldPrice} so'm</span>}
        </div>

        {perMonth && <div className='product-per-month'>{perMonth} so'm/oyiga</div>}

        {rating && reviews && (
          <div className='product-rating'>
            <span className='star'>⭐</span>
            <span className='rating'>{rating}</span>
            <span className='reviews'>({reviews} sharhlar)</span>
          </div>
        )}

        <button className='add-to-cart' onClick={handleAddToCart}>
          <BsCartPlus className='cart-icon' />
          Savatga
        </button>
      </div>
    </div>
  );
};

export default Card;
