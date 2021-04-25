import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',

  initialState: {
    user: null,
    error: {},
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setError: (state, action) => {
      state.error = { ...action.payload };
    },
  },
});

export const { login, logout, setError } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
