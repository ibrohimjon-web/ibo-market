import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
import likeReducer from './slices/likeSlice';

// State ni localStorage dan yuklash uchun optimallashtirilgan funksiya
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (!serializedState) return undefined;

    const state = JSON.parse(serializedState);

    // Yaroqli state strukturasini tekshirish
    if (state && typeof state === 'object') {
      return {
        auth: state.auth || { isAuthenticated: false, user: null, token: null },
        cart: state.cart || { cartItems: [], totalQuantity: 0, totalAmount: 0 },
        like: state.like || { likedProducts: [] },
      };
    }
    return undefined;
  } catch (error) {
    console.error('Failed to load state from localStorage:', error);
    return undefined;
  }
};

// State ni localStorage ga saqlash (debounce bilan optimallashtirilgan)
const saveState = (state) => {
  try {
    // Faqat kerakli qismlarni saqlash
    const stateToPersist = {
      auth: {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.user,
        token: state.auth.token,
      },
      cart: {
        cartItems: state.cart.cartItems,
        totalQuantity: state.cart.totalQuantity,
        totalAmount: state.cart.totalAmount,
      },
      like: {
        likedProducts: state.like.likedProducts,
      },
    };

    const serializedState = JSON.stringify(stateToPersist);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    console.error('Failed to save state to localStorage:', error);
  }
};

// Debounce funktsiyasi - tez-tez saqlashni oldini olish uchun
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    like: likeReducer,
  },
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore non-serializable values in actions if needed
        ignoredActions: ['some/non-serializable/action'],
        ignoredPaths: ['some.non.serializable.path'],
      },
    }),
});

// State o'zgarishlarini kuzatish (debounce bilan optimallashtirilgan)
const debouncedSave = debounce(() => {
  const currentState = store.getState();
  saveState(currentState);
}, 1000); // 1 soniya debounce

store.subscribe(debouncedSave);

export default store;
