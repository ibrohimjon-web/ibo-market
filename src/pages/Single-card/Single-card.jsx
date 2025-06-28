import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsArrowLeft, BsCartPlus } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import mockProducts from '../../data/mockProduct';
import { addToCart } from '../../redux/slices/cartSlice';
import { toggleLike } from '../../redux/slices/likeSlice';
import './Single-card.css';

const SingleCard = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const likedProducts = useSelector((state) => state.like.likedProducts);

  // Mahsulotni mockProducts dan topamiz
  const product = mockProducts.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div className='not-found-container'>
        <h2>Mahsulot topilmadi</h2>
        <Link to='/' className='back-to-home'>
          <BsArrowLeft /> Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  const isLiked = likedProducts.some((p) => String(p.id) === String(product.id));

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(toggleLike({ ...product }));
    toast.success(isLiked ? 'Saralanganlardan olib tashlandi' : "Saralanganlarga qo'shildi");
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(
      addToCart({
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: 1,
      })
    );

    toast.success("Mahsulot savatga qo'shildi");
  };

  return (
    <div className='single-product-container'>
      <Link to='/' className='back-button'>
        <BsArrowLeft /> Orqaga
      </Link>

      <div className='product-details'>
        <div className='product-gallery'>
          <img src={product.image} alt={product.title} className='main-image' />
        </div>

        <div className='product-info'>
          <div className='product-header'>
            <h1 className='product-title'>{product.title}</h1>
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

          <div className='product-meta'>
            <span className='product-category'>{product.category}</span>
            <div className='product-rating'>
              ⭐ {product.rating} ({product.reviews} sharhlar)
            </div>
          </div>

          <div className='price-section'>
            <div className='current-price'>{product.price} so'm</div>
            {product.oldPrice && <div className='old-price'>{product.oldPrice} so'm</div>}
            {product.perMonth && (
              <div className='monthly-payment'>{product.perMonth} so'm/oyiga</div>
            )}
          </div>

          <div className='product-description'>
            <h3>Tavsif</h3>
            <p>
              Bu premium sifatli <strong>{product.title}</strong> — <em>{product.category}</em>{' '}
              kategoriyasiga tegishli bo‘lib, sizga ishonchli va qulay foydalanish tajribasini
              taqdim etadi. Mahsulotimiz yuqori sifat standartlariga javob beradi va kafolat bilan
              ta'minlangan.
            </p>
          </div>

          <button className='add-to-cart' onClick={handleAddToCart}>
            <BsCartPlus className='cart-icon' />
            Savatga
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
