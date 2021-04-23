import { createSlice } from '@reduxjs/toolkit';

export const playlists = createSlice({
  name: 'playlists',

  initialState: {
    loading: true,
    playlists: [],
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPlaylists: (state, action) => {
      state.playlists = [...action.payload];
    },
  },
});

export const { setLoading, setPlaylists } = playlists.actions;

export const selectLoading = (state) => state.playlists.loading;
export const selectPlaylists = (state) => state.playlists.playlists;

export default playlists.reducer;
