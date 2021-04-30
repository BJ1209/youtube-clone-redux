import { createSlice } from '@reduxjs/toolkit';

export const playlists = createSlice({
  name: 'playlists',

  initialState: {
    loading: true,
    playlists: [],
    error: {},
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setPlaylists: (state, action) => {
      state.playlists = [...action.payload];
    },
    setPlaylistError: (state, action) => {
      state.error = { ...action.payload };
    },
  },
});

export const { setLoading, setPlaylists, setPlaylistError } = playlists.actions;

export const selectLoading = (state) => state.playlists.loading;
export const selectPlaylists = (state) => state.playlists.playlists;

export default playlists.reducer;
