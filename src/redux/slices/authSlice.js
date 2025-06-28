import { createSlice } from '@reduxjs/toolkit';

// LocalStorage'dan auth holatini yuklash
const loadAuthState = () => {
  try {
    const serializedState = localStorage.getItem('authState');
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadAuthState() || {
  isAuthenticated: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      // LocalStorage ga saqlash
      localStorage.setItem(
        'authState',
        JSON.stringify({
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        })
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;

      // LocalStorage dan o'chirish
      localStorage.removeItem('authState');
    },
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;

      // LocalStorage ga saqlash
      localStorage.setItem(
        'authState',
        JSON.stringify({
          isAuthenticated: true,
          user: action.payload.user,
          token: action.payload.token,
        })
      );
    },
  },
});

export const { loginSuccess, logout, registerSuccess } = authSlice.actions;
export default authSlice.reducer;
