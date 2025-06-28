import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import './Wishes.css';

const Wishes = () => {
  const likedProducts = useSelector((state) => state.like.likedProducts);
  const { isAuthenticated } = useSelector((state) => state.auth);
  // if (!isAuthenticated) {
  //   return (
  //     <div className='auth-message'>
  //       <h2>Saralangan mahsulotlarni ko'rish uchun tizimga kiring</h2>
  //     </div>
  //   );
  // }

  return (
    <div className='wishes-container'>
      <h2 className='wishes-title'>Saralangan Mahsulotlar</h2>

      {likedProducts.length > 0 ? (
        <div className='wishes-grid'>
          {likedProducts.map((product, index) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className='product-link'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card {...product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className='no-wishes'>Hozircha saralangan mahsulotingiz yo'q.</p>
      )}
    </div>
  );
};

export default Wishes;
