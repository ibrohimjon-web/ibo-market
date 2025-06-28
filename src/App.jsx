import { Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import CategoryDetails from './pages/CategoryDetails/CategoryDetails';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import NotFound from './pages/NotFound/NotFound';
import Profile from './pages/Profile/Profile';
import SearchResults from './pages/SearchResults/SearchResults';
import ShopCart from './pages/Shop-cart/Shop-cart';
import SingleCard from './pages/Single-card/Single-card';
import Wishes from './pages/Wishes/Wishes';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const authState = JSON.parse(localStorage.getItem('authState'));
    if (authState && authState.isAuthenticated) {
      dispatch(
        loginSuccess({
          user: authState.user,
          token: authState.token,
        })
      );
    }
  }, [dispatch]);
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/kategoriya/:kategoriyaNomi' element={<CategoryDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/product/:id' element={<SingleCard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/search' element={<SearchResults />} />
        <Route path='/likes' element={<Wishes />} />
        <Route path='/cart' element={<ShopCart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
