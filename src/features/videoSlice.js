import { createSlice } from '@reduxjs/toolkit';

export const videoSlice = createSlice({
  name: 'video',

  initialState: {
    videos: [],
    activeCategory: 'All',
    nextPageToken: '',
  },

  reducers: {
    setHomeVideos: (state, action) => {
      const videos =
        state.activeCategory === 'All' ? [...state.videos, ...action.payload] : action.payload;
      state.videos = videos;
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setPageToken: (state, action) => {
      state.nextPageToken = action.payload;
    },
  },
});

export const { setHomeVideos, setActiveCategory, setPageToken } = videoSlice.actions;

export const selectHomeVideos = (state) => state.video.videos;
export const selectPageToken = (state) => state.video.nextPageToken;
export const selectActiveCategory = (state) => state.video.activeCategory;

export default videoSlice.reducer;
