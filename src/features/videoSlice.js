import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'video',

  initialState: {
    mostPopularVideos: [],
    nextPageToken: '',
  },

  reducers: {
    setMostPopularMovies: (state, action) => {
      state.mostPopularVideos = action.payload;
    },
    setPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
  },
});

export const { setMostPopularMovies, setPageToken } = videoSlice.actions;

export const selectMostPopularVideos = (state) => state.video.mostPopularVideos;
export const selectPageToken = (state) => state.video.nextPageToken;

export default videoSlice.reducer;
