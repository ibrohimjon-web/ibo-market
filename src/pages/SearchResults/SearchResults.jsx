import { useLocation, Link } from 'react-router-dom';
import mockProducts from '../../data/mockProduct';
import Card from '../../components/Card/Card';
import './SearchResults.css';

const SearchResults = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') || '';
  const filtered = mockProducts.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='search-results-container'>
      <h2 className='search-title'>
        Qidiruv natijalari: <span className='query-text'>"{query}"</span>
      </h2>

      {filtered.length > 0 ? (
        <div className='search-product-grid'>
          {filtered.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className='product-link'>
              <Card {...product} />
            </Link>
          ))}
        </div>
      ) : (
        <div className='no-results'>
          <p>
            ❌ <strong>"{query}"</strong> uchun mahsulot topilmadi.
          </p>
          <Link to='/' className='back-home'>
            Bosh sahifaga qaytish
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
